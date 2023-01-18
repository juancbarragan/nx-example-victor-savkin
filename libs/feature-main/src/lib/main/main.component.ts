import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'happyorg-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class MainComponent {
  cart: Array<any> = [];
  items= [
    {code: 'bl', description: "mybl"},
    {code: 'p', description: "myp"},
    {code: 'm', description: "mym"}
  ];

  addToCart(code: any) {
    this.cart.push(code);
  }
}
