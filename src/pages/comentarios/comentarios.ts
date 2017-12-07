import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable, AngularFire  } from "angularfire2"; 
import { ProfileProvider } from '../../providers/profile';


@IonicPage()
@Component({
  selector: 'page-comentarios',
  templateUrl: 'comentarios.html',
  providers: [ProfileProvider]
})
export class ComentariosPage {
  public fotos: FirebaseListObservable<any>;
  public foto: any;
  public fotoKey: any;
  public novoComentario;
  public userProfile:any;
  public messagesList;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private af: AngularFire,
    private profileProvider:ProfileProvider) {
      
    }
    
    send(){
      this.fotos.update(this.foto.$key, {
        novoComentario: this.novoComentario,
        userNome: this.userProfile.firstName,
        uid: this.userProfile.uid
      })
        .then(() => {
          this.novoComentario = "";
        })
      }

    ionViewDidLoad() {
      this.foto = this.navParams.data;
      this.profileProvider.getUserProfile().once('value', userProfileSnapshot => {
      this.userProfile = userProfileSnapshot.val();
    });

  }

  ngOnInit(){
    this.getFotos()
  }

  getFotos(){ 
    this.fotos = this.af.database.list('/fotos');
  }

}
