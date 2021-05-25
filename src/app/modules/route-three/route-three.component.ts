import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { timer } from 'rxjs/internal/observable/timer';
import { scan, switchMap, takeWhile, tap } from 'rxjs/operators';

@Component({
  selector: 'app-route-three',
  templateUrl: './route-three.component.html',
  styleUrls: ['./route-three.component.scss']
})
export class RouteThreeComponent implements OnInit {
  public timer: number = 0;
  public timer$!: Observable<number>;
  public lastValue: number = 0;
  public logs: string[] = [];
  public startCount: number = 0;
  public pauseCount: number = 0;
  private firstStart: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  public startStopChange(isStarted: boolean): void {
    if (isStarted && this.firstStart) {
      this.firstStart = false;
      this.timer$ = timer(0, 1000).pipe(
        scan(acc => --acc, this.timer),
        takeWhile(x => x >= 0 && isStarted),
        tap(val => this.lastValue = val)
      );
    } else {
      this.timer$ = timer(0, 1000).pipe(
        scan(acc => --acc, this.lastValue),
        takeWhile(x => x >= 0 && isStarted),
        tap(val => this.lastValue = val)
      );
    }
    this.logs.push(`${isStarted ? 'Started at' : 'Paused at'} ${new Date().toUTCString()}`);
    isStarted ? this.startCount++ : this.pauseCount++;
  }

  public reset(): void {
    this.timer = 0;
    this.lastValue = 0;
    this.logs = [];
    this.startCount = 0;
    this.pauseCount = 0;
    this.firstStart = true;
    this.timer$ = of(0);
  }

}
