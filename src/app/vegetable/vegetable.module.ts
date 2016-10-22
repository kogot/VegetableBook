import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VegetableComponent } from './vegetable.component';
import { FormsModule } from '@angular/forms';
import { VegetableService } from './vegetable.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [VegetableComponent]
})
export class VegetableModule { 
}
