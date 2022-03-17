import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NotLoggedinGuard } from './guards/not-loggedin.guard';
import { LoggedinGuard } from './guards/loggedin.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),
    canActivate: [NotLoggedinGuard],
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./pages/register/register.module').then(
        (m) => m.RegisterPageModule
      ),
    canActivate: [NotLoggedinGuard],
  },
  {
    path: 'menu',
    loadChildren: () =>
      import('./pages/menu/menu.module').then((m) => m.MenuPageModule),
    canActivate: [LoggedinGuard],
  },
  {
    path: 'search-movie',
    loadChildren: () =>
      import('./pages/search-movie/search-movie.module').then(
        (m) => m.SearchMoviePageModule
      ),
  },
  {
    path: 'profile-movie/:id',
    loadChildren: () =>
      import('./pages/profile-movie/profile-movie.module').then(
        (m) => m.ProfileMoviePageModule
      ),
  },
  {
    path: 'profile-user-edit',
    loadChildren: () =>
      import('./pages/profile-user-edit/profile-user-edit.module').then(
        (m) => m.ProfileUserEditPageModule
      ),
  },
  {
    path: 'profile-user',
    loadChildren: () =>
      import('./pages//profile-user/profile-user.module').then(
        (m) => m.ProfileUserPageModule
      ),
  },
  {
    path: 'user-activity',
    loadChildren: () =>
      import('./pages/user-activity/user-activity.module').then(
        (m) => m.UserActivityPageModule
      ),
  },
  {
    path: 'user-top',
    loadChildren: () =>
      import('./pages/user-top/user-top.module').then(
        (m) => m.UserTopPageModule
      ),
  },
  {
    path: 'profile-user-delete',
    loadChildren: () =>
      import('./pages/profile-user-delete/profile-user-delete.module').then(
        (m) => m.ProfileUserDeletePageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
