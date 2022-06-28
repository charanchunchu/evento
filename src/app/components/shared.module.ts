import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';
import { IconButtonComponent } from './icon-button/icon-button.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [InputComponent, ButtonComponent, IconButtonComponent],
  imports: [CommonModule, IonicModule],
  exports: [InputComponent, ButtonComponent, IconButtonComponent],
})
export class SharedModule {}
