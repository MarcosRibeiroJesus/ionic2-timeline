import { Component, ViewChild} from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FotosEventoPage } from "../pages/fotos-evento/fotos-evento";
import { MapaPage } from "../pages/mapa/mapa";

import { LoginPage } from '../pages/login/login';
import { HomePage } from "../pages/home/home";

import firebase from 'firebase';
import { EventoPage } from '../pages/evento/evento';
import { NovoEventoPage } from '../pages/novo-evento/novo-evento';
import { ListaEventosPage } from '../pages/lista-eventos/lista-eventos';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //rootPage = Login; vamos utilizar any para poder logar automatimente após primeira autenticação
  rootPage:any;
  
  public paginas = [
    { titulo: 'Criar Evento', componente: EventoPage },
    { titulo: 'Listar Eventos', componente: ListaEventosPage },
    { titulo: 'Fotos do Evento', componente: FotosEventoPage },
    { titulo: 'Mapa', componente: MapaPage }
  ]

  @ViewChild(Nav) public nav: Nav;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

    firebase.initializeApp({
    apiKey: "AIzaSyBVzzNIKf9KEl0US9yfJI5FXPUNlZEYsbI",
    authDomain: "papaiapp-36bec.firebaseapp.com",
    databaseURL: "https://papaiapp-36bec.firebaseio.com",
    projectId: "papaiapp-36bec",
    storageBucket: "papaiapp-36bec.appspot.com",
    messagingSenderId: "673077935413"
    });

    const unsubscribe = firebase.auth().onAuthStateChanged( user => {
      if(!user){
        this.rootPage = LoginPage;
        unsubscribe();
      } else {
        this.rootPage = HomePage;
        unsubscribe();
      }
    });

    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  abrePagina(pagina) {

    this.nav.push(pagina.componente);
  }
}

