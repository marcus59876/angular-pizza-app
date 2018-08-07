import { Component } from '@angular/core';
import { CrustService } from './crust.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private crustService: CrustService) { 
  }

  message;
  crust:string;
  toppings = [];

  log(x) {
    console.log(x);
  }

  submit(x) {
    console.log(x.value);
    if (x.value.thickcrust) this.crust = " thick crust";
    else this.crust = " thin crust";
    if (x.value.sauce) this.toppings.push(" tomato sauce");
    if (x.value.pepperoni) this.toppings.push(" pepperonis");
    if (x.value.bacon) this.toppings.push(" bacon");
    if (x.value.ham) this.toppings.push(" ham");
    if (x.value.sausage) this.toppings.push(" sausage");
    if (x.value.cheese) this.toppings.push(" cheese");
    if (x.value.olives) this.toppings.push(" olives");  
    if (x.value.onions) this.toppings.push(" onions");
    if (x.value["green-onions"]) this.toppings.push(" green onions");    
    if (x.value.pineapple) this.toppings.push(" pineapple");
    else if (this.toppings.length == 0) this.toppings.push(" no toppings");

    this.message = "You want a" + this.crust +" pizza with" + this.toppings+".";
    if (this.toppings.length > 1) {
      let firstpart = this.message.slice(0, this.message.lastIndexOf(",")+1);
      let middlepart = " and";
      let lastpart = this.message.slice(this.message.lastIndexOf(",")+1, this.message.length);
      this.message = firstpart+middlepart+lastpart;
    }

    console.log(this.message);
    this.toppings = [];


  }

  isThin(crust) {
    if (this.crustService.isThin(crust)) return true;
    else return false;
  }

  isThick(crust){
    if (this.crustService.isThick(crust)) return true;
    else return false;
  }

  hasCrust(thin,thick) {
    if (this.crustService.hasCrust(thin,thick)) return true;
    else return false;
  }

  isRightSize(size) {
    if (size) return true;
    else return false;
  }
}
