import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Fan } from './fan';

@NgModule({
  declarations: [
    Fan,
  ],
  imports: [
    IonicPageModule.forChild(Fan),
  ],
})
export class FanModule {}
