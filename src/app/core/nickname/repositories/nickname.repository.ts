import { Observable } from 'rxjs';

export const NICKNAME_REPOSITORY = 'NicknameRepository';

export interface NicknameRepository {

  getNickname(): Promise<string>;

  setNickname(nickname: string): Observable<any>;
}
