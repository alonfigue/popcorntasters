import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserActivityPageRoutingModule } from './user-activity-routing.module';

import { UserActivityPage } from './user-activity.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserActivityPageRoutingModule,    
    ComponentsModule
  ],
  declarations: [UserActivityPage]
})
export class UserActivityPageModule {}
