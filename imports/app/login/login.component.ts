import { Meteor } from 'meteor/meteor';
import { Component } from '@angular/core';

@Component({
  selector: 'login-component',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent {
  private loginWithFacebook() {
    console.log('tentando fazer login com fb');
  }
}
