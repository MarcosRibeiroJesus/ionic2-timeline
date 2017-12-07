import { Injectable } from '@angular/core';
import firebase from 'firebase';

import { CadastroPage } from '../pages/cadastro/cadastro';

@Injectable()
export class AuthProvider {
  userProfile: any;
  salvarUID: any;
  constructor() {
    this.userProfile = firebase.database().ref('userProfile');
  } 

  viewUser(userId: any){
    var userRef = this.userProfile.child(userId);
    return userRef.once('value');
  }

  loginUser(email:string, password:string):firebase.Promise<any> {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  signupUser(email:string, password:string):firebase.Promise<any> {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.message;
      var errorMessage = error.message;
      if (errorCode == 'auth/email-already-in-use') {

      } else {
        
      }
      console.log(error);
    })
      .then( newUser => {
          firebase.database().ref(`/userProfile/${newUser.uid}/email`).set(email);
          firebase.database().ref(`/userProfile/${newUser.uid}/uid`).set(newUser.uid);
          firebase.database().ref(`/userProfile/${newUser.uid}/firstName`).set("");
          
      });
      
  }

  resetPassword(email:string):firebase.Promise<void> {
    return firebase.auth().sendPasswordResetEmail(email);
  }

  logoutUser():firebase.Promise<void> {
    const userId:string = firebase.auth().currentUser.uid;
    firebase.database().ref(`/userProfile/${userId}`).off();
    return firebase.auth().signOut();
  }

}