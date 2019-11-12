import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '@shared/shared.module';

import { AdminRoutingModule } from './admin.routing.module';
import { GamingStagePage } from './gaming-stage/gaming-stage.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SharedModule,
    AdminRoutingModule
  ],
  declarations: [
    GamingStagePage
  ]
})
export class AdminModule { }
