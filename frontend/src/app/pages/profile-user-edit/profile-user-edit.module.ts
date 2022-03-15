import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileUserEditPageRoutingModule } from './profile-user-edit-routing.module';

import { ProfileUserEditPage } from './profile-user-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileUserEditPageRoutingModule
  ],
  declarations: [ProfileUserEditPage]
})
export class ProfileUserEditPageModule {}
