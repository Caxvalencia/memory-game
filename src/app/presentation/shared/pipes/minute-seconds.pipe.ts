import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'minuteSeconds' })
export class MinuteSecondsPipe implements PipeTransform {

  transform(seconds: number): string {
    const minutes = Math.floor(seconds / 60);

    const minutesFormatted = minutes.toString().padStart(2, '0');
    const secondsFormatted = (seconds - minutes * 60).toString().padStart(2, '0');

    return `${minutesFormatted}:${secondsFormatted}`;
  }
}
