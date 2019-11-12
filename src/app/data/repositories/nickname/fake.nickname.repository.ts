import { Observable, of } from 'rxjs';

import { NicknameRepository } from '@app/core/nickname/repositories/nickname.repository';

export class FakeNicknameRepository implements NicknameRepository {

  getNickname(): Promise<string> {
    return of('Con centramesta').toPromise();
  }

  setNickname(nickname: string): Observable<any> {
    return of('nick-error' !== nickname);
  }
}
