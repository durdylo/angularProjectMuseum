import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-single-museum',
  templateUrl: './single-museum.component.html',
  styleUrls: ['./single-museum.component.css']
})

export class SingleMuseumComponent implements OnInit {

  @Input()name:string;
  @Input()opening:string;
  @Input()zip:string;
  @Input()city:string;
  @Input()telephone:string;
  @Input()adress:string;
  @Input()website:string;



  constructor() { }

  ngOnInit() {
  }

}
