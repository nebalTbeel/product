import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 title:string ="my home page";
 btnclick(){

  alert ('add button');
  this.title = "hello to home page"
 }
  constructor() { }

  ngOnInit() {
  }

}
