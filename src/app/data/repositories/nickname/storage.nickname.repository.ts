import { from, Observable } from 'rxjs';

import { NicknameRepository } from '@app/core/nickname/repositories/nickname.repository';
import { Storage } from '@ionic/storage';

const NICKNAME_KEY = 'nickname';

export class StorageNicknameRepository implements NicknameRepository {

  constructor(private storage: Storage) { }

  getNickname(): Promise<string> {
    return this.storage.get(NICKNAME_KEY);
  }

  setNickname(nickname: string): Observable<any> {
    return from(this.storage.set(NICKNAME_KEY, nickname));
  }
}
