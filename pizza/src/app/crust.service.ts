import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrustService {

  constructor() { 
  }

  isThin(crust) {
    if (crust == true) return true;
    else return false;
  }

  isThick(crust){
    if (crust == true) return true;
    else return false;
  }

  hasCrust(thin,thick) {
    if (thin == true || thick == true) return false;
    else return true;
  }
}
