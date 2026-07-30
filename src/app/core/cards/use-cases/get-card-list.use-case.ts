import { Observable } from "rxjs";

import { Inject, Injectable } from "@angular/core";
import { UseCase } from "@core/base/use-case";

import { CardEntity } from "../entities/card.entity";
import {
  CARD_REPOSITORY,
  CardRepository,
} from "../repositories/card.repository";

@Injectable({ providedIn: "root" })
export class GetCardListUseCase implements UseCase<void, CardEntity[]> {
  constructor(
    @Inject(CARD_REPOSITORY) protected cardRepository: CardRepository,
  ) {}

  execute(): Observable<CardEntity[]> {
    return this.cardRepository.getCards();
  }
}
