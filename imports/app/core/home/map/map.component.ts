import { Component, OnInit } from '@angular/core';

import { BusStop } from "../../../../../lib/classes/busstop";
import { MapService } from "../../../shared/map.service";

@Component({
  selector: 'map-component',
  templateUrl: 'map.component.html',
  styleUrls: ['map.component.scss']
})
export class MapComponent implements OnInit {

  dotRadius: string = "2.2%";

  dotColor: string = "#000000";

  dotOpacity: number = 0.6;

  dotAnimatedBegin: string = "0s";

  dotAnimatedDur: string = "2s";

  dotAnimatedFromRadius: string = this.dotRadius;

  dotAnimatedToRadius: string = "5%";

  dotAnimatedColor: string = "#000000"; // Cor original: "#4285F4"

  dotAnimatedFromOpacity: number = 0.3;

  dotAnimatedToOpacity: number = 0;

  dotFullscreenBegin: string = "click";

  dotFullscreenDur: string = "2s";

  dotFullscreenFromRadius: string = this.dotRadius;

  dotFullscreenToRadius: string = "200%";

  dotFullscreenFromColor: string = this.dotColor;

  dotFullscreenToColor: string = "#4285F4";

  dotFullscreenFromOpacity: number = 0;

  dotFullscreenToOpacity: number = 1;

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
