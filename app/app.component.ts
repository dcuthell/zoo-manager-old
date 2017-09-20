import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>{{month}}/{{day}}/{{year}}</h1>
    <h3>{{currentFocus}}</h3>
    <div class="panel panel-default" *ngFor="let currentKeg of kegs">
    <div class="panel-heading">pffft</div>
    <div class="panel-body">
    <ul>
      <li>{{currentKeg.brand}}</li>
      <li>{{currentKeg.description}}</li>
      <li>ABV: {{currentKeg.abv}}</li>
      <li>{{currentKeg.style}}</li>
      <li>{{currentKeg.amount}}</li>
      <button (click)="fillPint()">Fill Pint</button>
    </ul>
    </div>
  </div>
    <ul>
      <li>{{currentKeg.name}}</li>
    </ul>
  </div>
    `
})

export class AppComponent {
  currentFocus: string = 'Keggos';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  kegs: Keg[] = [
    new Keg('Play Wave','With Mosaic, Galaxy, and Centennial hops added at the tail end, this easy-drinking NW Pale Ale is a tidal wave of citrusy goodness, without the bitter wipeout.','Crux',0.30,5.00,'Pale Ale'),
    new Keg('French Connection','The hops used for this beer are French experimental hops grown in the Alsace region. Hop character is fresh and lively. You get an intense double IPA that tastes like no other.','Crux',0.8,9,'IPA'),
    new Keg('P.B.R. 1844','Brewed with German caramel malt (NO rice, all-malt) and American cascade hops. Aged in new American oak barrels.','PBR',.25,6,'English Pale Ale'),
    new Keg('420 Extra Pale Ale','A tasty West Coast style Extra Pale Ale accentuated with a stimulating hop character. First conceived in our bat cave on 4/20, this kind of beer keeps the wheels on the bus going round and round!','Sweet Water Brewing',.25,5.7,'Pale Ale'),
    new Keg('5th Anniversary Chocolate Raspberry Imperial Stout','Our 5th Anniversary beer is a dark and decadent imperial stout fermented with raspberries and finished on cocoa nibs and a touch of vanilla','West Brook Brewing Company',0.5,10,'English Pale Ale'),
    new Keg('Dirty Bastard','So good it’s almost wrong. Dark ruby in color and brewed with seven varieties of imported malts. Complex in finish, with hints of smoke and peat, paired with a malty richness and a right hook of hop power to give it the bad attitude that a beer named Dirty Bastard has to live up to. Ain’t for the wee lads.','Founders Brewing Company',4,4,'American Pale Ale')];

  selectedKeg: Keg = this.kegs[0];


    fillPint(){
      this.amount -= 16;
      console.log(this.amount);
    }

    fill32(){
      this.amount -= 32;
    }

    fill64(){
      this.amount -= 64;
    }
}

export class Keg {
  public amount : number = 1984;
  constructor(public name: string, public description: string, public brand: string, public price: number, public abv: number, public style: string) { }


}
