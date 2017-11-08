import { NgModule } from '@angular/core';

import {
  MatTabsModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule
} from '@angular/material';

@NgModule({
  imports: [
    MatTabsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    MatTabsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class AppMaterialModule {}
