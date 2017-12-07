import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage: any;

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

    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        this.rootPage = LoginPage;
        unsubscribe();
      } else {
        this.rootPage = TabsPage;
        unsubscribe();
      }
    });

    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  abrePagina(pagina) {
    this.nav.push(pagina.component);
  }
}

