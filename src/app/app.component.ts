import { Component } from '@angular/core';
import { Pizza } from './interfaces/pizza';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pizze: Pizza[] = []

  riceviPizza(pizza: Pizza) {

    //this.pizze = [...this.pizze, pizza];
    this.pizze.push(pizza);
    console.log("Sono il padre: ", this.pizze);
  }


}
