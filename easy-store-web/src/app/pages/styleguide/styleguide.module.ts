import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StyleguideRoutingModule } from './styleguide-routing.module';
import { StyleguidePage } from './styleguide.page';
import { TypohraphyPage } from './typography/typography.page';
import { ColorPage } from './color/color.page';
import { ButtonPage } from './button/button.page';
import { FormPage } from './form/form.page';

const PAGES = [
    StyleguidePage,
    TypohraphyPage,
    ColorPage,
    ButtonPage,
    FormPage,
];

@NgModule({
    imports: [
        StyleguideRoutingModule,
        SharedModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
        ...PAGES
    ],
})
export class StyleguideModule { }
