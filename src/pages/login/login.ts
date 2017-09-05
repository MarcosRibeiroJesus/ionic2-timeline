import { Component } from '@angular/core';
import { NavController, 
  AlertController, 
  Loading, 
  LoadingController, 
  Alert } from 'ionic-angular';
import { HomePage } from '../home/home';

import firebase from 'firebase';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthProvider } from "../../providers/auth";
import { EmailValidator } from "../../validators/email";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public loginForm:FormGroup;
  public loading:Loading;

  constructor(public navCtrl:NavController, public loadingCtrl:LoadingController,
    public alertCtrl:AlertController, public authProvider:AuthProvider, 
    formBuilder:FormBuilder) {

      this.loginForm = formBuilder.group({
        email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
        password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
      });
  }

  loginUser():void {
    if(!this.loginForm.valid){
      console.log(`Form isn't valid yet, current value: ${this.loginForm.value}`);
    } else {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;
      
      this.authProvider.loginUser(email, password).then( authData => {
        this.loading.dismiss().then( () => {
          this.navCtrl.setRoot(HomePage);
        });
      }, error => {
        this.loading.dismiss().then( () => {
          const alert:Alert = this.alertCtrl.create({
            message: error.message,
            buttons: [{ text: "Ok", role: 'cancel'}]
          });
          alert.present()
        });
      });
      this.loading = this.loadingCtrl.create();
      this.loading.present()
    }
  }

  goToSignup():void {
    this.navCtrl.push('CadastroPage');
  }

  goToResetPassword():void {
    this.navCtrl.push('ResetPasswordPage');
  }

  //Login with FB
  login(){
    let provider = new firebase.auth.FacebookAuthProvider();

    firebase.auth().signInWithRedirect(provider).then(()=>{
      firebase.auth().getRedirectResult().then((result)=>{
        this.navCtrl.setRoot(HomePage);
      }).catch(function(error) {
        alert(JSON.stringify(error))
      });
    })

    // private saveUser() {
    //   firebase.database().ref('users').child(this.)
    // }
  };

}
