import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SingleMuseumComponent } from './single-museum/single-museum.component';

@NgModule({
  declarations: [
    AppComponent,
    SingleMuseumComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
