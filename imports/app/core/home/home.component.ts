import { Component, ViewChild, OnInit } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';

import { MapService } from '../../shared/map.service';

@Component({
  selector: 'home-component',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  //pointX = [229, 213, 69, 264];
  //pointY = [94, 170, 325, 536];

  constructor(
    private mapService: MapService
  ) {
  }

  private ngOnInit() {

  }

  private transLinear(resolution) {

  }

  private onClickMap(event) {
    //this.trigger.openMenu();
    //this.mapService.myFunction();
    let fatorW: number = screen.width/412;
    let fatorH: number = screen.height/732;
    let pointX = [];
    let pointY = [];
    pointX.push(Math.floor(229*fatorW));
    pointY.push(Math.floor(94*fatorH));
    console.log(pointX[0], pointY[0]);
    console.log(event.offsetX+" "+event.offsetY+", "+screen.width+" "+screen.height);
  }


}
