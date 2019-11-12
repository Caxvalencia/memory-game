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
    if (this.selectedCards.length < 2) {
      this.selectedCards.push(card);

      return;
    }

    if (this.areCardEquals()) {
      this.disableSelectedCards();
    }

    this.flipSelectedCards();
    this.selectedCards = [];
  }

  private disableSelectedCards() {
    this.selectedCards[0].disable();
    this.selectedCards[1].disable();
  }

  private flipSelectedCards() {
    this.selectedCards[0].isFlip = true;
    this.selectedCards[1].isFlip = true;
  }

  private areCardEquals() {
    return this.selectedCards[0].getId() === this.selectedCards[1].getId();
  }
}
