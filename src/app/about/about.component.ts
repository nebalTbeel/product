import { Component, OnInit, Input } from '@angular/core';
import { hasLifecycleHook } from '@angular/compiler/src/lifecycle_reflector';
import {ProductServiseService} from '../product-servise.service'
//import { link } from 'fs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private datadata :ProductServiseService) { }
  data = [
  ]
  counter = 0;
  isActive = false;


arraynew =this.datadata.data;

  addarray2(e){
let vall = e.target.value;
    this.data.push ({id :vall },{id : 15});
    e.target.value = "";
    
  
}
ngName = 'hello'; // give ngModel initial value


 toggle(){
this.isActive = !this.isActive;

 }
  addArray(val){

    this.data.push ({id :val });

   // this.counter++;
   console.log(this.ngName)
   }
  ngOnInit() {
  }

}
