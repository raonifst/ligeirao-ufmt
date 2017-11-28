import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from './core/core.module';
import { LoginModule } from './login/login.module';

import { AppMaterialModule } from './app.material.module';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';

import { AuthGuard } from './guards/auth-guard.service';
import { LoginService } from "./shared/login.service";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    LoginModule,
    AppMaterialModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    AuthGuard,
    LoginService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
