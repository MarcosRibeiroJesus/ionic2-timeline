import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  Loading,
  LoadingController,
  Alert,
  AlertController
} from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthProvider } from '../../providers/auth';
import { EmailValidator } from '../../validators/email';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {
  public signupForm: FormGroup;
  public loading: Loading;

  constructor(
    public navCtrl: NavController,
    public authProvider: AuthProvider,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public formBuilder: FormBuilder) {

    this.signupForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    });
  }

  signupUser(): void {
    if (!this.signupForm.valid) {
      console.log(`Need to complete the form, current value: ${this.signupForm.value}`);
    } else {
      const email: string = this.signupForm.value.email;
      const password: string = this.signupForm.value.password;

      this.authProvider.signupUser(email, password).then(user => {
        this.loading.dismiss().then(() => {
          this.navCtrl.setRoot(TabsPage);
        });
      }, error => {
        this.loading.dismiss().then(() => {
          const alert: Alert = this.alertCtrl.create({
            title: "Algo deu errado, tente novamente.",
            subTitle: 'Email pode estar cadastrado.',
            buttons: [{ text: "Ok", role: "Cancelar" }]
          });
          alert.present();
        });
      });
      this.loading = this.loadingCtrl.create({
        spinner: 'circles',
        content: 'Carregando...'
      });
      this.loading.present();
    }
  }

}