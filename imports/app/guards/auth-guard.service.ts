import { Meteor } from 'meteor/meteor';
import { Observable } from 'rxjs/Rx';

import {
  EventEmitter,
  Injectable,
  OnInit
} from '@angular/core';

import {
  Router,
  Route,
  CanActivate,
  CanLoad,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad, OnInit {

  private currentUser: Meteor.User;
  public showItemsEmitter = new EventEmitter<boolean>();

  constructor(
    private router: Router
  ) {}

  public authAccess() {
    // TODO corrigir dependência do AuthGuard com o Meteor
    this.currentUser = Meteor.user();
    if (this.currentUser) {
      this.showItemsEmitter.emit(true);
      return true;
    }
    this.showItemsEmitter.emit(false); /* Colocar true para testes enquanto não há login */
    return false; /* Colocar true para testes enquanto não há login */
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
    this.router.navigate(['/login']);
    return false;
  }

  public canLoad (
    route: Route
  ) : Observable<boolean> | Promise<boolean> | boolean {
    return this.authAccess();
  }
}
