import { Injectable } from '@angular/core';
import { VelasInterface } from '../velas';
import { VelasConst } from '../listavelas'; 

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  arracadas: VelasInterface[]=VelasConst;

  constructor() { }

  getVelas():VelasInterface[]{
    return this.arracadas;
  }
}
