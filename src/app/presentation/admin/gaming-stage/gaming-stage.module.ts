import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GamingStagePage } from './gaming-stage.page';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: GamingStagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [GamingStagePage]
})
export class GamingStagePageModule {}
