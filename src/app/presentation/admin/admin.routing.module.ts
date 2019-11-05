import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateGuard } from '@shared/guards/can-activate.guard';

import { DashboardPage } from './dashboard/dashboard.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/admin/dashboard',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/admin/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardPage,
    canActivate: [CanActivateGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
