import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnDestroy {

  public seconds = 0;

  public get isStopped() { return this.shouldStop; }

  private interval: any;

  private shouldStop: boolean;

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  public start() {
    this.shouldStop = false;

    this.interval = setInterval(() => {
      if (this.shouldStop) {
        clearInterval(this.interval);

        return;
      }

      this.seconds++;
    }, 1000);
  }

  public stop() {
    this.shouldStop = true;
  }

  public startFrom(seconds: number) {
    this.seconds = seconds;
    this.start();
  }
}
