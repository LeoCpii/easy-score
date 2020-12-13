import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Components
import { LoadingComponent } from './loading/loading.component';
import { ButtonComponent } from './button/button.component';
import { FormLogComponent } from './form-log/form-log.component';
import { InputComponent } from './input/input.component';
import { InputSelectComponent } from './input-select/input-select.component';
import { AvatarComponent } from './avatar/avatar.component';
import { LogoComponent } from './logo/logo.component';
import { SkeletonLoadingComponent } from './skeleton-loading/skeleton-loading.component';

// Services

// Modules
import { MaterialModule } from './material.module';
import { NgxMaskModule } from 'ngx-mask';

const COMPONENTS = [
    LoadingComponent,
    ButtonComponent,
    FormLogComponent,
    InputComponent,
    InputSelectComponent,
    AvatarComponent,
    LogoComponent,
    SkeletonLoadingComponent
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
