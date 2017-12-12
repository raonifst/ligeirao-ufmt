import { Component, ViewChild } from '@angular/core';
import { MapService } from "../../shared/map.service";
import {MatMenuTrigger} from '@angular/material';

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

    private MyFunction() {
      this.trigger.openMenu();
      this.mapService.MyFunction();
      console.log("oi")
    }

}
