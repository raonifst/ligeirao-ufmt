import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppMaterialModule } from '../../app.material.module';
import { HomeComponent } from './home.component';
import { MapComponent } from "./map/map.component";
import { MapService } from "../../shared/map.service";

@NgModule({
  imports: [
    AppMaterialModule,
    CommonModule
  ],
  declarations: [
    HomeComponent,
    MapComponent
  ],
  providers: [
    MapService
  ]
})
export class HomeModule {}
