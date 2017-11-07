import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchedulesComponent } from './schedules/schedules.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'schedules', component: SchedulesComponent },
      { path: 'settings', component: SettingsComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class CoreRoutingModule {}
