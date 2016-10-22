import { Component, OnInit } from '@angular/core';
import {VegetableService} from './vegetable.service';

export class vegetable{
  id: number;
  name: string;
}

 
@Component({
  selector: 'vbook-vegetable',
  templateUrl: './vegetable.component.html',
  styleUrls: ['./vegetable.component.css'],
  providers: [VegetableService]
})
export class VegetableComponent implements OnInit {
/*vegetables : vegetable[]=[
  {id:1, name:'Tomato'},
  {id:2, name:'Potato'}

];*/
vegetables : vegetable[];
/*this.vegetables = this.VegetableService.getVegetables();*/
getVegetables(): void{
  this.vegetables = this.VegetableService.getVegetables();
}
newVegetable : string = "";

 AddNew() {
   
  var newid = this.vegetables.length+1;

  this.vegetables.push({id:newid, name:this.newVegetable});
  this.newVegetable = "";
  
}

  constructor(private VegetableService:VegetableService) {
    
  }

  ngOnInit(): void {
    this.getVegetables();
  }

}
