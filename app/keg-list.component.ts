import {Component, Input} from '@angular/core';
import{ Keg } from './keg.model';

@Component({
  selector:'keg-list',
  template:`
  <div class="well">
    <div class="panel panel-default" *ngFor="let currentKeg of childKegList">
      <div class="panel-heading">{{currentKeg.name}}</div>
      <div class="panel-body">
        <ul>
          <li>{{currentKeg.brand}}</li>
          <li>{{currentKeg.description}}</li>
          <li>ABV: {{currentKeg.abv}}</li>
          <li>{{currentKeg.style}}</li>
          <li>{{currentKeg.amount}}</li>
          <button (click) = "currentKeg.fill16()">Fill Pint</button>
          <button (click) = "currentKeg.fill32()">Fill 32oz Growler</button>
          <button (click) = "currentKeg.fill64()">Fill 64oz Growler</button>
        </ul>
      </div>
    </div>
  </div>
  `
})

export class KegListComponent{
  @Input() childKegList: Keg[];


}
