import { Component } from '@angular/core';

import { LoginService } from '../../shared/login.service';

@Component({
  selector: 'settings-component',
  templateUrl: 'settings.component.html',
  styleUrls: ['settings.component.scss']
})
export class SettingsComponent {

  private screenName: string = 'Settings';

  constructor(
    private loginService: LoginService
  ) {}

  onLogout() {
    this.loginService.logout();
  }

}
