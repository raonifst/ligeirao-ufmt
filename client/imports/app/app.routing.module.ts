import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './core/home/home.component';
import { LoginComponent } from './login/login.component';

import { AuthGuard } from './guards/auth-guard.service';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '',
        component: HomeComponent,
        canActivate: [AuthGuard]
      },
      { path: 'login',
        component: LoginComponent
      },
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
