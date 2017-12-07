import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, Alert } from 'ionic-angular';
import { FirebaseListObservable, AngularFire } from "angularfire2";
import { Camera } from "ionic-native";
import { ProfileProvider } from '../../providers/profile';
import { ComentariosPage } from "../comentarios/comentarios"
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { TabsPage } from '../tabs/tabs';


@Component({
  selector: 'page-enviar-fotos',
  templateUrl: 'enviar-fotos.html',
})
export class EnviarFotosPage implements OnInit {
  fotos: FirebaseListObservable<any>;
  public userProfile: any;
  public comentario: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public profileProvider: ProfileProvider,
    private af: AngularFire,
    private alertCtrl: AlertController) { }


  ionViewDidLoad() {
    this.profileProvider.getUserProfile().on('value', userProfileSnapshot => {
      this.userProfile = userProfileSnapshot.val();
      if (!this.userProfile.firstName) {

        const alert: Alert = this.alertCtrl.create({
          message: "Por favor insira seu nome",
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

  ngOnInit() {
    this.getFotos();
  }

  getFotos() {
    this.fotos = this.af.database.list('/fotos');
  }

  tirarFoto() {
    Camera.getPicture({
      destinationType: Camera.DestinationType.DATA_URL,
      quality: 100,
      targetHeight: 1920,
      targetWidth: 1080,
      correctOrientation: true,
    }).then((imageData) => {
      this.fotos.push({
        src: "data:image/png;base64," +
          imageData,
        likes: 0,
        nome: this.userProfile.firstName,
        uid: this.userProfile.uid
      });
    }, (err) => {
      console.log(err);
    });
  }

  deletarFoto(fotoKey: string) {
    this.fotos.remove(fotoKey);
  }

  curtirFoto(fotoKey, likes: number) {
    this.fotos.update(fotoKey, { likes: likes + 1 });
    console.log(fotoKey);
  }

  mostrarFoto(fotoKey): void {
    this.navCtrl.push(ComentariosPage, fotoKey);
  }

}



