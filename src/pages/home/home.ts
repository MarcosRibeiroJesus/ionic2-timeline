import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfileProvider } from '../../providers/profile';
import { PerfilPage } from '../perfil/perfil';
import { Push, PushObject, PushOptions } from '@ionic-native/push';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public userProfile: any;

  cards: any[] = [
    {
      avatar: 'https://avatars.io/facebook/ionicframework',
      nome: 'Marcos Ribeiro',
      titulo: 'Primeiro dia na universidade!',
      foto: 'https://scontent.fbsb3-1.fna.fbcdn.net/v/t1.0-9/24296334_344880662646041_3460574171560417331_n.jpg?oh=a8a9a2452a25351e01d0a40ecca23ca9&oe=5A8E49FA',
      texto: 'Muita ansiedade para adquirir e compartilhar conhecimento.'
    },
    {
      avatar: 'https://avatars.io/facebook/ionicframework',
      nome: 'Marcos Ribeiro',
      titulo: 'Estudar sempre! ',
      foto: 'https://scontent.fbsb3-1.fna.fbcdn.net/v/t1.0-9/24174715_344880655979375_2804063091261125328_n.jpg?oh=cbae47a604c23f953c5c8f69573e0547&oe=5A99E7F3',
      texto: 'Faculdade é apenas o começo...'
    },

    {
      avatar: 'https://avatars.io/facebook/ionicframework',
      nome: 'Marcos Ribeiro',
      titulo: 'Enfim o grande dia!',
      foto: 'https://scontent.fbsb3-1.fna.fbcdn.net/v/t1.0-9/24294102_344880645979376_4877624259390029747_n.jpg?oh=a0114a6f2de9e79ddcbbece492e542cf&oe=5A96AB26',
      texto: 'Por mais difícil que seja, nunca deixe de acreditar em dias melhores.'
    },

    {
      avatar: 'https://avatars.io/facebook/ionicframework',
      nome: 'Marcos Ribeiro',
      titulo: 'Partiu Silicon Valley.',
      foto: 'https://scontent.fbsb3-1.fna.fbcdn.net/v/t1.0-9/24294026_344880765979364_8837596513047208087_n.jpg?oh=c4ddcd9eb3b64879c7c0f8279e2bf2d4&oe=5A8AD096',
      texto: 'Prontos para sua próxima parada?!'
    },
  ];

  videos: any[] = [
    {
      avatar: 'https://avatars.io/facebook/ionicframework',
      nome: 'Marcos Ribeiro',
      titulo: 'O primeiro passo para a vitória é acreditar!',
      video: 'https://www.youtube.com/embed/mdnhqPKjF1c'
    },
  ]

  constructor(public navCtrl: NavController,
    public profileProvider: ProfileProvider,
    private push: Push) {

    this.push.hasPermission()
      .then((res: any) => {

        if (res.isEnabled) {
          //alert('We have permission to send push notifications');

          const options: PushOptions = {
            android: {},
            ios: {
              alert: 'true',
              badge: true,
              sound: 'false'
            },
            windows: {},
            browser: {
              pushServiceURL: 'http://push.api.phonegap.com/v1/push'
            }
          };

          const pushObject: PushObject = this.push.init(options);

          pushObject.on('notification').subscribe((notification: any) => {
            alert(notification.message);
          });

          pushObject.on('registration').subscribe((registration: any) => console.log('Device registered', registration));

          pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));

        } else {
          alert('We do not have permission to send push notifications');
        }

      });

  }

  ionViewDidLoad() {
    this.profileProvider.getUserProfile().on('value', userProfileSnapshot => {
      this.userProfile = userProfileSnapshot.val();
    });

  }

  verPerfil(): void {
    this.navCtrl.push('PerfilPage')
  }

}
