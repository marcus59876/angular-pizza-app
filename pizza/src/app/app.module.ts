import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ThickOuterCrustComponent } from './thick-outer-crust/thick-outer-crust.component';
import { SauceComponent } from './sauce/sauce.component';
import { CheeseComponent } from './cheese/cheese.component';
import { PepperoniComponent } from './pepperoni/pepperoni.component';
import { OlivesComponent } from './olives/olives.component';
import { BaconComponent } from './bacon/bacon.component';
import { OnionsComponent } from './onions/onions.component';
import { GreenOnionsComponent } from './green-onions/green-onoins.component';
import { HamComponent } from './ham/ham.component';
import { ThinOuterCrustComponent } from './thin-outer-crust/thin-outer-crust.component';
import { PineappleComponent } from './pineapple/pineapple.component';
import { CrustService } from './crust.service';
import { SausageComponent } from './sausage/sausage.component';

@NgModule({
  declarations: [
    AppComponent,
    ThickOuterCrustComponent,
    SauceComponent,
    CheeseComponent,
    PepperoniComponent,
    OlivesComponent,
    BaconComponent,
    OnionsComponent,
    GreenOnionsComponent,
    HamComponent,
    ThinOuterCrustComponent,
    PineappleComponent,
    SausageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CrustService
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
