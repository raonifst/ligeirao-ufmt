import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppMaterialModule } from '../app.material.module';

import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  declarations: [
    LoginComponent
  ],
  providers: []
})
export class LoginModule {}
