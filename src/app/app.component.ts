import { Component,OnInit } from '@angular/core';
import {MuseumService} from './services/openmuseum.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'openmuseum';
  museums:any []
  ngOnInit() {
    this.museums=this.museumService.museums;
  }
  constructor(private museumService: MuseumService) { }
}
