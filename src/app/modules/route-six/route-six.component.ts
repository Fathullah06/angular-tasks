import { AfterViewInit, Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-route-six',
  templateUrl: './route-six.component.html',
  styleUrls: ['./route-six.component.scss']
})
export class RouteSixComponent implements AfterViewInit {

  @ViewChild("mainDiv") mainDiv!: ElementRef;
  private counter: number = 1;
  private lastScrollTop: number = 0;
  constructor(private renderer: Renderer2) { }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > this.lastScrollTop) {
      this.createRecaptchaContainer();
    }
    this.lastScrollTop = st <= 0 ? 0 : st;
  }


  ngAfterViewInit() {
    this.setInitialView();
  }

  private createRecaptchaContainer() {
    const div = this.renderer.createElement('div');
    const button = this.renderer.createElement('button');
    this.renderer.setAttribute(div, 'id', String(this.counter));
    this.renderer.setStyle(div, 'height', '200px');
    this.renderer.setStyle(div, 'width', '200px');
    this.renderer.setStyle(div, 'border', '2px solid red');
    this.renderer.setStyle(button, 'height', '50px');
    this.renderer.setStyle(button, 'width', '50px');
    this.renderer.appendChild(div, button);
    this.renderer.listen(button, 'click', this.handleClick.bind(this))
    this.renderer.appendChild(this.mainDiv.nativeElement, div);
    this.counter++;
  }

  handleClick(event: MouseEvent): void {
    const target: any = event.target;
    alert('clicked ' + target?.parentElement?.id);
  }
  private setInitialView(): void {
    for (let i = 1; i <= 5; i++) {
      this.createRecaptchaContainer();
    }
  }


}
