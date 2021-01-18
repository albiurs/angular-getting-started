import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // items = [];
  private items: any[];

  constructor(
    private httpClient: HttpClient
  ) {
    this.items = [];
  }

  addToCart(product: any): void {
    this.items.push(product);
  }

  getItems(): any[] {
    return this.items;
  }

  clearCart(): any[] {
    this.items = [];
    return this.items;
  }

  getShippingPrices(): any {
    return this.httpClient.get('/assets/shipping.json');
  }
}
