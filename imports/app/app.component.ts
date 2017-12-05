import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from './shared/login.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit, OnChanges {

  private showMenu: boolean = false;

  private navLinks: NavLink[] = [
    new NavLink('/schedules', 0, 'Lista de Horários'),
    new NavLink('/home', 1, 'Escolha seu ponto'),
    new NavLink('/settings', 2, 'Configurações')
  ];

  constructor(
    private router: Router,
    private loginService: LoginService
  ) {
    this.router.navigate(['/home']);
  }

  ngOnInit() {
    this.subscribeShowItemsEmitter();
  }

  ngOnChanges() {
    this.subscribeShowItemsEmitter();
  }

  subscribeShowItemsEmitter(): void {
    this.loginService.getShowItemsEmitter().subscribe(
      flagShowMenu => this.showMenu = flagShowMenu
    );
  }

}

class NavLink {
  path: string;
  label: number;
  text: string;

  constructor(path: string, label: number, text: string) {
    this.path = path;
    this.label = label;
    this.text = text;
  }
}
