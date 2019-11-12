import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { GetNicknameUseCase } from '@core/nickname/use-cases/get-nickname.use-case';
import { SetNicknameUseCase } from '@core/nickname/use-cases/set-nickname.use-case';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(
    protected getNicknameUseCase: GetNicknameUseCase,
    protected setNicknameUseCase: SetNicknameUseCase
  ) {
  }

  setNickname(nickname: string): Observable<any> {
    return this.setNicknameUseCase.execute(nickname);
  }

  getNickname(): Promise<string> {
    return this.getNicknameUseCase.execute();
  }
}
