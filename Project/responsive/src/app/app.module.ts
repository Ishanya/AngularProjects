import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { SignupButtonComponent } from './signup-button/signup-button.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupButtonComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
