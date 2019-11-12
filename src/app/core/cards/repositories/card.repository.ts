import { Observable } from 'rxjs';

import { CardEntity } from '../entities/card.entity';

export const CARD_REPOSITORY = 'CardRepository';

export interface CardRepository {
  getCards(): Observable<CardEntity[]>;
}
