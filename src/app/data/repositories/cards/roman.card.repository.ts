import { Observable, of } from 'rxjs';

import { CardRepository } from '@core/cards/repositories/card.repository';
import { CardEntity } from '@core/cards/entities/card.entity';

export class RomanCardRepository implements CardRepository {

  private romans = [
    'I', 'II', 'III',
    'IV', 'V', 'VI', 'VII', 'VIII',
    'IX', 'X'
  ];

  getCards(): Observable<CardEntity[]> {
    return of(this.factoryCards(10));
  }

  private factoryCards(num: number) {
    const cardList = [];

    for (let index = 0; index < num; index++) {
      const card = {
        id: Math.floor(Math.random() * 100000),
        value: this.getRomanNumber(index)
      } as CardEntity;

      cardList.push(card);
    }

    return cardList;
  }

  private getRomanNumber(index) {
    return this.romans[index];
  }
}
