import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainscreenPage } from './mainscreen.page';

const routes: Routes = [
  {
    path: '',
    component: MainscreenPage
  }
];

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainscreenPageRoutingModule {}
