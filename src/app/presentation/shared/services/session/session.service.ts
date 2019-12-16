import { Observable } from 'rxjs';

import { Inject, Injectable } from '@angular/core';
import {
  NICKNAME_REPOSITORY, NicknameRepository
} from '@core/nickname/repositories/nickname.repository';
import { GetNicknameUseCase } from '@core/nickname/use-cases/get-nickname.use-case';
import { SetNicknameUseCase } from '@core/nickname/use-cases/set-nickname.use-case';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private getNicknameUseCase: GetNicknameUseCase;
  private setNicknameUseCase: SetNicknameUseCase;

  constructor(
    @Inject(NICKNAME_REPOSITORY) protected nicknameRepository: NicknameRepository
  ) {
    this.getNicknameUseCase = new GetNicknameUseCase(nicknameRepository);
    this.setNicknameUseCase = new SetNicknameUseCase(nicknameRepository);
  }

  setNickname(nickname: string): Observable<any> {
    return this.setNicknameUseCase.execute(nickname);
  }

  getNickname(): Promise<string> {
    return this.getNicknameUseCase.execute();
  }
}
