import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../../app.material.module';
import { SchedulesComponent } from './schedules.component';

@NgModule({
  imports: [
    AppMaterialModule
  ],
  declarations: [
    SchedulesComponent
  ],
  providers: []
})
export class SchedulesModule {}
