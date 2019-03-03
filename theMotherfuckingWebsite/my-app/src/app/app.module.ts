import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {Hello} from './hello/hello.component'; 

import { AppComponent } from './app.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    Hello
  ],
  imports: [
    BrowserModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
