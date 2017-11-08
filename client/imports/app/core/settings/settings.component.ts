import { Meteor } from 'meteor/meteor';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'settings-component',
  templateUrl: 'settings.component.html',
  styleUrls: ['settings.component.scss']
})
export class SettingsComponent {
  qualcomp = 'Settings';

  constructor(
    private router : Router
  ) {}

  logout() {
    Meteor.logout();
    this.router.navigate(['/login']);
  }
}
