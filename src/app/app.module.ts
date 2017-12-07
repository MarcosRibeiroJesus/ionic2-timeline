import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';  
import { Push } from "@ionic-native/push";
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login'; 
import { HomePage } from '../pages/home/home'; 
import { Fan } from "../pages/fan/fan";
import { ComentariosPage } from "../pages/comentarios/comentarios";
import { UsuariosPage } from "../pages/usuarios/usuarios";

import { Youtube } from '../pipes/youtube';
import { Network } from '@ionic-native/network' 
 
//ativa o map para realizar as requisições assíncronas, pega a resposta do http e transforma em Json 
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { UsuarioService } from "../domain/usuario/usario-service";
import { HttpModule } from '@angular/http';
import { AuthProvider } from '../providers/auth';
import { EventProvider } from '../providers/event';
import { ProfileProvider } from '../providers/profile';
import { AngularFireModule } from "angularfire2"; 
import { GooglePlus } from '@ionic-native/google-plus';
import { InAppBrowser } from "@ionic-native/in-app-browser";
// import { AngularFireDatabaseModule } from "angularfire2/database";

import { Camera } from 'ionic-native';
import { EnviarFotosPage } from '../pages/enviar-fotos/enviar-fotos';
import { MuralPage } from '../pages/mural/mural';
import { PerfilPage } from '../pages/perfil/perfil';
import *as firebase from 'firebase';

import { TabsPage } from '../pages/tabs/tabs';
//   class CameraMock extends Camera {
//   getPicture(options){
//     return new Promise( (resolve, reject) => {
//       resolve(`TWFuIGlzIGRpc3Rpbmd1aXNoZWQsIG5vdCBvbmx5IGJ5IGhpcyByZWFzb24sIGJ1dCBieSB0aGlzIHNpbmd1
//       bGFyIHBhc3Npb24gZnJvbSBvdGhlciBhbmltYWxzLCB3aGljaCBpcyBhIGx1c3Qgb2YgdGhlIG1pbmQsIHRoYXQgYnkgY
//       SBwZXJzZXZlcmFuY2Ugb2YgZGVsaWdodCBpbiB0aGUgY29udGludWVkIGFuZCBpbmRlZmF0aWdhYmxlIGdlbmVyYXRpb2
//       4gb2Yga25vd2xlZGdlLCBleGNlZWRzIHRoZSBzaG9ydCB2ZWhlbWVuY2Ugb2YgYW55IGNhcm5hbCBwbGVhc3VyZS4=`);
//     });
//   }
// }

export const firebaseConfig = {
    apiKey: "AIzaSyBVzzNIKf9KEl0US9yfJI5FXPUNlZEYsbI",
    authDomain: "papaiapp-36bec.firebaseapp.com",
    databaseURL: "https://papaiapp-36bec.firebaseio.com",
    projectId: "papaiapp-36bec",
    storageBucket: "papaiapp-36bec.appspot.com",
    messagingSenderId: "673077935413"
};

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    Fan,
    Youtube,
    EnviarFotosPage,
    MuralPage,
    ComentariosPage,
    UsuariosPage,
    TabsPage,
    PerfilPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    Fan,
    EnviarFotosPage,
    MuralPage,
    ComentariosPage,
    UsuariosPage,
    TabsPage,
    PerfilPage 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    //{provide: Camera, useClass: CameraMock},
    UsuarioService,
    AuthProvider,
    EventProvider,
    ProfileProvider,
    Camera,
    GooglePlus,
    InAppBrowser,
    Push,
    Network
  ]
})
export class AppModule {}
