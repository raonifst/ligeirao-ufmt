import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Meteor } from 'meteor/meteor';

@Injectable()
export class LoginService {

  private showItemsEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private router: Router
  ) { }

  loginWithFacebook(): void {
    Meteor.loginWithFacebook({
      requestPermissions: ['public_profile', 'email']
    }, (error) => {
      if (error) {
        console.log("Erro: " + error);
      } else {
        // TODO remover as seguintes linhas de console log ao final da implementação
        console.log("Login feito com sucesso (ID: " + Meteor.userId() + ")");
        console.log(Meteor.user());
        // TODO consertar a gambiarra de location.reload() futuramente
        location.reload();
      }
    });
  }

  loginWithGoogle(): void {
    // TODO transferir o método Meteor.loginWithGoogle para cá
  }

  userIsLoggedIn(): boolean {
    return Meteor.userId() != undefined && Meteor.userId() != null;
  }

  logout(): void {
    Meteor.logout();
    this.showItemsEmitter.emit(false);
    this.router.navigate(['/login']);
  }

  getShowItemsEmitter(): EventEmitter<boolean> {
    return this.showItemsEmitter;
  }

}
