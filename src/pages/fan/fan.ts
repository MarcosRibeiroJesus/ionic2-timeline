import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-fan',
  templateUrl: 'fan.html',
})
export class Fan {

  fanpage: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private inAppBrowser: InAppBrowser) {
  }

  abrirFanpage(fanpage) {
    const options: InAppBrowserOptions = {
      zoom: 'no',
      hardwareback: 'no',
      hidden: 'yes'
    }
    const browser = this.inAppBrowser.create(fanpage = 'https://www.facebook.com/RGfotografiadf/', '_self', options);
  }

}
