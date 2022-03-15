import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchMoviePageRoutingModule } from './search-movie-routing.module';

import { SearchMoviePage } from './search-movie.page';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchMoviePageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [SearchMoviePage]
})
export class SearchMoviePageModule {}
