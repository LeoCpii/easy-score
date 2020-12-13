import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColorPage } from './color/color.page';
import { StyleguidePage } from './styleguide.page';
import { TypohraphyPage } from './typography/typography.page';

const routes: Routes = [
  {
    path: '',
    component: StyleguidePage,
    data: { title: 'Styleguide' },
    children: [
      {
        path: '',
        redirectTo: 'typography',
        pathMatch: 'full'
      },
      {
        path: 'typography',
        component: TypohraphyPage,
        data: { title: 'typography' }
      },
      {
        path: 'color',
        component: ColorPage,
        data: { title: 'color' }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class StyleguideRoutingModule { }
