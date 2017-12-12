import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Meteor } from 'meteor/meteor';

@Injectable()
export class MapService {

  private showItemsEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private router: Router
  ) { }

  MyFunction(): void {
      console.log("sucesso");
  }

}
