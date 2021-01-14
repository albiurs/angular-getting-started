/**
 * Product Alerts (child component)
 */
import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';  // module to pass inputs to this component
import { Output, EventEmitter } from '@angular/core'; // module to pass outputs from this component; emit an event on action

/**
 * ProductAlertsComponent{}
 */
@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
// export class ProductAlertsComponent {
  @Input() product: any;                     // var "product" used as input var
  // tslint:disable-next-line:new-parens
  @Output() notify = new EventEmitter;  // var "notify" used as output var

  constructor() { } // ignored

  // tslint:disable-next-line:typedef
  ngOnInit() { }    // ignored
}
