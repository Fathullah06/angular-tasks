import { Component, OnInit } from '@angular/core';

interface Student {
  name: string,
  class: number,
  section: string,
  sub1: number,
  sub2: number,
  sub3: number,
}

const enum SortOrder {
  ASC= 'asc',
  DESC = 'desc'
}
@Component({
  selector: 'app-route-five',
  templateUrl: './route-five.component.html',
  styleUrls: ['./route-five.component.scss']
})
export class RouteFiveComponent implements OnInit {

  public students: Student[] = [];
  public sortOrder: string = SortOrder.ASC;

  constructor() { }

  ngOnInit() {
    this.loadStudents();
  }

  private loadStudents(): void {
    this.students =
      [
        {
          name: 'test1',
          class: 3,
          section: 'D',
          sub1: 70,
          sub2: 80,
          sub3: 88
        },
        {
          name: 'test2',
          class: 4,
          section: 'A',
          sub1: 74,
          sub2: 82,
          sub3: 81
        },
        {
          name: 'test3',
          class: 6,
          section: 'C',
          sub1: 34,
          sub2: 90,
          sub3: 89
        }
      ]
  }

  public sort(field: string): void {
    if (this.sortOrder === SortOrder.ASC) {
      this.sortOrder = SortOrder.DESC;
      this.students.sort(this.dynamicSort(field, this.sortOrder));
    } else {
      this.sortOrder = SortOrder.ASC;
      this.students.sort(this.dynamicSort(field, this.sortOrder));
    }
  }

  dynamicSort(property: string, order: string) {
    var sort_order = 1;
    if (order === "desc") {
      sort_order = -1;
    }
    return function (a: any, b: any) {
      if (a[property] < b[property]) {
        return -1 * sort_order;
      } else if (a[property] > b[property]) {
        return 1 * sort_order;
      } else {
        return 0 * sort_order;
      }
    }
  }

}