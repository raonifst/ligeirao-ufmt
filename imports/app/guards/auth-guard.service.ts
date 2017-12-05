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
import {LoginService} from "../shared/login.service";

@Injectable()
export class AuthGuard implements CanActivate, CanLoad, OnInit {

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {}

  public authAccess() {
    // TODO corrigir dependência do AuthGuard com o Meteor
    //this.currentUserId = Meteor.userId();
    if (this.loginService.userIsLoggedIn()) {
      console.log('Usuário: ' + Meteor.userId());
      this.loginService.getShowItemsEmitter().emit(true);
      return true;
    }
    console.log('Usuário: ' + Meteor.userId());
    // Colocar true para testes enquanto não há login
    this.loginService.getShowItemsEmitter().emit(false);
    return false; // Colocar true para testes enquanto não há login
  }

  public ngOnInit() {
    this.authAccess();
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
