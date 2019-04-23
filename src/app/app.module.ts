import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Ng2SearchPipeModule} from 'ng2-search-filter';
import { SidebarModule } from 'ng-sidebar';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Crud1Component } from './crud1/crud1.component';

@NgModule({
  declarations: [
    AppComponent,
   
    Crud1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    SidebarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
