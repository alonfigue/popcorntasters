import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileMoviePageRoutingModule } from './profile-movie-routing.module';

import { ProfileMoviePage } from './profile-movie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileMoviePageRoutingModule
  ],
  declarations: [ProfileMoviePage]
})
export class ProfileMoviePageModule {}
