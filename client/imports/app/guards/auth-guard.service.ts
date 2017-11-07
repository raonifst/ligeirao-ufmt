import { Meteor } from 'meteor/meteor'
import { Injectable } from '@angular/core';

import {
  Router,
  Route,
  CanActivate,
  CanLoad,
  ActivatedRouteSnapshot,
  RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  private currentUser : Meteor.User;

  constructor(
    private router : Router
  ) {}

  public authAccess() {
    if (this.currentUser)
      return true;
    return false;
  }

  public ngOnInit() {
    this.currentUser = Meteor.user();
  }

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) : boolean {
    if (this.authAccess())
      return true;
    this.router.navigate(['/login']);
    return false;
  }

  public canLoad(
    route: Router
  ) : boolean {
    return this.authAccess();
  }
}
