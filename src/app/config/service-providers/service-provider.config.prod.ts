import { Provider } from '@angular/core';
import { NICKNAME_REPOSITORY } from '@core/nickname/repositories/nickname.repository';
import { StorageNicknameRepository } from '@data/repositories/nickname/storage.nickname.repository';

export const SERVICE_PROVIDERS: Array<Provider> = [
  {
    provide: NICKNAME_REPOSITORY,
    useClass: StorageNicknameRepository
  }
];
