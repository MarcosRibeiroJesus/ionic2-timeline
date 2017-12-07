import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController, NavParams, AlertController, Alert } from 'ionic-angular';
import { FirebaseListObservable, AngularFire } from "angularfire2";
import { ProfileProvider } from '../../providers/profile';
import { AuthProvider } from '../../providers/auth';
import * as firebase from 'firebase';
import { AngularFireAuth } from "angularfire2";
import { TabsPage } from '../tabs/tabs';
import { Network } from "@ionic-native/network";
import { Subscription } from 'rxjs/Subscription';

@Component({
	selector: 'page-mural',
	templateUrl: 'mural.html',
})

export class MuralPage {
	public ref;
	public name;
	//private uid: any;
	public message: string = "";
	public messagesList;
	public userProfile: any
	firstName: any;
	connected: Subscription;
	disconnected: Subscription;
	usuario: any;

	constructor(
		public navCtrl: NavController,
		public alert: AlertController,
		public authProvider: AuthProvider,
		public alertCtrl: AlertController,
		public profileProvider: ProfileProvider,
		private network: Network,
		private toast: ToastController) {
		this.ref = firebase.database().ref('chat');
	}

	ngOnInit() {
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
						}
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

	displayNetworkUpdate(connectionState: string){
		
		let networkType = this.network.type
		
		this.toast.create({
			message: `Você está ${connectionState} via ${networkType}`,
			duration: 4000
		}).present();
	}

	ionViewDidLeave(){
		this.connected.unsubscribe();
		this.disconnected.unsubscribe();
	}

	ionViewDidEnter(){
	 this.connected = this.network.onConnect().subscribe(data => {
	 console.log(data)
	 this.displayNetworkUpdate(data.type);
	 },error =>
	 console.error(error));

	 this.disconnected = this.network.onDisconnect().subscribe(data => {
		console.log(data)
		this.displayNetworkUpdate(data.type);
	},error =>
		console.error(error));
	}

	ionViewDidLoad() {

		this.ref.on('value', data => {
			let tmp = [];
			data.forEach(data => {
				tmp.push({
					key: data.key,
					name: data.val().name,
					message: data.val().message,
					uid: data.val().uid,
					data: data.val().data
				})
			});
			this.messagesList = tmp;
		});

	}

	send() {
		this.ref.push({
			name: this.userProfile.firstName,
			message: this.message,
			data: new Date(),
			uid: this.userProfile.uid,
		})
			.then(() => {
				this.message = "";
			})
	}

}
