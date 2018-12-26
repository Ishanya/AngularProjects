import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EntrObjComponent } from './entr-obj/entr-obj.component';
import { PrntObjComponent } from './prnt-obj/prnt-obj.component';

@NgModule({
  declarations: [
    AppComponent,
    EntrObjComponent,
    PrntObjComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
