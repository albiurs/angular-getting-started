import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
import { CartService } from '../cart.service';
import {any} from 'codelyzer/util/function';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: any; // public?!?!

  /**
   * Inject ActivatedRoute into the constructor() by adding private route: ActivatedRoute
   * as an argument within the constructor's parentheses.
   * ActivatedRoute is specific to each component that the Angular Router loads.
   * ActivatedRoute contains information about the route and the route's parameters.
   * By injecting ActivatedRoute, you are configuring the component to use a service.
   * @param route ActivatedRoute module
   * @param cartService CartService module
   */
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  /**
   * The route parameters correspond to the path variables you define in the route. To access the route parameters,
   * we use route.snapshot, which is the ActivatedRouteSnapshot that contains information
   * about the active route at that particular moment in time. The URL that matches the route provides the productId .
   * Angular uses the productId to display the details for each unique product.
   */
  ngOnInit(): void {
    // First extract the productId from the route parameters.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // // Find the product that correspond with the id provided in route.
    this.product = products.find(product => product.id === productIdFromRoute);
  }

  /**
   * Add new item to the CartService in cart.service.ts
   * @param product product to be added to the cart
   */
  addToCart(product: any): void {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart.');
  }
}
