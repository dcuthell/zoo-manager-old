import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template: `
  <label>Name:</label>
  <input #newName class>
  <label>Description:</label>
  <input #newDescripton>
  <label>Brand:</label>
  <input #newBrand>
  <label>Price:</label>
  <input #newPrice>
  <label>ABV:</label>
  <input #newABV>
  <label>Style:</label>
  <input #newStyle type="number">
  <button (click)="submitForm(newName.value, newDescripton.value, newBrand.value, newName.value, newABV.value, newStyle.value)">Add</button>
  `
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();

  submitForm(name: string, description: string, brand: string, price: number, abv: number, style:string) {
     let newKegToAdd: Keg = new Keg(name, description, brand, price, abv, style );
     this.newKegSender.emit(newKegToAdd);
     console.log(typeof style);
   }
}
