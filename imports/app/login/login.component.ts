import { Meteor } from 'meteor/meteor';
import { Component } from '@angular/core';

@Component({
  selector: 'login-component',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent {
  private loginWithFacebook() {
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
