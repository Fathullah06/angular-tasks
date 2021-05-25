import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteFourComponent } from './route-four.component';
import { RouteFourRoutingModule } from './route-four.routing';

@NgModule({
  imports: [
    CommonModule,
    RouteFourRoutingModule
  ],
  declarations: [RouteFourComponent]
})
export class RouteFourModule { }
