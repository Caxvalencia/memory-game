import { Observable, of } from 'rxjs';

import { AuthRepository } from '@core/auth/repositories/auth.repository';

export class FakeAuthRepository implements AuthRepository {

  signIn(credentials: any): Observable<any> {
    if (credentials.phoneNumber === credentials.password) {
      return of(true);
    }

    return of(false);
  }

  signOut(): Observable<any> {
    return of(true);
  }
}
