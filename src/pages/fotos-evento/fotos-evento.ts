import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';
import { EventProvider } from '../../providers/event';
import firebase from 'firebase';
import { storage, initializeApp } from "firebase";
import { ProfileProvider } from '../../providers/profile';
import { AuthProvider } from '../../providers/auth';
// import { FIREBASE_CONFIG } from "../../app/firebase.config";

@Component({
  selector: 'page-fotos-evento',
  templateUrl: 'fotos-evento.html',
})
export class FotosEventoPage {
  public userProfile:any;

  fotos: any[] = [
    {
      avatar: 'https://avatars.io/facebook/marcos.ribeiro.bsb',
      userProfile: '',
      titulo: 'Feliz dia dos pais!',
      foto: 'https://firebasestorage.googleapis.com/v0/b/papaiapp-36bec.appspot.com/o/pictures?alt=media&token=c97a8a10-c714-411b-9762-1c473a1cca89',
      texto: 'Estamos quase lá!!!'
    }
  ];
  
    constructor(
      
      public navCtrl: NavController,
      public navParams: NavParams,
      public eventProvider: EventProvider,
      public camera: Camera,
      public authProvider:AuthProvider, 
      public profileProvider:ProfileProvider
    ) {}

    ionViewDidLoad() {
      this.profileProvider.getUserProfile().on('value', userProfileSnapshot => {
        this.userProfile = userProfileSnapshot.val();
      });
    }

    async tirarFoto() {

      try {
      const options: CameraOptions = {
        quality: 95,
        targetWidth: 500,
        targetHeight: 500,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.PNG,
        mediaType: this.camera.MediaType.PICTURE
      }

      const result = await this.camera.getPicture(options);

      const image = `data:image/png;base64,${result}`;

      const pictures = storage().ref('pictures');
      pictures.putString(image, 'data_url');
      console.log(pictures);
    }
    catch (e) {
      console.error(e);
    }

    
  
    // tirarFoto(): void {
    //   this.cameraPlugin
    //     .getPicture({
    //       quality: 95,
    //       destinationType: this.cameraPlugin.DestinationType.DATA_URL,
    //       sourceType: this.cameraPlugin.PictureSourceType.CAMERA,
    //       allowEdit: false,
    //       encodingType: this.cameraPlugin.EncodingType.PNG,
    //       targetWidth: 500,
    //       targetHeight: 500,
    //       saveToPhotoAlbum: true
    //     })
    //     .then(profilePicture => {
    //       const fotoRef =
    //         firebase.storage().ref('profilePictures/userProfile/profilePicture.png');
    //           fotoRef
    //             .putString(profilePicture, 'base64', {contentType: 'image/png'})
    //             .then(savedProfilePicture =>{
    //               firebase
    //                 .database()
    //                 .ref(`users/userProfile/profilePicture`)
    //                 .set(savedProfilePicture.downloadURL);
    //             });
    //           });
    //       error => {
    //         console.log("ERROR -> " + JSON.stringify(error));
    //       };
    // }
  }
}