import { Injectable } from '@angular/core';

import { Meteor } from 'meteor/meteor';

@Injectable()
export class LoginService {

  constructor() { }

  loginWithFacebook() {
    Meteor.loginWithFacebook({
      requestPermissions: ['public_profile', 'email']
    }, (err) => {
      if (err) {
        console.log("Erro: " + err);
      } else {
        // TODO remover as seguintes linhas de console log ao final da implementação
        console.log("Login feito com sucesso (ID: " + Meteor.userId() + ")");
        console.log(Meteor.user());
      }
    });
  }

}
