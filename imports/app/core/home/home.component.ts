import { Component, OnInit } from '@angular/core';

import { MapService } from '../../shared/map.service';
import { BusStop } from "../../../../lib/classes/busstop";

@Component({
  selector: 'home-component',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})
export class HomeComponent implements OnInit {

  dotRadius: string = "2.2%";

  dotColor: string = "#000000";

  dotOpacity: number = 0.6;

  dotAnimatedInitialTime: string = "0s";

  dotAnimatedFinalTime: string = "2s";

  dotAnimatedInitialRadius: string = this.dotRadius;

  dotAnimatedFinalRadius: string = "5%";

  dotAnimatedColor: string = "#000000"; // Cor original: "#4285F4"

  dotAnimatedInitialOpacity: number = 0.3;

  dotAnimatedFinalOpacity: number = 0;

  domRect: ClientRect;

  busStopsList: BusStop[];

  constructor(
    private mapService: MapService
  ) { }

  ngOnInit(): void {
    this.busStopsList = this.mapService.getBusStopsList();
    this.domRect = document.getElementById("imageMap").getBoundingClientRect();
    console.log(this.domRect);
  }

  onButtonClick(index: number): void {
    console.log("Ponto visitado: " + this.busStopsList[index].getName());
  }

}
