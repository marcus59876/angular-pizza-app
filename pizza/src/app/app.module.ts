import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { OuterCrustComponent } from './outer-crust/outer-crust.component';
import { MenuComponent } from './menu/menu.component';
import { SauceComponent } from './sauce/sauce.component';
import { CheeseComponent } from './cheese/cheese.component';
import { PepperoniComponent } from './pepperoni/pepperoni.component';
import { OlivesComponent } from './olives/olives.component';

@NgModule({
  declarations: [
    AppComponent,
    OuterCrustComponent,
    MenuComponent,
    SauceComponent,
    CheeseComponent,
    PepperoniComponent,
    OlivesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
