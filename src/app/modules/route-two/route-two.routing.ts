import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteTwoComponent } from './route-two.component';

const routes: Routes = [
  { path: '', component: RouteTwoComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouteTwoRoutingModule {}
