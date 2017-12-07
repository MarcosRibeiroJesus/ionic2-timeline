import { Component } from '@angular/core';
import {
  NavController,
  AlertController,
  Loading,
  LoadingController,
  MenuController,
  Alert
} from 'ionic-angular';
import { AngularFireAuth } from "angularfire2";
import { HomePage } from '../home/home';
import firebase from 'firebase';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthProvider } from "../../providers/auth";
import { EmailValidator } from "../../validators/email";
import { GooglePlus } from '@ionic-native/google-plus';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public loginForm: FormGroup;
  public loading: Loading;
  public userProfile: any = null;

  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public authProvider: AuthProvider,
    public formBuilder: FormBuilder,
    private menu: MenuController,
    private fire: AngularFireAuth,
    private googlePlus: GooglePlus) {

    this.loginForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.userProfile = user;
      } else {
        this.userProfile = null;
      }
    });
  }

  ionViewDidEnter() {
    this.menu.swipeEnable(false);
  }

  ionViewDidLeave() {
    this.menu.swipeEnable(true);
  }

  loginUser(): void {
    if (!this.loginForm.valid) {
      console.log(`Form isn't valid yet, current value: ${this.loginForm.value}`);
    } else {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;

      this.authProvider.loginUser(email, password).then(authData => {
        this.loading.dismiss().then(() => {
          this.navCtrl.setRoot(TabsPage, {});
        });
      }, error => {
        this.loading.dismiss().then(() => {
          const alert: Alert = this.alertCtrl.create({
            message: "Algo deu errado, tente novamente.",
            buttons: [{ text: "Ok", role: 'Cancelar' }]
          });
          alert.present()
        });
      });
      this.loading = this.loadingCtrl.create();
      this.loading.present()
    }
  }

  goToSignup(): void {
    this.navCtrl.push('CadastroPage');
  }

  goToResetPassword(): void {
    this.navCtrl.push('ResetPasswordPage');
  }

  //Login with FB
  loginFacebook() {
    let provider = new firebase.auth.FacebookAuthProvider();

    firebase.auth()
      .signInWithRedirect(provider).then((fb) => {
        firebase.auth().getRedirectResult()
        .then(newUser => {
          firebase.database().ref(`/userProfile/${newUser.uid}/uid`).set(newUser.uid);
          firebase.database().ref(`/userProfile/${newUser.uid}/firstName`).set("");
        })
        .then((result) => {

          this.navCtrl.setRoot(TabsPage);
        }).catch(function (error) {
          alert(JSON.stringify(error))
        });
      })

    // private saveUser() {
    //   firebase.database().ref('users').child(this.)
    // }
  };

  loginGoogle(): void {
    this.googlePlus.login({
      'webClientId': '673077935413-81ebppm7j08g8i09shojq7o6f4r652pe.apps.googleusercontent.com',
      'offline': true
    }).then(res => {
      firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken))
        .then(newUser => {

          firebase.database().ref(`/userProfile/${newUser.uid}/uid`).set(newUser.uid);
          firebase.database().ref(`/userProfile/${newUser.uid}/firstName`).set("")
        })
        .then(success => {
          this.navCtrl.setRoot(TabsPage);
        })
        .catch(error => console.log("Firebase failure: " + JSON.stringify(error)));
    }).catch(err => console.error("Error: ", err));
  }
}
