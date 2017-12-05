import { NgModule } from '@angular/core';

import { CoreRoutingModule } from './core.routing.module';
import { HomeModule } from './home/home.module';
import { SchedulesModule } from './schedules/schedules.module';
import { SettingsModule } from './settings/settings.module';
import { AppMaterialModule } from '../app.material.module';

@NgModule({
  imports: [
    CoreRoutingModule,
    HomeModule,
    SchedulesModule,
    SettingsModule,
    AppMaterialModule
  ],
  declarations: [],
  providers: []
})
export class CoreModule { }
