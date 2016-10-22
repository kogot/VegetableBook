import { Injectable } from '@angular/core';
import{ Vegetable } from './vegetable';
import { Vegetables} from './mock-vegetable';
 

@Injectable()
export class VegetableService {

getVegetables(): Vegetable[]{
  return Vegetables;
}
  

}
