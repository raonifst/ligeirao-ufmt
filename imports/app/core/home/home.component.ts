import { Component, ViewChild, OnInit } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';

import { MapService } from '../../shared/map.service';
import { BusStop } from '../../../../lib/classes/busstop';

@Component({
  selector: 'home-component',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  private dotRadius: string = "2.2%";

  private dotColor: string = "#000000";

  private dotOpacity: number = 0.6;

  private dotAnimatedInitialTime: string = "0s";

  private dotAnimatedFinalTime: string = "2s";

  private dotAnimatedInitialRadius: string = this.dotRadius;

  private dotAnimatedFinalRadius: string = "5%";

  private dotAnimatedColor: string = "#000000"; // Cor original: "#4285F4"

  private dotAnimatedInitialOpacity: number = 0.3;

  private dotAnimatedFinalOpacity: number = 0;

  private listStops: BusStop[];

  //pointX = [229, 213, 69, 264];
  //pointY = [94, 170, 325, 536];

  constructor(
    private mapService: MapService
  ) { }

  private ngOnInit(): void {
    this.listStops = [
      new BusStop(1, "Bloco Didático", "168px", "092px"),
      new BusStop(2, "Enfermagem", "156px", "154px"),
      new BusStop(3, "FAET", "114px", "234px"),
      new BusStop(4, "Gińasio", "172px", "333px"),
      new BusStop(5, "Quadras", "258px", "445px"),
      new BusStop(6, "Guarita 2", "282px", "572px"),
      new BusStop(7, "Biblioteca", "184px", "176px"),
      new BusStop(8, "STI", "156px", "261px"),
      new BusStop(9, "Zootecnia", "200px", "321px"),
      new BusStop(10, "ICHS", "301px", "450px"),
      new BusStop(11, "Shopping", "332px", "450px"),
    ];
  }

  private onButtonClick(busStop: BusStop): void {
    console.log("Ponto visitado: " + busStop.getName());
  }

}
