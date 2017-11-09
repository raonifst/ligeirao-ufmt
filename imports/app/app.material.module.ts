import { NgModule } from '@angular/core';

import {
  MatTabsModule,
  MatButtonModule
} from '@angular/material';

@NgModule({
  imports: [
    MatTabsModule,
    MatButtonModule
  ],
  exports: [
    MatTabsModule,
    MatButtonModule
  ]
})
export class AppMaterialModule {}
