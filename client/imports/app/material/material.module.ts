import { NgModule } from '@angular/core';

import {
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  imports: [
    MatTabsModule,
    MatToolbarModule
  ],
  exports: [
    MatTabsModule,
    MatToolbarModule
  ]
})
export class MaterialModule {}
