import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { HasNicknameGuard } from './presentation/shared/guards/has-nickname.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./presentation/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./presentation/admin/admin.module').then(m => m.AdminModule),
    canActivate: [HasNicknameGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
