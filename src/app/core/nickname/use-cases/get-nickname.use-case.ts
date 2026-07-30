import { Inject, Injectable } from "@angular/core";
import { UseCase } from "../../base/use-case";
import {
  NICKNAME_REPOSITORY,
  NicknameRepository,
} from "../repositories/nickname.repository";

@Injectable({ providedIn: "root" })
export class GetNicknameUseCase implements UseCase<void, string> {
  protected nicknameRepository: NicknameRepository;

  constructor(
    @Inject(NICKNAME_REPOSITORY) nicknameRepository: NicknameRepository,
  ) {
    this.nicknameRepository = nicknameRepository;
  }

  execute(): Promise<string> {
    return this.nicknameRepository.getNickname();
  }
}
