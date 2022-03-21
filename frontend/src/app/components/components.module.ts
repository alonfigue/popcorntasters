import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderGoMainComponent } from './header-go-main/header-go-main.component';
import { IonicModule } from '@ionic/angular';

import { RouterModule } from '@angular/router';


import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderGoMainComponent
  ],
  exports: 
  [HeaderGoMainComponent,
    
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,    
    FormsModule
  ]
})
export class ComponentsModule { }
