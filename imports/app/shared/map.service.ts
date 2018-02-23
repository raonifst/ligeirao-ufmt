import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { BusStop } from "../../../lib/classes/busstop";
import { busStopsData } from "../../api/objects/busstops-data";

@Injectable()
export class MapService {

  private busStopsList: BusStop[];

  constructor(
    private router: Router
  ) {
    this.busStopsList = busStopsData;
  }

  getBusStopsList(): BusStop[] {
    return this.busStopsList;
  }

}
