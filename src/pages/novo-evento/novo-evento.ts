import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-novo-evento',
  templateUrl: 'novo-evento.html',
})

export class NovoEventoPage {
  
    constructor(public navCtrl: NavController) {}
  
    goToProfile():void { this.navCtrl.push('PerfilPage') }
    
    goToCreate():void { this.navCtrl.push('EventoPage') }
  
    goToList():void { this.navCtrl.push('ListaEventosPage') }
  
  }