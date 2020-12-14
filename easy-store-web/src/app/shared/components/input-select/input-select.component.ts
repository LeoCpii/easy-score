import { Component, OnInit, Input, ViewChild, ElementRef, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NgControl, FormControl } from '@angular/forms';

@Component({
    selector: 'app-input-select',
    templateUrl: 'input-select.component.html',
    styleUrls: ['input-select.component.scss']
})

export class InputSelectComponent implements OnInit, ControlValueAccessor {
    public onChangeFn!: (valid: string) => void;
    public onTouched!: () => void;

    public show: boolean;

    public field = new FormControl('');

    constructor(
        @Optional() @Self() private controlDir: NgControl,
    ) { controlDir.valueAccessor = this; }

    @ViewChild('input', { static: false }) private input: ElementRef;

    @Input() data: any[] = [];
    @Input() keyLabel?: string;
    @Input() keyValue?: string;
    @Input() label: string;
    @Input() required = false;
    @Input() messageError: string;
    @Input() setter: string;

    public get control() {
        return this.controlDir.control;
    }

    public message() {
        return 'Campo obrigatório';
    }

    public open() {
        this.input.nativeElement.click();
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

    public shouldDisplayError(): boolean {
        const control = this.field;
        return ((control.errors && control.errors[0] && control.touched) || !!this.messageError);
    }

    public onChange(value: string): void {
        this.onChangeFn(value);
    }

    public onBlur(value: string) {
        this.onTouched();
    }

    public set(value: string): boolean {
        return value === this.setter;
    }

    ngOnInit() { }
}

