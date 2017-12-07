import { Component } from '@angular/core';
import { IonicPage, NavController, App, Alert, AlertController } from 'ionic-angular';
import { ProfileProvider } from '../../providers/profile';
import { AuthProvider } from '../../providers/auth';
import { LoginPage } from '../login/login';
import * as firebase from 'firebase';
import { TabsPage } from '../tabs/tabs';


@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {
  public userProfile: any;
  public birthDate: string;
  public firstname: string;
  public ref;

  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController,
    public authProvider: AuthProvider,
    public profileProvider: ProfileProvider,
    public app: App) {
    this.ref = firebase.database().ref('userProfile');
  }

  ionViewDidLoad() {
    this.profileProvider.getUserProfile().on('value', userProfileSnapshot => {
      this.userProfile = userProfileSnapshot.val();
      this.birthDate = userProfileSnapshot.val().birthDate;
      if (!this.userProfile.firstName) {
        let alert = this.alertCtrl.create({
          title: 'Perfil Incompleto',
          subTitle: 'Complete seu perfil para ter acesso a todas funcionalidades.',
          message: "Seu nome completo",
          inputs: [
            {
              name: 'firstName',
              placeholder: 'Seu Nome',
              value: this.userProfile.firstName
            },
          ],
          buttons: [

            {
              text: 'Salvar',
              handler: data => {
                if (!data.firstName) {
                  this.navCtrl.setRoot(TabsPage)
                } else {
                  this.profileProvider.updateName(data.firstName);
                }
              }
            }
          ],
          enableBackdropDismiss: false
        });
        alert.present();
      } else {
        return false;
      }
    });

  }

  logOut(): void {
    this.authProvider.logoutUser().then(() => {
      this.app.getRootNav().setRoot(LoginPage);
    });
  }

  updateName(): void {
    const alert: Alert = this.alertCtrl.create({
      message: "Seu nome completo",
      inputs: [
        {
          name: 'firstName',
          placeholder: 'Seu Nome completo',
          value: this.userProfile.firstName
        }
      ],
      buttons: [
        { text: 'Cancelar' },
        {
          text: 'Salvar',
          handler: data => {
            this.profileProvider.updateName(data.firstName);
          }
        }
      ]
    });
    alert.present();
  }

  updateDOB(birthDate: string): void {
    this.profileProvider.updateDOB(birthDate);
  }

  updateEmail(): void {
    if (!this.userProfile) {

      let alert = this.alertCtrl.create({
        title: 'Login Social',
        subTitle: 'Seu email é gerenciado pelo seu provedor.',
        buttons: ['OK']
      });
      alert.present();
    } else {

      let alert: Alert = this.alertCtrl.create({
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

              this.profileProvider.updateEmail(data.newEmail, data.password).then(() => {
                console.log("Email Changed Successfully");
              }).catch(error => {
                console.log('ERROR: ' + error.message);
              });
            }
          }
        ]
      });
      alert.present();
    }
  }

  updatePassword(): void {
    if (!this.userProfile) {

      let alert = this.alertCtrl.create({
        title: 'Login Social',
        subTitle: 'Sua senha é gerenciada pelo seu provedor.',
        buttons: ['OK']
      });
      alert.present();
    } else {

      let alert: Alert = this.alertCtrl.create({
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
}
