import { CardEntity } from '@core/cards/entities/card.entity';

export class CardModel {

    public isFlip: boolean;

    public isDisabled: boolean;

    private id: number;

    private value: any;

    constructor(id: number, value: any, isFlip = false, isDisabled = false) {
        this.id = id;
        this.isFlip = isFlip;
        this.value = value;
        this.isDisabled = isDisabled;
    }

    static from(cardEntity: CardEntity) {
        return new CardModel(
            cardEntity.id,
            cardEntity.value
        );
    }

    public getId() { return this.id; }

    public getValue() { return this.value; }

    public disable() {
        this.isDisabled = true;
    }
}
