import { NgModule } from '@angular/core';
import {
  MatTabsModule,
  MatButtonModule,
  MatCardModule,
  MatMenuModule
} from '@angular/material';

@NgModule({
  imports: [
    MatTabsModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule
  ],
  exports: [
    MatTabsModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule
  ]
})
export class AppMaterialModule {}
