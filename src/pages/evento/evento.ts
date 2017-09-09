import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventoProvider } from '../../providers/event';

@IonicPage()
@Component({
  selector: 'page-evento',
  templateUrl: 'evento.html',
})
export class EventoPage {
  
    constructor(public navCtrl:NavController, public eventProvider:EventoProvider) {}
  
    createEvent(eventoNome:string, 
      eventoData:string, 
      eventoPreco:number, 
      eventoCusto:number):void {
      this.eventProvider.createEvent(eventoNome, eventoData, eventoPreco, eventoCusto).then( newEvent => {
        this.navCtrl.pop();
      })
    }
  
  }
