import { Injectable } from '@angular/core';
import { CardEntity } from '@core/cards/entities/card.entity';
import { CardModel } from '@data/repositories/cards/card.model';

@Injectable({
  providedIn: 'root'
})
export class GamingStageService {

  async prepare(cardList: CardEntity[]): Promise<CardModel[]> {
    const preparedListLength = cardList.length * 2;
    const preparedList: CardModel[] = new Array(preparedListLength);
    const randomIndexes = this.getRandomIndexes(preparedListLength);

    randomIndexes.forEach((randomIndex, index) => {
      preparedList[index] = CardModel.from(cardList[randomIndex]);
    });

    return preparedList;
  }

  private randomArray(length: number): number[] {
    const nums = [...new Array(length)].map((value, idx) => idx + 1);
    const randomArray = [...new Array(length)];

    let index = length;
    let randomIndex = 0;

    while (index--) {
      randomIndex = Math.floor(Math.random() * (index + 1));
      randomArray[index] = nums.splice(randomIndex, 1)[0];
    }

    return randomArray;
  }

  private getRandomIndexes(length: number): number[] {
    return this.randomArray(length).map(num => num % (length / 2));
  }
}
