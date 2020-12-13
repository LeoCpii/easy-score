import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonPage } from './button/button.page';
import { ColorPage } from './color/color.page';
import { FormPage } from './form/form.page';
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
      {
        path: 'button',
        component: ButtonPage,
        data: { title: 'button' }
      },
      {
        path: 'form',
        component: FormPage,
        data: { title: 'form' }
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
