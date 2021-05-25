import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteSixComponent } from './route-six.component';
import { RouteSixRoutingModule } from './route-six.routing';

@NgModule({
  imports: [
    CommonModule,
    RouteSixRoutingModule
  ],
  declarations: [RouteSixComponent]
})
export class RouteSixModule { }
