import { Component, OnInit } from '@angular/core';
import { VelasInterface, VelasVendidas } from '../../velas'; 
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-total',
  imports: [],
  templateUrl: './total.component.html',
  styleUrl: './total.component.css'
})
export class TotalComponent implements OnInit {

  datosCart: VelasVendidas[] = [];
  cart: VelasVendidas[] = [];

  constructor(private cartService: CartService, private router: Router) { }

  loadCart() {
    this.cart = this.cartService.getCart();
  }

  ngOnInit() {
    this.loadCart();
    console.log(this.datosCart);
  }

  sumar(): number {
    let total = 0;
    for (const arracada of this.cart) {
      total = total + arracada.cantidad * arracada.precio;
    }
    return total;
  }
}

