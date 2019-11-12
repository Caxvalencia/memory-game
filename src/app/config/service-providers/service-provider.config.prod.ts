import { Provider } from '@angular/core';
import { CARD_REPOSITORY } from '@core/cards/repositories/card.repository';
import { NICKNAME_REPOSITORY } from '@core/nickname/repositories/nickname.repository';
import { RomanCardRepository } from '@data/repositories/cards/roman.card.repository';
import { StorageNicknameRepository } from '@data/repositories/nickname/storage.nickname.repository';

export const SERVICE_PROVIDERS: Array<Provider> = [
  {
    provide: NICKNAME_REPOSITORY,
    useClass: StorageNicknameRepository
  },
  {
    provide: CARD_REPOSITORY,
    useClass: RomanCardRepository
  },
];
