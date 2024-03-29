import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteOneComponent } from './route-one.component';

const routes: Routes = [
  { path: '', component: RouteOneComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouteOneRoutingModule {}
