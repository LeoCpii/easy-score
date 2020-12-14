import { Component, OnInit, Input, ViewChild, ElementRef, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NgControl, FormControl } from '@angular/forms';
import { SLIDE_Y_STATE } from '../../animations/slide.animation';

interface IColorInput {
    color: {
        hex: string;
    }
}

@Component({
    selector: 'app-input-color-picker',
    templateUrl: 'input-color-picker.component.html',
    styleUrls: ['input-color-picker.component.scss'],
    animations: [SLIDE_Y_STATE]
})

export class InputColorPickerComponent implements OnInit, ControlValueAccessor {
    public onChangeFn!: (valid: string) => void;
    public onTouched!: () => void;

    public show: boolean;

    public field = new FormControl('');

    @Input() color: string;
    @Input() label: string;

    constructor(
        @Optional() @Self() private controlDir: NgControl,
    ) { controlDir.valueAccessor = this; }

    @ViewChild('input', { static: false }) private input: ElementRef;

    public get control() {
        return this.controlDir.control;
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

    public open() {
        this.show = true;
    }

    public close() {
        this.show = false;
    }

    public changeComplete(e: IColorInput) {
        this.color = e.color.hex;
        this.onChange(this.color);
    }

    public onChange(value: string): void {
        this.onChangeFn(value);
    }

    public onBlur(value: string) {
        this.onTouched();
    }

    ngOnInit() {
        this.color = this.color || '#000';
    }
}

