import { NgModule } from '@angular/core';

import { CoreRoutingModule } from './core.routing.module';
import { HomeModule } from './home/home.module';
import { SchedulesModule } from './schedules/schedules.module';
import { SettingsModule } from './settings/settings.module';

@NgModule({
  imports: [
    CoreRoutingModule,
    HomeModule,
    SchedulesModule,
    SettingsModule
  ],
  declarations: [],
  providers: []
})
export class CoreModule { }
