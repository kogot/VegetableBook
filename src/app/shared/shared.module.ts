import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ng2-modal';
import { UIRowComponent } from './ui-row.component'; 

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule,
        ModalModule
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule, 
        RouterModule,
        UIRowComponent,
        ModalModule,
    ],
    declarations: [ 
        UIRowComponent, 
    ]
})
export class SharedModule { }
