import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileMoviePage } from './profile-movie.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileMoviePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileMoviePageRoutingModule {}
