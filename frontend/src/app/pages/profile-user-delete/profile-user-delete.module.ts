import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileUserDeletePageRoutingModule } from './profile-user-delete-routing.module';

import { ProfileUserDeletePage } from './profile-user-delete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileUserDeletePageRoutingModule
  ],
  declarations: [ProfileUserDeletePage]
})
export class ProfileUserDeletePageModule {}
