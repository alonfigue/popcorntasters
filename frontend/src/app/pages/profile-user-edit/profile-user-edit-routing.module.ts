import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileUserEditPage } from './profile-user-edit.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileUserEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileUserEditPageRoutingModule {}
