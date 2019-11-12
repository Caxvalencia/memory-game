import { Component, OnInit } from '@angular/core';
import { CardModel } from '@data/repositories/cards/card.model';
import { CardService } from '@shared/services/card.service';
import { GamingStageService } from '@shared/services/gaming-stage/gaming-stage.service';

@Component({
  selector: 'app-gaming-stage',
  templateUrl: './gaming-stage.page.html',
  styleUrls: ['./gaming-stage.page.scss'],
})
export class GamingStagePage implements OnInit {

  public cards: CardModel[] = [];

  public tries = 0;

  protected selectedCards: CardModel[] = [];

  constructor(
    private cardService: CardService,
    private gamingStageService: GamingStageService
  ) { }

  async ngOnInit() {
    const cardList = await this.cardService.getCardList().toPromise();
    this.cards = await this.gamingStageService.prepare(cardList);
  }

  selectCard(card: CardModel) {
    console.log(card);

    if (card.isDisabled) {
      return;
    }

    if (this.selectedCards.length < 2) {
      card.disable();
      this.selectedCards.push(card);

      return;
    }

    if (!this.areCardEquals()) {
      this.enableSelectedCards();
      this.flipSelectedCards();
    }

    card.disable();
    this.selectedCards = [card];
    this.tries++;
  }

  private enableSelectedCards() {
    this.selectedCards[0].enable();
    this.selectedCards[1].enable();
  }

  private flipSelectedCards() {
    this.selectedCards[0].isFlip = false;
    this.selectedCards[1].isFlip = false;
  }

  private areCardEquals() {
    return this.selectedCards[0].getId() === this.selectedCards[1].getId();
  }
}
