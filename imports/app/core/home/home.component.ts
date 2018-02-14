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
    let pointX = Math.floor(event.offsetX/fatorW);
    let pointY = Math.floor(event.offsetY/fatorH);
    console.log(pointX,pointY);
    console.log(event.offsetX+" "+event.offsetY+", "+screen.width+" "+screen.height);

    if(pointX>163 && pointX<173 && pointY>87 && pointY<97) {
      console.log("Bloco Didático");
    }
    if(pointX>151 && pointX<159 && pointY>149 && pointY<159) {
      console.log("Enfermagem");
    }
    if(pointX>109 && pointX<119 && pointY>229 && pointY<239) {
      console.log("FAET");
    }
    if(pointX>167 && pointX<177 && pointY>328 && pointY<338) {
      console.log("Gińasio");
    }
    if(pointX>253 && pointX<263 && pointY>440 && pointY<450) {
      console.log("Quadras");
    }
    if(pointX>277 && pointX<287 && pointY>567 && pointY<577) {
      console.log("Guarita 2");
    }
    if(pointX>179 && pointX<189 && pointY>171 && pointY<181) {
      console.log("Biblioteca");
    }
    if(pointX>151 && pointX<161 && pointY>256 && pointY<266) {
      console.log("STI");
    }
    if(pointX>195 && pointX<205 && pointY>316 && pointY<326) {
      console.log("Zootecnia");
    }
    if(pointX>296 && pointX<306 && pointY>445 && pointY<455) {
      console.log("ICHS");
    }
    if(pointX>327 && pointX<337 && pointY>576 && pointY<586) {
      console.log("Shopping");
    }

  }

}
