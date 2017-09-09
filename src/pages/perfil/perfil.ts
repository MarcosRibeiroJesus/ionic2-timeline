import { Component } from '@angular/core';
import { IonicPage, NavController, Alert, AlertController } from 'ionic-angular';
import { ProfileProvider } from '../../providers/profile';
import { AuthProvider } from '../../providers/auth';

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {
  public userProfile:any;
  public birthDate:string;

  constructor(public navCtrl:NavController, public alertCtrl:AlertController, 
    public authProvider:AuthProvider, public profileProvider:ProfileProvider) {}

  ionViewDidLoad() {
    this.profileProvider.getUserProfile().on('value', userProfileSnapshot => {
      this.userProfile = userProfileSnapshot.val();
      this.birthDate = userProfileSnapshot.val().birthDate;
    });
  }

  logOut():void {
    this.authProvider.logoutUser().then( () => {
      this.navCtrl.setRoot('LoginPage');
    });
  }

  updateName():void {
    const alert:Alert = this.alertCtrl.create({
      message: "Seu nome e sobrenome",
      inputs: [
        {
          name: 'firstName',
          placeholder: 'Seu Nome',
          value: this.userProfile.firstName
        },
        {
          name: 'lastName',
          placeholder: 'Seu Sobrenome',
          value: this.userProfile.lastName
        },
      ],
      buttons: [
        { text: 'Cancelar' },
        {
          text: 'Salvar',
          handler: data => {
            this.profileProvider.updateName(data.firstName, data.lastName);
          }
        }
      ]
    });
    alert.present();
  }

  updateDOB(birthDate:string):void {
    this.profileProvider.updateDOB(birthDate);
  }

  updateEmail():void {
    let alert:Alert = this.alertCtrl.create({
      inputs: [
        {
          name: 'newEmail',
          placeholder: 'Seu novo email',
        },
        {
          name: 'password',
          placeholder: 'Sua senha',
          type: 'password'
        },
      ],
      buttons: [
        { text: 'Cancelar' },
        {
          text: 'Salvar',
          handler: data => {
            let newEmail = data.newEmail;

            this.profileProvider.updateEmail(data.newEmail, data.password).then( () =>{
              console.log("Email Changed Successfully");
            }).catch(error => {
              console.log('ERROR: '+error.message);
            });
          }
        }
      ]
    });
    alert.present();
  }

  updatePassword():void {
    let alert:Alert = this.alertCtrl.create({
      inputs: [
        {
          name: 'newPassword',
          placeholder: 'Sua nova senha',
          type: 'password'
        },
        {
          name: 'oldPassword',
          placeholder: 'Sua senha antiga',
          type: 'password'
        },
      ],
      buttons: [
        { text: 'Cancelar' },
        {
          text: 'Salvar',
          handler: data => {
            this.profileProvider.updatePassword(data.newPassword, data.oldPassword);
          }
        }
      ]
    });
    alert.present();
  }
}
