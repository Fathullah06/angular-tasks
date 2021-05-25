import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'route-1',
    pathMatch: 'full',
    loadChildren: (): Promise<any> =>
    import('./modules/route-one/route-one.module').then(
      (m: any): any => m.RouteOneModule
    ),
  },
  {
    path: 'route-2',
    pathMatch: 'full',
    loadChildren: (): Promise<any> =>
    import('./modules/route-two/route-two.module').then(
      (m: any): any => m.RouteTwoModule
    ),
  },
  {
    path: 'route-3',
    pathMatch: 'full',
    loadChildren: (): Promise<any> =>
    import('./modules/route-three/route-three.module').then(
      (m: any): any => m.RouteThreeModule
    ),
  },
  {
    path: 'route-4',
    pathMatch: 'full',
    loadChildren: (): Promise<any> =>
    import('./modules/route-four/route-four.module').then(
      (m: any): any => m.RouteFourModule
    ),
  },
  {
    path: 'route-5',
    pathMatch: 'full',
    loadChildren: (): Promise<any> =>
    import('./modules/route-five/route-five.module').then(
      (m: any): any => m.RouteFiveModule
    ),
  },
  {
    path: 'route-6',
    pathMatch: 'full',
    loadChildren: (): Promise<any> =>
    import('./modules/route-six/route-six.module').then(
      (m: any): any => m.RouteSixModule
    ),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
