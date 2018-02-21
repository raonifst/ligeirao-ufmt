import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppMaterialModule } from '../../app.material.module';
import { HomeComponent } from './home.component';
import { MapService } from "../../shared/map.service";

@NgModule({
  imports: [
    AppMaterialModule,
    CommonModule
  ],
  declarations: [
    HomeComponent
  ],
  providers: [
    MapService
  ]
})
export class HomeModule {}
