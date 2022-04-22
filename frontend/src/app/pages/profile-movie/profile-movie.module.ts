import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileMoviePageRoutingModule } from './profile-movie-routing.module';

import { ProfileMoviePage } from './profile-movie.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileMoviePageRoutingModule,
    ComponentsModule
  ],
  declarations: [ProfileMoviePage]
})
export class ProfileMoviePageModule {}
