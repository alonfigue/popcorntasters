import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserTopPage } from './user-top.page';

const routes: Routes = [
  {
    path: '',
    component: UserTopPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserTopPageRoutingModule {}
