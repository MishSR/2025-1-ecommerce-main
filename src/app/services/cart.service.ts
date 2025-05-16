import { Injectable, signal } from '@angular/core';
import { VelasInterface, VelasVendidas } from '../velas'; 

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  private count = signal<number>(0);

  getCounter() {
    return this.count;
  }

  incremento() {
    this.count.update(n => n + 1);
  }

  decremento() {
    this.count.update(n => n - 1);
  }

  getCart(): VelasVendidas[] {
    const cartString = localStorage.getItem('cart');
    if (cartString === null) {
      return [];
    }
    const cart = JSON.parse(cartString);
    const length = cart.length;
    this.count.update(n => length);
    return cart as VelasVendidas[];
  }

  addToCart(vela: VelasInterface) {
    this.incremento();
    const cart = this.getCart();
    const index = cart.findIndex(item => item.id === vela.id);
    if (index === -1) {
      const velaVendida = { ...vela, cantidad: 1 }
      cart.push(velaVendida);
    } else {
      cart[index].cantidad++
    }
    localStorage.setItem('cart', JSON.stringify(cart))
  }
}
