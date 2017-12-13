import { Component, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';

import { MapService } from '../../shared/map.service';

@Component({
  selector: 'home-component',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})
export class HomeComponent {

  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  constructor(
    private mapService: MapService
  ) { }

  private onClickMap() {
    this.trigger.openMenu();
    //this.mapService.myFunction();
  }

}
