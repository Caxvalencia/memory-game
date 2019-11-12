import { Component, OnInit } from '@angular/core';
import { CardModel } from '@data/repositories/cards/card.model';
import { CardService } from '@shared/services/card.service';
import { GamingStageService } from '@shared/services/gaming-stage/gaming-stage.service';
import { SessionService } from '@shared/services/session/session.service';

@Component({
  selector: 'app-gaming-stage',
  templateUrl: './gaming-stage.page.html',
  styleUrls: ['./gaming-stage.page.scss'],
})
export class GamingStagePage implements OnInit {

  public cards: CardModel[] = [];

  public tries = 0;

  public finished = false;

  protected selectedCards: CardModel[] = [];

  constructor(
    public sessionService: SessionService,
    private cardService: CardService,
    private gamingStageService: GamingStageService
  ) { }

  async ngOnInit() {
    this.restartGame();
  }

  async restartGame() {
    const cardList = await this.cardService.getCardList().toPromise();

    this.cards = await this.gamingStageService.prepare(cardList);
    this.tries = 0;
    this.finished = false;
    this.selectedCards = [];
  }

  selectCard(card: CardModel) {
    console.log(card);

    if (card.isDisabled) {
      return;
    }

    card.disable();
    this.validateFinished();

    if (this.selectedCards.length < 2) {
      this.selectedCards.push(card);

      return;
    }

    if (!this.areCardEquals()) {
      this.enableSelectedCards();
      this.flipSelectedCards();
    }

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

  private validateFinished() {
    const hasEnable = this.cards.filter(card => !card.isDisabled);

    this.finished = hasEnable.length === 0;
  }
}
