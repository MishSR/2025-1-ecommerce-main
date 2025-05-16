import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CurrencyPipe } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { CardsComponent } from '../../components/cards/cards.component'; 
import { VelasInterface } from '../../velas';

@Component({
  selector: 'app-productos',
  imports: [CurrencyPipe, CardsComponent],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

  misVelas: VelasInterface[] = [];

  cart: VelasInterface[] = [];

  constructor(public productService: ProductService, public cartService: CartService) { }

  ngOnInit() {
    this.misVelas = this.productService.getVelas();
  }

  loadCart() {
    this.cart = this.cartService.getCart();
  }

  addToCart(vela:VelasInterface) {
    this.cartService.addToCart(vela);
    this.loadCart();
  }
}
