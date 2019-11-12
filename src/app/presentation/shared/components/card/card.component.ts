import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  @Input() public isFlip: boolean;
  @Input() public isDisabled: boolean;

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
  }
}
