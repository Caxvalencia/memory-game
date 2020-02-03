import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardComponent } from './components/card/card.component';
import { TimerComponent } from './components/timer/timer.component';
import { MinuteSecondsPipe } from './pipes/minute-seconds.pipe';

const components = [
  CardComponent,
  TimerComponent,
  MinuteSecondsPipe
];

@NgModule({
  imports: [CommonModule],
  declarations: [...components],
  exports: [components],
  entryComponents: []
})
export class SharedModule { }
