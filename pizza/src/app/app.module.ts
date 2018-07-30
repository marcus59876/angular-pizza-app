import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OuterCrustComponent } from './outer-crust/outer-crust.component';

@NgModule({
  declarations: [
    AppComponent,
    OuterCrustComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
