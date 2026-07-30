import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { UseCase } from "@core/base/use-case";

import {
  NICKNAME_REPOSITORY,
  NicknameRepository,
} from "../repositories/nickname.repository";

@Injectable({ providedIn: "root" })
export class SetNicknameUseCase implements UseCase<string, boolean> {
  constructor(
    @Inject(NICKNAME_REPOSITORY)
    protected nicknameRepository: NicknameRepository,
  ) {}

  execute(nickname: string): Observable<boolean> {
    return this.nicknameRepository.setNickname(nickname);
  }
}
