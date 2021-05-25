import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteFiveComponent } from './route-five.component';
import { RouteFiveRoutingModule } from './route-five.routing';

@NgModule({
  imports: [
    CommonModule,
    RouteFiveRoutingModule
  ],
  declarations: [RouteFiveComponent]
})
export class RouteFiveModule { }
