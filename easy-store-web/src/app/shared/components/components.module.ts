import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Components
import { LoadingComponent } from './loading/loading.component';

// Services

// Modules
import { MaterialModule } from './material.module';
import { ButtonComponent } from './button/button.component';

const COMPONENTS = [
    LoadingComponent,
    ButtonComponent
];

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
