import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../../app.material.module';

import { HomeComponent } from './home.component';
import { MapService } from "../../shared/map.service";


@NgModule({
  imports: [
    AppMaterialModule,
  ],
  declarations: [
    HomeComponent
  ],
  providers: [
      MapService
  ]
})
export class HomeModule {}
