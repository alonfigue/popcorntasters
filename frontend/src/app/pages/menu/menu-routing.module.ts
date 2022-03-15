import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'main',
        loadChildren: () => import('../main/main.module').then( m => m.MainPageModule),
      },
      {
        path: 'profile-user',
        loadChildren: () => import('../profile-user/profile-user.module').then( m => m.ProfileUserPageModule)
      },
      {
        path: 'user-activity',
        loadChildren: () => import('../user-activity/user-activity.module').then( m => m.UserActivityPageModule)
      },
      {
        path: 'user-top',
        loadChildren: () => import('../user-top/user-top.module').then( m => m.UserTopPageModule)
      }, 
      {
        path: 'search-movie',
        loadChildren: () => import('../search-movie/search-movie.module').then( m => m.SearchMoviePageModule)
      },,
      {
        path: 'profile-movie/:id',
        loadChildren: () => import('../profile-movie/profile-movie.module').then( m => m.ProfileMoviePageModule)
      },
      {
        path:'',
        redirectTo: '/menu/main',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/menu/main',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
