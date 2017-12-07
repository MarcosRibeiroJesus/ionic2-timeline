import { Injectable } from '@angular/core';
import firebase from 'firebase';

@Injectable()
export class FirebaseProvider {

  constructor() { }

  message(message: string): any {
    return firebase.database().ref('chat').push({ message });
  }

}