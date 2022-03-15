import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserTopPageRoutingModule } from './user-top-routing.module';

import { UserTopPage } from './user-top.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserTopPageRoutingModule
  ],
  declarations: [UserTopPage]
})
export class UserTopPageModule {}
