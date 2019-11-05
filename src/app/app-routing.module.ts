import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./presentation/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'gaming-stage',
    loadChildren: () => import('./presentation/admin/gaming-stage/gaming-stage.module').then(m => m.GamingStagePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
