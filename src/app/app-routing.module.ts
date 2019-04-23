import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { Crud1Component} from './crud1/crud1.component';



const routes: Route [] = [
  
  {path: 'crud1', component:Crud1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
