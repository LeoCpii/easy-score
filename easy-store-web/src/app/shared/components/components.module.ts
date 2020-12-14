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
import { PasswordRequirementsComponent } from './password-requirements/password-requirements.component';
import { PasswordRequirementsItemComponent } from './password-requirements/password-requirements-item/password-requirements-item.component';
import { AlertComponent } from './alert/alert.component';
import { SVGComponent } from './svg/svg.component';
import { ModalPageComponent } from './modal-page/modal-page.component';
import { InputFileComponent } from './input-file/input-file.component';
import { InputColorPickerComponent } from './input-color-picker/input-color-picker.component';

// Services
import { PasswordRequirementsService } from './password-requirements/password-requirement.service';

// Modules
import { MaterialModule } from './material.module';
import { NgxMaskModule } from 'ngx-mask';
import { ColorSketchModule } from 'ngx-color/sketch';
import { ClickOutsideModule } from 'ng-click-outside';

const COMPONENTS = [
    LoadingComponent,
    ButtonComponent,
    FormLogComponent,
    InputComponent,
    InputSelectComponent,
    AvatarComponent,
    LogoComponent,
    SkeletonLoadingComponent,
    PasswordRequirementsComponent,
    PasswordRequirementsItemComponent,
    AlertComponent,
    SVGComponent,
    ModalPageComponent,
    InputFileComponent,
    InputColorPickerComponent
];

const PROVIDERS = [PasswordRequirementsService];

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        MaterialModule,
        ColorSketchModule,
        ClickOutsideModule,
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
