import { Provider } from '@angular/core';
import { AUTH_REPOSITORY } from '@core/auth/repositories/auth.repository';
import { FakeAuthRepository } from '@data/repositories/fake.auth.repository';

export const SERVICE_PROVIDERS: Array<Provider> = [
  {
    provide: AUTH_REPOSITORY,
    useClass: FakeAuthRepository
  }
];
