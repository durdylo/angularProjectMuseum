import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import {AddMuseumComponent} from './add-museum/add-museum.component';
import { AppComponent } from './app.component';
import {MuseumService} from './services/openmuseum.service'
import { SingleMuseumComponent } from './single-museum/single-museum.component';
import { IndexComponent } from './index/index.component';
import { MuseumDetailComponent } from './museum-detail/museum-detail.component';


const appRoutes:Routes = [
  { path: 'add', component: AddMuseumComponent },
  { path: 'singleMusuem', component: SingleMuseumComponent },
  { path: 'singleMusuem/:reference', component: MuseumDetailComponent },

  { path: '', component: IndexComponent },

]
@NgModule({
  declarations: [
    AppComponent,
    SingleMuseumComponent,
    IndexComponent,
    AddMuseumComponent,
    MuseumDetailComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MuseumService],
  bootstrap: [AppComponent]
})
export class AppModule { }
