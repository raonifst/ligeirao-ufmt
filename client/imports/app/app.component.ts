import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navLinks = [
    new NavLink('/schedules', 'SCHEDULES'),
    new NavLink('/home', 'HOME'),
    new NavLink('/settings', 'SETTINGS')
  ];
}

class NavLink {
  path : String;
  label : String;

  constructor(path : String, label: String) {
    this.path = path;
    this.label = label;
  }
}
