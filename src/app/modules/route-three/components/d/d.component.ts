import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-d',
  templateUrl: './d.component.html',
  styleUrls: ['./d.component.scss']
})
export class DComponent implements OnInit {

  @Input()
  public startCount: number = 0;
  @Input()
  public pauseCount: number = 0;
  constructor() { }

  ngOnInit() {
  }

}
