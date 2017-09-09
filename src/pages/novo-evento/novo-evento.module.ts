import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NovoEventoPage } from './novo-evento';

@NgModule({
  declarations: [
    NovoEventoPage,
  ],
  imports: [
    IonicPageModule.forChild(NovoEventoPage),
  ],
})
export class NovoEventoModule {}
