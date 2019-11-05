import { Observable } from 'rxjs';

export const AUTH_REPOSITORY = 'AuthRepository';

export interface AuthRepository {

  signIn(credentials: any): Observable<any>;

  signOut(): Observable<any>;
}
