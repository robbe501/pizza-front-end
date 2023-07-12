import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddPizzaComponent } from './add-pizza/add-pizza/add-pizza.component';
import { PizzaComponent } from './pizza/pizza/pizza.component';
import { FirstLetterUpperCasePipe } from './pipes/first-letter-upper-case.pipe';
import { NgbModule, NgbToastModule, NgbToast} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AddPizzaComponent,
    PizzaComponent,
    FirstLetterUpperCasePipe
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgbToastModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
