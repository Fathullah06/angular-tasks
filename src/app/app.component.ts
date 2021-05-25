import {
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  OnInit,
  ViewContainerRef
}
  from '@angular/core';
import { Router } from '@angular/router';

interface Links {
  name: string,
  action(a: MouseEvent): void
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-tasks';
  public links: Links[] = [];
  private routeOneComponentRef!: ComponentRef<any>;
  private routeTwoComponentRef!: ComponentRef<any>;
  private routeFiveComponentRef!: ComponentRef<any>;


  public constructor(
    private vcRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private router: Router
  ) { }

  public ngOnInit(): void {
    this.loadSupportData();
  }

  private loadSupportData(): void {
    this.links = [
      {
        name: 'Route 1',
        action: this.route1.bind(this)
      },
      {
        name: 'Route 2',
        action: this.route2.bind(this)
      },
      {
        name: 'Route 3',
        action: this.route3.bind(this)
      },
      {
        name: 'Route 4',
        action: this.route4.bind(this)
      },
      {
        name: 'Route 5',
        action: this.route5.bind(this)
      },
      {
        name: 'Route 6',
        action: this.route6.bind(this)
      }
    ]
  }

  private route1(event: MouseEvent): void {
    event.preventDefault();
    this.router.navigate(['route-1']);
  }

  private route2(event: MouseEvent): void {
    event.preventDefault();
    this.router.navigate(['route-2']);
  }

  private route3(event: MouseEvent): void {
    event.preventDefault();
    this.router.navigate(['route-3']);
  }

  private route4(event: MouseEvent): void {
    event.preventDefault();
    this.router.navigate(['route-4']);
  }

  private route5(event: MouseEvent): void {
    event.preventDefault();
    this.router.navigate(['route-5']);
  }

  private route6(event: MouseEvent): void {
    event.preventDefault();
    this.router.navigate(['route-6']);
  }

}
