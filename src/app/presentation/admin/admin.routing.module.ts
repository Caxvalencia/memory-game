import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HasNicknameGuard } from '@app/presentation/shared/guards/has-nickname.guard';
import { GamingStagePage } from './gaming-stage/gaming-stage.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'gaming-stage',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'gaming-stage',
    pathMatch: 'full'
  },
  {
    path: 'gaming-stage',
    component: GamingStagePage,
    canActivate: [HasNicknameGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
