import { Component } from '@angular/core';
import { MapService } from "../../shared/map.service";

@Component({
  selector: 'home-component',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})
export class HomeComponent {
    constructor(
      private mapService: MapService
    ) { }

    private MyFunction() {
      this.mapService.MyFunction();
      console.log("oi")
    }

}
