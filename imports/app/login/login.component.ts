import { Meteor } from 'meteor/meteor';
import { Component } from '@angular/core';
import { LoginService } from "../shared/login.service";

@Component({
  selector: 'login-component',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent {

  constructor(
    private loginService: LoginService
  ) { }

  private loginWithFacebook() {
    this.loginService.loginWithFacebook();
  }

}
