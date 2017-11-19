import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthGuard } from './guards/auth-guard.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  private showMenu: boolean =  false;
  private navLinks: []NavLink = [
    new NavLink('/schedules', 0, 'Lista de Horários'),
    new NavLink('/home', 1, 'Escolha seu ponto'),
    new NavLink('/settings', 2, 'Configurações')
  ];

  constructor(
    private router: Router,
    private autoGuard: AuthGuard
  ) {
    this.router.navigate(['/home']);
  }

  ngOnInit() {
    this.autoGuard.showItemsEmitter.subscribe(
      show => this.showMenu = show
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
