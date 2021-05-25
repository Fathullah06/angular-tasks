import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouteThreeComponent } from './route-three.component';
import { AComponent, BComponent, CComponent, DComponent } from './components';
import { RouteThreeRoutingModule } from './route-three.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouteThreeRoutingModule
  ],
  declarations: [
    RouteThreeComponent,
    AComponent,
    BComponent,
    CComponent,
    DComponent
  ]
})
export class RouteThreeModule { }
