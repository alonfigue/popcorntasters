import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileUserDeletePage } from './profile-user-delete.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileUserDeletePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileUserDeletePageRoutingModule {}
