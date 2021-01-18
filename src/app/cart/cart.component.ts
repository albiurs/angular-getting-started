import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public items: any[];  // public?!?!?!

  constructor(
    private cartService: CartService,
  ) {
    // get cart items from the CatService in cart.service.ts
    this.items = this.cartService.getItems();
  }

  ngOnInit(): void {
  }

}
