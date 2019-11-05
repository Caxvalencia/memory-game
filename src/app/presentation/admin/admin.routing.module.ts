import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateGuard } from '@shared/guards/can-activate.guard';
import { GamingStagePage } from './gaming-stage/gaming-stage.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/admin/gaming-stage',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/admin/gaming-stage',
    pathMatch: 'full'
  },
  {
    path: 'gaming-stage',
    component: GamingStagePage,
    canActivate: [CanActivateGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
