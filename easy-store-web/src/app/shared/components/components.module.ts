import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Components
import { LoadingComponent } from './loading/loading.component';
import { ButtonComponent } from './button/button.component';
import { FormLogComponent } from './form-log/form-log.component';
import { InputComponent } from './input/input.component';

// Services

// Modules
import { MaterialModule } from './material.module';
import { NgxMaskModule } from 'ngx-mask';
import { InputSelectComponent } from './input-select/input-select.component';

const COMPONENTS = [
    LoadingComponent,
    ButtonComponent,
    FormLogComponent,
    InputComponent,
    InputSelectComponent
];

const PROVIDERS = [];

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        MaterialModule,
        NgxMaskModule.forRoot(),
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
