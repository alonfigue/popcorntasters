import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileUserDeletePageRoutingModule } from './profile-user-delete-routing.module';

import { ProfileUserDeletePage } from './profile-user-delete.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileUserDeletePageRoutingModule,
    ComponentsModule
  ],
  declarations: [ProfileUserDeletePage]
})
export class ProfileUserDeletePageModule {}
