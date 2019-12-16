import { Observable } from 'rxjs';

import { UseCase } from '@core/base/use-case';

import { NicknameRepository } from '../repositories/nickname.repository';

export class SetNicknameUseCase implements UseCase<string, boolean> {

  constructor(protected nicknameRepository: NicknameRepository) { }

  execute(nickname: string): Observable<boolean> {
    return this.nicknameRepository.setNickname(nickname);
  }
}
