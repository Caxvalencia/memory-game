import { Observable } from 'rxjs';

import { Inject } from '@angular/core';
import { UseCase } from '@core/base/use-case';

import { NICKNAME_REPOSITORY, NicknameRepository } from '../repositories/nickname.repository';

export class SetNicknameUseCase implements UseCase<string, boolean> {

  constructor(@Inject(NICKNAME_REPOSITORY) protected nicknameRepository: NicknameRepository) { }

  execute(nickname: string): Observable<boolean> {
    return this.nicknameRepository.setNickname(nickname);
  }
}
