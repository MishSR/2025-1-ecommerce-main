import { Component, Input } from '@angular/core';
import { VelasInterface } from '../../velas'; 
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cards',
  imports: [CurrencyPipe],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {

  @Input() a!:VelasInterface;

  

}
