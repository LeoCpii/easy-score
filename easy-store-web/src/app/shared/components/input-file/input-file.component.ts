import { Component, OnInit, Input, ViewChild, ElementRef, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NgControl, FormControl } from '@angular/forms';
import { FormatterService } from '../../services/formatter.service';

interface IFile {
    name: string;
    size: string;
    type: string;
    base64: string;
}

@Component({
    selector: 'app-input-file',
    templateUrl: 'input-file.component.html',
    styleUrls: ['input-file.component.scss']
})

export class InputFileComponent implements OnInit, ControlValueAccessor {
    public onChangeFn!: (valid: string) => void;
    public onTouched!: () => void;

    public show: boolean;
    public data: IFile;
    public digit = 0;
    public loading = false;
    public messageError: string;

    public field = new FormControl('');

    constructor(
        private formatter: FormatterService,
        @Optional() @Self() private controlDir: NgControl,
    ) { controlDir.valueAccessor = this; }

    @ViewChild('input', { static: false }) private input: ElementRef;

    ngOnInit() { }

    public get percent() {
        return `${this.digit} %`;
    }

    public get control() {
        return this.controlDir.control;
    }

    public get icon() {
        return this.messageError ? 'close' : 'done';
    }

    writeValue(value: string) {
        this.field.setValue(value);
    }

    registerOnChange(fn: (value: string) => void) {
        this.onChangeFn = fn;
    }

    registerOnTouched(fn: () => void) {
        this.onTouched = fn;
    }

    public getClass(): string[] {
        const cls = [];

        if (this.messageError) { cls.push('icon--error'); }
        if (!this.messageError) { cls.push('icon--success'); }

        return cls;
    }

    private reset() {
        this.digit = 0;
    }

    private animate() {
        let num = 0;
        const interval = setInterval(() => {
            this.digit = num;
            if (num >= 100) {
                setTimeout(() => {
                    this.loading = false;
                    if (!this.messageError) { this.onChangeFn(this.data.base64); }
                }, 500);
                clearInterval(interval);
            }
            num++;
        }, 10);
    }

    private setError() {
        this.messageError = 'O tamanho do arquivo deve ser inferior a 1MB';
    }

    public async onChange(event: Event): Promise<void> {
        this.reset();
        this.loading = true;
        const file = event.target['files'][0] as File;

        if (file.size > 1024*1000) {
            this.setError();
        } else {
            this.messageError = '';
        }

        this.data = {
            name: file.name,
            size: this.formatter.getConvertFileSize(file.size),
            type: file.type,
            base64: await this.formatter.fileToBase64(file)
        };

        this.animate();
    }

    public onBlur(event: Event) {
        this.onTouched();
    }
}

