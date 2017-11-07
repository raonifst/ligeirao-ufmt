import { NgModule } from '@angular/core';

import {
  MatTabsModule,
  MatToolbarModule,
  MatButtonModule
} from '@angular/material';

@NgModule({
  imports: [
    MatTabsModule,
    MatToolbarModule,
    MatButtonModule
  ],
  exports: [
    MatTabsModule,
    MatToolbarModule,
    MatButtonModule
  ]
})
export class MaterialModule {}
