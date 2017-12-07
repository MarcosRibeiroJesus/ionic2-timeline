import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EnviarFotosPage } from './enviar-fotos';

@NgModule({
  declarations: [
    EnviarFotosPage,
  ],
  imports: [
    IonicPageModule.forChild(EnviarFotosPage),
  ],
})
export class EnviarFotosPageModule {}
