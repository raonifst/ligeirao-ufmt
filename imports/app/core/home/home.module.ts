import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../../app.material.module';

import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    AppMaterialModule
  ],
  declarations: [
    HomeComponent
  ],
  providers: []
})
export class HomeModule {}
