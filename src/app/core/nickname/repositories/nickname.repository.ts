import { Observable } from 'rxjs';

export const NICKNAME_REPOSITORY = 'NicknameRepository';

export interface NicknameRepository {

  getNickname(): Observable<any>;

  setNickname(nickname: string): Observable<any>;
}
