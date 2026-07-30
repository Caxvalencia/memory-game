import { Injectable } from "@angular/core";
import { firstValueFrom, Observable, of } from "rxjs";

import { NicknameRepository } from "@app/core/nickname/repositories/nickname.repository";

@Injectable({ providedIn: "root" })
export class FakeNicknameRepository implements NicknameRepository {
  getNickname(): Promise<string> {
    return firstValueFrom(of("Con centramesta"));
  }

  setNickname(nickname: string): Observable<any> {
    return of("nick-error" !== nickname);
  }
}
