import { NicknameRepository } from '../repositories/nickname.repository';
import { UseCase } from '../../base/use-case';

export class GetNicknameUseCase implements UseCase<void, string> {

  protected nicknameRepository: NicknameRepository;

  constructor(nicknameRepository: NicknameRepository) {
    this.nicknameRepository = nicknameRepository;
  }

  execute(): Promise<string> {
    return this.nicknameRepository.getNickname();
  }
}
