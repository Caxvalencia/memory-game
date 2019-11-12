import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { CardEntity } from '@core/cards/entities/card.entity';
import { GetCardListUseCase } from '@core/cards/use-cases/get-card-list.use-case';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(
    protected getCardListUseCase: GetCardListUseCase
  ) {
  }

  getCardList(): Observable<CardEntity[]> {
    return this.getCardListUseCase.execute();
  }
}
