import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import firebase from 'firebase';

@Injectable()
export class EventoProvider {
  public eventoListRef:firebase.database.Reference;

  constructor() {
    firebase.auth().onAuthStateChanged( user => {
      if(user){
        this.eventoListRef = firebase.database().ref(`/userProfile/${user.uid}/eventoList`);
      }
    });
  }

  getEventoList():firebase.database.Reference {
    return this.eventoListRef;
  }

  getEventDetail(eventoId:string):firebase.database.Reference {
    return this.eventoListRef.child(eventoId);
  }

  createEvent(
    eventoNome:string, 
    eventoData:string, 
    eventoPreco:number, 
    eventoCusto:number): firebase.Promise<any> {
    return this.eventoListRef.push({
      nome: eventoNome,
      date: eventoData,
      price: eventoPreco * 1,
      cost: eventoCusto * 1,
      revenue: eventoCusto * -1
    });
  }

  addConvidado(
    convidadoNome:string, 
    eventoId:string, 
    eventoPreco:number, 
    convidadoFoto:string = null): firebase.Promise<any> {
    return this.eventoListRef
    .child(`${eventoId}/convidadoList`)
    .push({ convidadoNome })
    .then( newConvidado => {
        this.eventoListRef
        .child(eventoId)
        .transaction( evento => {
          evento.revenue += eventoPreco;
          return evento;
        });
        if(convidadoFoto != null){
          firebase.storage()
          .ref(`/convidadoProfile/${newConvidado.key}/profilePicture.png`)
           .putString(convidadoFoto, 'base64', {contentType: 'image/png'})
            .then( savedPicture => {
              this.eventoListRef
              .child(`${eventoId}/guestList/${newConvidado.key}/profilePicture`)
              .set(savedPicture.downloadURL);
            });
        }
      });
  }
}