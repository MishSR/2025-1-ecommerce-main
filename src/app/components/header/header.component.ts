import { Component, Signal } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  counter!:Signal<number>;

  constructor(private cartService: CartService) {
    this.counter=this.cartService.getCounter();
  }

}
