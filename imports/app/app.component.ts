import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TemplateRef } from '@angular/core';
import { ViewChild } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navLinks = [
    new NavLink('/schedules', 0, 'Lista de Horários'),
    new NavLink('/home', 1, 'Escolha seu ponto'),
    new NavLink('/settings', 2, 'Configurações')
  ];

  constructor(
    private router: Router
  ) {
    this.router.navigate(['/home']);
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
