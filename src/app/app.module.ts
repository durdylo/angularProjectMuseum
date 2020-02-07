import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {MuseumService} from './services/openmuseum.service'
import { SingleMuseumComponent } from './single-museum/single-museum.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    SingleMuseumComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MuseumService],
  bootstrap: [AppComponent]
})
export class AppModule { }
