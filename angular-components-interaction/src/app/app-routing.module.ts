import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { Random1Component } from './random1/random1.component';
import { Random2Component } from './random2/random2.component';

const routes: Routes = [
  {
    path: 'input',
    component: ParentComponent
  },
  {
    path: 'share-via-service-random-1',
    component: Random1Component
  },
  {
    path: 'share-via-service-random-2',
    component: Random2Component
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
