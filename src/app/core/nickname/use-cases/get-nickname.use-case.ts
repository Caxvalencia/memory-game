import { Observable } from 'rxjs';

import { Inject } from '@angular/core';

import { NICKNAME_REPOSITORY, NicknameRepository } from '../repositories/nickname.repository';

export class GetNicknameUseCase {

  constructor(@Inject(NICKNAME_REPOSITORY) protected nicknameRepository: NicknameRepository) { }

  execute(): Observable<any> {
    return this.nicknameRepository.getNickname();
  }
}
