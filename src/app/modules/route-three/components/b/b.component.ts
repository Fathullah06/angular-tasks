import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.scss']
})
export class BComponent implements OnInit {
  public timer: number = 0;
  public isStarted: boolean = false;
  private pausedTime: number = 0;
  @Input()
  public set pausedAt(value: number) {
    this.pausedTime = value;
  }
  @Output()
  public inputChange: EventEmitter<number> =
    new EventEmitter<number>();
  @Output()
  public startStopChange: EventEmitter<boolean> =
    new EventEmitter<boolean>();
  @Output()
  public resetChange: EventEmitter<boolean> =
    new EventEmitter<boolean>();
  public pausedList: number[] = [];
  constructor() { }

  ngOnInit() {
  }

  public startStopTimer(): void {
    this.isStarted = !this.isStarted;
    if (!this.isStarted) {
      this.pausedList.push(this.pausedTime);
    }
    this.startStopChange.emit(this.isStarted);
  }

  public reset(): void {
    this.timer = 0;
    this.isStarted = false;
    this.pausedTime = 0;
    this.pausedList = [];
    this.resetChange.emit();

  }

}
