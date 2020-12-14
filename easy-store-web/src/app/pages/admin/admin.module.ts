import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminPage } from './admin.page';
import { ListPage } from './list/list.page';
import { CardAppFragment } from './list/card-app/card-app.fragment';
import { CreateAppPage } from './create-app/create-app.page';

const PAGES = [
    AdminPage,
    ListPage,
    CreateAppPage
];

const FRAGMENTS = [CardAppFragment]

@NgModule({
    imports: [
        AdminRoutingModule,
        SharedModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [...PAGES, ...FRAGMENTS],
})
export class AdminModule { }
