import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import {AddMuseumComponent} from './add-museum/add-museum.component';
import { AppComponent } from './app.component';
import {MuseumService} from './services/openmuseum.service'
import { SingleMuseumComponent } from './single-museum/single-museum.component';
import { IndexComponent } from './index/index.component';


const appRoutes:Routes = [
  { path: 'add', component: AddMuseumComponent },
  { path: 'singleMuseum', component: SingleMuseumComponent },
  { path: '', component: IndexComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    SingleMuseumComponent,
    IndexComponent,
    AddMuseumComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MuseumService],
  bootstrap: [AppComponent]
})
export class AppModule { }
