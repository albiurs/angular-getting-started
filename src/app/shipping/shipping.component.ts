import { Component, OnInit } from '@angular/core';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  public shippingCosts: any;

  constructor(
    private cartService: CartService,
  ) {
    // fetch shipping prices from external resource through the CartService
    this.shippingCosts = this.cartService.getShippingPrices();
  }

  ngOnInit(): void {
  }

}
