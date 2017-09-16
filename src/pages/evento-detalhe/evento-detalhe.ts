import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventoProvider } from '../../providers/event';
import { Camera } from '@ionic-native/camera';

@IonicPage({
  segment: 'evento-detalhe/:eventoId'
})
@Component({
  selector: 'page-evento-detalhe',
  templateUrl: 'evento-detalhe.html',
})
export class EventoDetalhePage {
  public eventoAtual:any = {};
  public convidadoNome:string = '';
  public convidadoFoto:string = null;

  constructor(public navCtrl:NavController, public navParams:NavParams, 
    public eventoProvider:EventoProvider, public cameraPlugin:Camera) {}

  ionViewDidLoad() {
    this.eventoProvider.getEventoDetalhe(this.navParams.get('eventoId')).on('value', eventoSnapshot => {
      this.eventoAtual = eventoSnapshot.val();
      this.eventoAtual.id = eventoSnapshot.key;
    });
  }

  addConvidado(convidadoNome:string):void {
    this.eventoProvider.addConvidado(convidadoNome, this.eventoAtual.id, this.eventoAtual.price,
      this.convidadoFoto).then( newConvidado => {
      this.convidadoNome = '';
      this.convidadoFoto = null;
    });
  }

  tirarFoto():void {
    this.cameraPlugin.getPicture({
      quality : 95,
      destinationType : this.cameraPlugin.DestinationType.DATA_URL,
      sourceType : this.cameraPlugin.PictureSourceType.CAMERA,
      allowEdit : true,
      encodingType: this.cameraPlugin.EncodingType.PNG,
      targetWidth: 500,
      targetHeight: 500,
      saveToPhotoAlbum: true
    }).then(imageData => {
      this.convidadoFoto = imageData;
    }, error => {
      console.log("ERROR -> " + JSON.stringify(error));
    });
  }

}