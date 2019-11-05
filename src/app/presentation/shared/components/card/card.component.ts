import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  isFlip: boolean;

  constructor() { }

  ngOnInit() {
    this.isFlip = false;
  }

  toggleCard() {
    this.isFlip = !this.isFlip;
  }
}
