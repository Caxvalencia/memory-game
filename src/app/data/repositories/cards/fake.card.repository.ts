import { Observable, of } from 'rxjs';

import { CardRepository } from '@core/cards/repositories/card.repository';
import { CardEntity } from '@core/cards/entities/card.entity';

export class FakeCardRepository implements CardRepository {

  getCards(): Observable<CardEntity[]> {
    return of(this.factoryCards(8));
  }

  private factoryCards(num: number) {
    const cardList = [];

    for (let index = 0; index < num; index++) {
      const card = {
        id: Math.floor(Math.random() * 100000),
        value: index + 1
      } as CardEntity;

      cardList.push(card);
    }

    return cardList;
  }
}
