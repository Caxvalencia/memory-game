import { Observable, of } from 'rxjs';

import { NicknameRepository } from '@app/core/nickname/repositories/nickname.repository';

export class FakeNicknameRepository implements NicknameRepository {

  getNickname(): Observable<any> {
    return of('Con centramesta');
  }

  setNickname(nickname: string): Observable<any> {
    return of('nick-error' !== nickname);
  }
}
