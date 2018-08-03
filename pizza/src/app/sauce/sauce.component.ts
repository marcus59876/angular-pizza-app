import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sauce',
  templateUrl: './sauce.component.html',
  styleUrls: ['./sauce.component.css']
})
export class SauceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() typeSauce:string;
  
}
