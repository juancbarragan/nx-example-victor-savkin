import {Component, EventEmitter, Input, Output} from '@angular/core';

export interface Item {
  code: string;
  description: string;
}

@Component({
  selector: 'happyorg-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent {

  @Input() items: Item[] = [];
  @Output() addToCart = new EventEmitter<any>();

  doAddToCart(code: string) {
    this.addToCart.emit(code);

  }
}
