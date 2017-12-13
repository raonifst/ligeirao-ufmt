import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthGuard } from '../guards/auth-guard.service';
import { SchedulesComponent } from './schedules/schedules.component';
import { SettingsComponent } from './settings/settings.component';

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
