// import {Injectable} from '@angular/core';

// @Injectable()
// export class Fire{
//     user: any = {};

//     constructor() {
//         // Initialize Firebase
//   var config = {
//     apiKey: "AIzaSyBVzzNIKf9KEl0US9yfJI5FXPUNlZEYsbI",
//     authDomain: "papaiapp-36bec.firebaseapp.com",
//     databaseURL: "https://papaiapp-36bec.firebaseio.com",
//     projectId: "papaiapp-36bec",
//     storageBucket: "papaiapp-36bec.appspot.com",
//     messagingSenderId: "673077935413"
//   };

//         firebase.initializeApp(config);
//     }

//     login(token: string, pushId: string, successCallback, errorCallback) {
//         let credential = firebase.auth.FacebookAuthProvider.credential(token);
    
//         firebase.auth().signInWithCredential(credential).then(response => {
//           this.setUser(token, pushId, response.providerData[0]);
//           successCallback();
//         }, error => {
//           errorCallback(error);
//         })
//       }
    
//       getDB() {
//         return firebase;
//       }
    
//       getUser(id, successCallback) {
//         let ref = firebase.database().ref('users').child(id);
    
//         ref.once('value', (snapshot) => {
//           let user = snapshot.val();
//           successCallback(user);
//         })
//       }
    
//       private setUser(token: string, pushId: string, authData: any) {
//         this.user.name = authData.displayName;
//         this.user.photo = authData.photoURL;
//         this.user.id = authData.uid;
//         this.user.token = token;
//         this.user.pushId = pushId;
    
//         this.saveUser();
//       }
    
//       private saveUser() {
//         firebase.database().ref('users').child(this.user.id).set({
//           name: this.user.name,
//           photo: this.user.photo,
//           pushId: this.user.pushId
//         });
//       }
//     }
// }