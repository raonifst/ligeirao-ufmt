import { NgModule } from '@angular/core';

import {
  MatTabsModule,
  MatButtonModule,
  MatCardModule
} from '@angular/material';

@NgModule({
  imports: [
    MatTabsModule,
    MatButtonModule,
    MatCardModule
  ],
  exports: [
    MatTabsModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class AppMaterialModule {}
