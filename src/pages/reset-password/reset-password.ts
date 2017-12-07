import { Component } from '@angular/core';
import { IonicPage, NavController, Alert, AlertController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthProvider } from '../../providers/auth';
import { EmailValidator } from '../../validators/email';

@IonicPage()
@Component({
  selector: 'page-reset-password',
  templateUrl: 'reset-password.html',
})
export class ResetPasswordPage {
  public resetPasswordForm:FormGroup;

  constructor(public navCtrl:NavController, public authProvider:AuthProvider, 
    public alertCtrl:AlertController, formBuilder:FormBuilder) {
      this.resetPasswordForm = formBuilder.group({
        email: ['', Validators.compose([Validators.required, EmailValidator.isValid])]
      });
  }

  resetPassword():void {
    if (!this.resetPasswordForm.valid){
      console.log(`Formulário inválido, valor atual: ${this.resetPasswordForm.value}`);
    } else {
      const email:string = this.resetPasswordForm.value.email;
      this.authProvider.resetPassword(email).then( user => {
        const alert:Alert = this.alertCtrl.create({
          message: "Verifique em seu e-mail o link para a nova senha.",
          buttons: [{
            text: "Ok",
            role: 'Cancelar',
            handler: () => { this.navCtrl.pop() }
          }]
        });
        alert.present()
      }, error => {
        const errorAlert = this.alertCtrl.create({
          message: "Não há registro de usuário correspondente a este email. Por favor, verifique.",
          buttons: [{ text: "Ok", role: "Cancelar" }]
        });
        errorAlert.present();
      });
    }
  }

}