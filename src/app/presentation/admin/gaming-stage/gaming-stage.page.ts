import { Component, OnInit, ViewChild } from '@angular/core';
import { CardModel } from '@data/repositories/cards/card.model';
import { CardService } from '@shared/services/card.service';
import { GamingStageService } from '@shared/services/gaming-stage/gaming-stage.service';
import { SessionService } from '@shared/services/session/session.service';
import { TimerComponent } from '../../shared/components/timer/timer.component';

@Component({
  selector: 'app-gaming-stage',
  templateUrl: './gaming-stage.page.html',
  styleUrls: ['./gaming-stage.page.scss'],
})
export class GamingStagePage implements OnInit {

  @ViewChild('timerComponent', { static: true })
  timerComponent: TimerComponent;

  public cards: CardModel[] = [];

  public tries = 0;

  public finished = false;

  public nickname = '';

  protected selectedCards: CardModel[] = [];

  constructor(
    public sessionService: SessionService,
    private cardService: CardService,
    private gamingStageService: GamingStageService
  ) { }

  ngOnInit() {
    this.restartGame();
  }

  async restartGame() {
    this.getNickname();
    this.timerComponent.startFrom(0);

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

  async getNickname() {
    this.nickname = await this.sessionService.getNickname();
  }

  public togglePlayTimer() {
    if (this.timerComponent.isStopped) {
      this.timerComponent.start();

      return;
    }

    this.timerComponent.stop();
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
