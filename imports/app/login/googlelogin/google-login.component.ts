import {Meteor} from 'meteor/meteor';
import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService, AppGlobals } from 'angular2-google-login';
import {ScriptService} from './script.service'

@Component({
  selector:'google-login',
  templateUrl:'google-login.component.html',
  providers:[AuthService, ScriptService]
})

export class GoogleLoginComponent implements OnInit{
  private componentName: string = "Google Login";
  private googleID : String = '453878930085-r4dl6c8g0fjft460db2botie4kafji2c.apps.googleusercontent.com';
  private imgUrl: String;
  private email: String;
  private name: String;
  private token:String;

  constructor(private auth: AuthService, private zone: NgZone, public script: ScriptService){ }

  ngOnInit() {
    console.log(document.location.href);
    this.script.load('googleApi').then(data => {
      console.log('script loaded ', data);
    }).catch(error => console.log("ERROOOO"));
      AppGlobals.GOOGLE_CLIENT_ID = this.googleID;/*'453878930085-r4dl6c8g0fjft460db2botie4kafji2c.apps.googleusercontent.com'*/
      this.getData();
      setTimeout(() => { this.googleAuthenticate() }, 50);

  }

  googleAuthenticate() {
     this.auth.authenticateUser((result) => {
       this.zone.run(() => {
         this.getData();
       });
     });
    // console.log(this.token);
   }

   getData() {
     this.token = localStorage.getItem('token');
     this.imageURL = localStorage.getItem('image');
     this.name = localStorage.getItem('name');
     this.email = localStorage.getItem('email');
 }


externalLogout() {
    let url, params;
     let redirectUrl ="http://localhost:3000";
         url = "https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout";
         params = {
             next: redirectUrl
         }
        window.location.href = url + "?continue=" + params.next;
 }


    clearLocalStorage() {
      localStorage.removeItem('token');
      localStorage.removeItem('imgUrl');
      localStorage.removeItem('name');
      localStorage.removeItem('email');
    }

 logout() {
    // let scopeReference = this;
     //this.auth.userLogout(function () {
      // scopeReference.externalLogout();
      // scopeReference.clearLocalStorage();
    // });
    this.externalLogout();
    this.clearLocalStorage();
   }

}
