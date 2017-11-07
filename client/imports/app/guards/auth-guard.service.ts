import { Meteor } from 'meteor/meteor'
import { Injectable } from '@angular/core';
import { Router } from '@angular/router'

import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  private currentUser : Meteor.User;

  constructor(
    private router : Router
  ) {}

  ngOnInit() {
    this.currentUser = Meteor.user();
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) : boolean {
    if (this.currentUser)
      return true;
    this.router.navigate(['/login']);
    return false;
  }
}
