import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Components

// Services

// Modules
import { MaterialModule } from './material.module';

const COMPONENTS = [];

const PROVIDERS = [];

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        MaterialModule,
    ],
    exports: [
        ...COMPONENTS,
        MaterialModule,
    ],
    declarations: [...COMPONENTS],
    providers: [
        ...PROVIDERS,
    ]
})

export class ComponentsModule { }
