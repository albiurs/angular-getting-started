import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'; // httpClient module to connect and stream to the API / URL.

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private items: any[];

  constructor(
    private httpClient: HttpClient
  ) {
    this.items = [];
  }

  /**
   * Add new item to the cart.
   * @param product Item to be added to the cart.
   */
  addToCart(product: any): void {
    this.items.push(product);
  }

  /**
   * Item getter
   */
  getItems(): any[] {
    return this.items;
  }

  /**
   * Clear cart
   */
  clearCart(): any[] {
    this.items = [];
    return this.items;
  }

  /**
   * Stream a JSON file from an external API / URL.
   * Uses the httpClient module to connect and stream to the API / URL.
   */
  getShippingPrices(): {} {
    return this.httpClient.get('/assets/shipping.json');
  }
}
