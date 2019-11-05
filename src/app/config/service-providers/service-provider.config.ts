import { Provider } from '@angular/core';
import { AUTH_REPOSITORY } from '@core/auth/repositories/auth.repository';
import { FakeAuthRepository } from '@data/repositories/fake.auth.repository';

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `service-provider.config.ts` with `service-provider.config.prod.ts`.
// The list of file replacements can be found in `angular.json`.
export const SERVICE_PROVIDERS: Array<Provider> = [
  {
    provide: AUTH_REPOSITORY,
    useClass: FakeAuthRepository
  }
];
