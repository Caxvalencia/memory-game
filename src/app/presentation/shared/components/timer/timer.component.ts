import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnDestroy {

  public seconds = 0;

  public isStopped: boolean;

  private interval: any;

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  public start() {
    this.isStopped = false;
    this.interval = setInterval(() => this.seconds++, 1000);
  }

  public stop() {
    this.isStopped = true;
    clearInterval(this.interval);
  }

  public startFrom(seconds: number) {
    this.seconds = seconds;
    this.start();
  }
}
