import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { FotosEventoPage } from "../pages/fotos-evento/fotos-evento";
import { MapaPage } from "../pages/mapa/mapa";
import { EventoDetalhePage } from "../pages/evento-detalhe/evento-detalhe";
import { ListaEventosPage } from "../pages/lista-eventos/lista-eventos";
import { EventoNovoPage } from "../pages/evento-novo/evento-novo";
import { Fan } from "../pages/fan/fan";

import { Youtube } from '../pipes/youtube';


//ativa o map para realizar as requisições assíncronas, pega a resposta do http e transforma em Json 
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { UsuarioService } from "../domain/usuario/usario-service";
import { HttpModule } from '@angular/http';
import { AuthProvider } from '../providers/auth';
import { EventoProvider } from '../providers/event';
import { ProfileProvider } from '../providers/profile';

import { Camera } from '@ionic-native/camera';



  class CameraMock extends Camera {
  getPicture(options){
    return new Promise( (resolve, reject) => {
      resolve(`TWFuIGlzIGRpc3Rpbmd1aXNoZWQsIG5vdCBvbmx5IGJ5IGhpcyByZWFzb24sIGJ1dCBieSB0aGlzIHNpbmd1
      bGFyIHBhc3Npb24gZnJvbSBvdGhlciBhbmltYWxzLCB3aGljaCBpcyBhIGx1c3Qgb2YgdGhlIG1pbmQsIHRoYXQgYnkgY
      SBwZXJzZXZlcmFuY2Ugb2YgZGVsaWdodCBpbiB0aGUgY29udGludWVkIGFuZCBpbmRlZmF0aWdhYmxlIGdlbmVyYXRpb2
      4gb2Yga25vd2xlZGdlLCBleGNlZWRzIHRoZSBzaG9ydCB2ZWhlbWVuY2Ugb2YgYW55IGNhcm5hbCBwbGVhc3VyZS4=`);
    });
  }
}

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    FotosEventoPage,
    MapaPage,
    EventoNovoPage,
    ListaEventosPage,
    Fan,
    Youtube
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    FotosEventoPage,
    MapaPage,
    EventoNovoPage,
    ListaEventosPage,
    Fan
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: Camera, useClass: CameraMock},
    UsuarioService,
    AuthProvider,
    EventoProvider,
    ProfileProvider,
    //Camera
  ]
})
export class AppModule {}
