import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FotosEventoPage } from './fotos-evento';

@NgModule({
  declarations: [
    FotosEventoPage,
  ],
  imports: [
    IonicPageModule.forChild(FotosEventoPage),
  ],
})
export class FotosEventoModule {}
