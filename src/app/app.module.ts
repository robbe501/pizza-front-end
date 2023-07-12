import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddPizzaComponent } from './add-pizza/add-pizza/add-pizza.component';
import { PizzaComponent } from './pizza/pizza/pizza.component';
import { FirstLetterUpperCasePipe } from './pipes/first-letter-upper-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AddPizzaComponent,
    PizzaComponent,
    FirstLetterUpperCasePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
