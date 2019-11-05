import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardComponent } from './components/card/card.component';

const components = [CardComponent];

@NgModule({
  imports: [CommonModule],
  declarations: [...components],
  exports: [components],
  entryComponents: []
})
export class SharedModule { }
