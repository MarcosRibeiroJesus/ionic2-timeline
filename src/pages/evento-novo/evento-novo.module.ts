import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventoNovoPage } from './evento-novo';

@NgModule({
  declarations: [
    EventoNovoPage,
  ],
  imports: [
    IonicPageModule.forChild(EventoNovoPage),
  ],
})
export class EventoNovoModule {}
