import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouteTwoComponent } from './route-two.component';
import { RouteTwoRoutingModule } from './route-two.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouteTwoRoutingModule
  ],
  declarations: [RouteTwoComponent]
})
export class RouteTwoModule { }
