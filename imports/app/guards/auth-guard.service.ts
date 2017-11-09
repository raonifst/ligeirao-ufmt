import { Meteor } from 'meteor/meteor';
import { Observable } from 'rxjs/Rx';
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

  private currentUser: Meteor.User;

  constructor(
    private router: Router
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
  ) : Observable<boolean> | boolean {
    if (this.authAccess())
      return true;
    //this.router.navigate(['/login']);
    return true; //arrumar depois que o login estiver pronto.
  }

  public canLoad (
    route: Route
  ) : Observable<boolean> | Promise<boolean> | boolean {
    return this.authAccess();
  }
}
