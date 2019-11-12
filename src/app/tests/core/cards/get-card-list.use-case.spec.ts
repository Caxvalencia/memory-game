import { Observable, of } from 'rxjs';

import { CardRepository } from '@core/cards/repositories/card.repository';
import { GetCardListUseCase } from '@core/cards/use-cases/get-card-list.use-case';

class MockRepository implements CardRepository {

  getCards(): Observable<any> {
    return of([
      {id: 1, value: 'IV'},
      {id: 2, value: 'III'},
      {id: 3, value: 'X'},
    ]);
  }
}

describe('GetCardListUseCase', () => {

  let getCardListUseCase: GetCardListUseCase;

  beforeEach(() => {
    const repository = new MockRepository();
    getCardListUseCase = new GetCardListUseCase(repository);
  });

  it('execute should be return a list of card items', () => {
    getCardListUseCase.execute().subscribe(cardList => {
      expect(cardList.length).toBeGreaterThan(0);
    });
  });
});
