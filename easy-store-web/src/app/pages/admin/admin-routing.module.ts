import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoggedGuard } from 'src/app/shared/guards/logged.guard';
import { AdminPage } from './admin.page';
import { AdminResolver } from './admin.resolver';
import { CreateAppPage } from './create-app/create-app.page';
import { CreateAppResolver } from './create-app/create-app.resolver';
import { ListPage } from './list/list.page';

const routes: Routes = [
  {
    path: '',
    component: AdminPage,
    resolve: { data: AdminResolver },
    canActivate: [LoggedGuard],
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: ListPage,
      },
      {
        path: 'create-app',
        component: CreateAppPage,
      },
      {
        path: 'edit-app/:slug',
        component: CreateAppPage,
        resolve: { data: CreateAppResolver },
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AdminRoutingModule { }
