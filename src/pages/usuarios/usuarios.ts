import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFire  } from "angularfire2";
import { ProfileProvider } from '../../providers/profile';
import * as firebase from 'firebase';


@Component({
  selector: 'page-usuarios',
  templateUrl: 'usuarios.html',
})
export class UsuariosPage {
  public ref;
  public usuariosList;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public profileProvider:ProfileProvider) {
    this.ref = firebase.database().ref('userProfile').orderByChild('firstName');
  }

  ionViewDidLoad() {
    
    this.ref.on('value',data => {
  		let tmp = [];
  		data.forEach( data => {
  			tmp.push({
  				key: data.key,
  				firstName: data.val().firstName,
  				email: data.val().email,
  			})
  		});
  		this.usuariosList = tmp;
    });
  }
  

}
