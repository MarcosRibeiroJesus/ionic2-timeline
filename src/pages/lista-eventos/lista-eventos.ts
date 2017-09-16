import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { EventoProvider } from '../../providers/event';
import { DecimalPipe } from '@angular/common';
import { EventoDetalhePage } from "../evento-detalhe/evento-detalhe";

@IonicPage()
@Component({
  selector: 'page-lista-eventos',
  templateUrl: 'lista-eventos.html',
})

export class ListaEventosPage {
  public eventoList:Array<any>;

  constructor(public navCtrl: NavController,
              public eventoProvider: EventoProvider) {}

  ionViewDidLoad() {
    this.eventoProvider.getEventoList().on('value', eventoListSnapshot => {
      this.eventoList = [];
      eventoListSnapshot.forEach( snap => {
        this.eventoList.push({
          id: snap.key,
          nome: snap.val().nome,
          preco: snap.val().preco,
          data: snap.val().data
        });
        return false;
      });
    });
  }

  goToEventoDetalhe(eventoId):void {
    this.navCtrl.push('EventoDetalhePage', { 'eventoId': eventoId });
  }

}
