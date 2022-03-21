import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileUserEditPageRoutingModule } from './profile-user-edit-routing.module';

import { ProfileUserEditPage } from './profile-user-edit.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileUserEditPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ProfileUserEditPage]
})
export class ProfileUserEditPageModule {}
