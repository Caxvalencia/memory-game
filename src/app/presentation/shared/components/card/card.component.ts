import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  @Input() public isFlip: boolean;
  @Output() isFlipChange = new EventEmitter<boolean>();

  @Input() public isDisabled: boolean;
  @Output() isDisabledChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
    this.isFlip = false;
    this.isDisabled = false;
  }

  toggleCard() {
    if (this.isDisabled) {
      return;
    }

    this.isFlip = !this.isFlip;
    this.isFlipChange.emit(this.isFlip);
  }
}
