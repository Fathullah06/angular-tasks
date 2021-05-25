import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteOneComponent } from './route-one.component';
import { RouteOneRoutingModule } from './route-one.routing';

@NgModule({
  imports: [
    CommonModule,
    RouteOneRoutingModule
  ],
  declarations: [RouteOneComponent]
})
export class RouteOneModule { }
