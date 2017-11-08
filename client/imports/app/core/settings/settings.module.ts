import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../../app.material.module';

import { SettingsComponent } from './settings.component';

@NgModule({
  imports: [
    AppMaterialModule
  ],
  declarations: [
    SettingsComponent
  ],
  providers: []
})
export class SettingsModule {}
