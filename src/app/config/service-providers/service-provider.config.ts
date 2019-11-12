import { Provider } from '@angular/core';
import { NICKNAME_REPOSITORY } from '@core/nickname/repositories/nickname.repository';
import { FakeNicknameRepository } from '@data/repositories/nickname/fake.nickname.repository';

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `service-provider.config.ts` with `service-provider.config.prod.ts`.
// The list of file replacements can be found in `angular.json`.
export const SERVICE_PROVIDERS: Array<Provider> = [
  {
    provide: NICKNAME_REPOSITORY,
    useClass: FakeNicknameRepository
  }
];
