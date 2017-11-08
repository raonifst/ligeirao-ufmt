import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchedulesComponent } from './schedules/schedules.component';
import { SettingsComponent } from './settings/settings.component';

import { AuthGuard } from '../guards/auth-guard.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'schedules',
        component: SchedulesComponent,
        canActivate: [AuthGuard]
      },
      { path: 'settings',
        component: SettingsComponent,
        canActivate: [AuthGuard],
        canLoad: [AuthGuard]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class CoreRoutingModule {}
