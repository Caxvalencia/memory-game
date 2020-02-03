import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardComponent } from './components/card/card.component';
import { TimerComponent } from './components/timer/timer.component';

const components = [CardComponent, TimerComponent];

@NgModule({
  imports: [CommonModule],
  declarations: [...components],
  exports: [components],
  entryComponents: []
})
export class SharedModule { }
