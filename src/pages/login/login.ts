import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { UsuarioService } from '../../domain/usuario/usario-service';

import firebase from 'firebase';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {

  public email: string = 'joao@alura.com.br';
  public senha: string = 'alura123';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private _alertCtrl: AlertController,
    private _usuarioService: UsuarioService) {
  }

  login(){
    let provider = new firebase.auth.FacebookAuthProvider();

    firebase.auth().signInWithRedirect(provider).then(()=>{
      firebase.auth().getRedirectResult().then((result)=>{
        this.navCtrl.setRoot(HomePage);
      }).catch(function(error) {
        alert(JSON.stringify(error))
      });
    })
  };

  efetuaLogin() {

    this._usuarioService
      .efetuaLogin(this.email, this.senha)
      .then(usuario => {
        console.log(usuario);
        this.navCtrl.setRoot(HomePage)
      })
      .catch(() => {
        this._alertCtrl.create({
          title: 'Falha no Login!',
          subTitle: 'Email ou senha inválidos. Verifique.',
          buttons: [{ text: 'Ok'}]
        }).present();
      });

  }
}
