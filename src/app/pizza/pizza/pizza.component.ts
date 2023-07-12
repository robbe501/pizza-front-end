import { Component, Input } from '@angular/core';
import { Pizza } from 'src/app/interfaces/pizza';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent {

  @Input()
  pizza: Pizza = {
    nome: "",
    ingredienti: []
  }

  visualizzaPizza() {
    console.log(this.pizza)
  }

}
