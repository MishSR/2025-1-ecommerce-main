import { Component } from '@angular/core';
import { VelasInterface, VelasVendidas } from '../../velas'; 
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-carrito',
  imports: [CurrencyPipe],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {

  cartList: VelasVendidas[] = [];
  cart: VelasVendidas[] = [];

  datosCart: VelasInterface[] = [];

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit() {
    this.loadCart();
    console.log(this.datosCart);
  }

  loadCart() {
    this.cart = this.cartService.getCart();
  }

  handleClick() {
    console.log('Bienvenido')
    this.router.navigateByUrl('checkout')
  }

  sumar(): number {
    let total = 0;
    for (const vela of this.cart) {
      total = total + vela.cantidad * vela.precio;
    }
    return total;
  }
}

