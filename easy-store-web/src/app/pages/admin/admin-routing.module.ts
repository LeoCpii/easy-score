import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPage } from './admin.page';
import { AdminResolver } from './admin.resolver';
import { ListPage } from './list/list.page';

const routes: Routes = [
  {
    path: '',
    component: AdminPage,
    resolve: { data: AdminResolver },
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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AdminRoutingModule { }
