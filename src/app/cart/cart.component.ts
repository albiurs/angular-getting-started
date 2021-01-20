import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';   // Angular FormBuilder service

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  // == fields ==
  public items: any[];
  public checkoutForm: any;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) {
    // get cart items from the CatService in cart.service.ts
    this.items = this.cartService.getItems();
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  public ngOnInit(): void {
  }

  public onSubmit(): void {
    // process chckout data
    // print warning to the browser's console with the contents of the form
    console.warn('Your order has been submitted', this.checkoutForm.value);
    console.warn('Your order has been submitted', this.items);
    // To confirm submission, open the console to see an object containing the name and address you submitted.
    // window.alert('Your order has been submitted' + this.checkoutForm.value.toString() + this.items.toString());
    window.alert(
      JSON.stringify(this.items, null, 4) +
      '\n\n' +
      JSON.stringify(this.checkoutForm.value, null, 4)
    );

    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();  // reset the checkoutForm
  }
}
