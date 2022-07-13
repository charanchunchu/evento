import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainscreenPageRoutingModule } from './mainscreen-routing.module';

import { MainscreenPage } from './mainscreen.page';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainscreenPageRoutingModule
  ],
  declarations: [MainscreenPage]
})
export class MainscreenPageModule {}
