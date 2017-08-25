import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { Login } from '../pages/login/login';
import { HomePage } from '../pages/home/home';

import { Youtube } from '../pipes/youtube';
import firebase from 'firebase';

//ativa o map para realizar as requisições assíncronas, pega a resposta do http e transforma em Json 
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { UsuarioService } from "../domain/usuario/usario-service";
import { HttpModule } from '@angular/http';

firebase.initializeApp({
    apiKey: "AIzaSyBVzzNIKf9KEl0US9yfJI5FXPUNlZEYsbI",
    authDomain: "papaiapp-36bec.firebaseapp.com",
    databaseURL: "https://papaiapp-36bec.firebaseio.com",
    projectId: "papaiapp-36bec",
    storageBucket: "papaiapp-36bec.appspot.com",
    messagingSenderId: "673077935413"
  });

@NgModule({
  declarations: [
    MyApp,
    Login,
    HomePage,
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
    Login,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsuarioService
  ]
})
export class AppModule {}
