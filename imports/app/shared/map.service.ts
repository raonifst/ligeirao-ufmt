import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class MapService {

  private showItemsEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private router: Router
  ) { }

  myFunction(): void {
    console.log("sucesso");
  }

}
