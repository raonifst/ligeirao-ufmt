import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppMaterialModule } from '../app.material.module';
import { LoginComponent } from './login.component';
import { GoogleLoginComponent } from './googlelogin/google-login.component';

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    LoginComponent,
    GoogleLoginComponent
  ],
  providers: []
})
export class LoginModule {}
