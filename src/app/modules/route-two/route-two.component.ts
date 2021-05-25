import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';

interface Product {
  name: string,
  price: number
}

const enum PriceFilter {
  HIGH = 'high',
  LOW = 'low',
  DEFAULT = 'default'
}
@Component({
  selector: 'app-route-two',
  templateUrl: './route-two.component.html',
  styleUrls: ['./route-two.component.scss']
})
export class RouteTwoComponent implements OnInit {
  public products: Product[] = [];
  public selected: string = PriceFilter.DEFAULT;
  constructor(private elementRef: ElementRef) { }

  public ngOnInit(): void {
    for(let i=0; i<40; i++) {
      const product: Product = {
        name: 'test' + i,
        price: i*10
      };
      this.products.push(product);
    }
  }

  public gridBtn(): void {
    const productSelector: any = this.elementRef.nativeElement.querySelector('.products');
    productSelector?.classList.remove('products-list')
  }

  public listBtn(): void {
    const productSelector: any = this.elementRef.nativeElement.querySelector('.products');
    productSelector?.classList.add('products-list')
  }

  public onChange(): void {
    if (this.selected === PriceFilter.HIGH) {
      this.products.sort((a, b) => {
        return (a.price > b.price) ? 1 : (a.price < b.price) ? -1 : 0;
      })
    } else {
      this.products.sort((b, a) => {
        return (a.price > b.price) ? 1 : (a.price < b.price) ? -1 : 0;
      })
    }
  }

}
