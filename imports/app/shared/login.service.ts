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

  loginWithGoogle() {
    // TODO transferir o método Meteor.loginWithGoogle para cá
    Meteor.loginWithGoogle ({
        requestOfflineToken: true,
       redirectUrl : "http://localhost:3000/_oauth/google?close"
      },(err)=>{
          if(err){
                //throw new (Meteor.Error)('google login failed);
                console.log(err);
          }
          else{
              console.log("Login with google sucess :ID("+Meteor.userId()+")");
              console.log(Meteor.user());
            }

      });
  }

}
