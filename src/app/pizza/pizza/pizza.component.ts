import { Component, Input, Output, EventEmitter, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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

  @Output()
  mandaPizzaDaEliminareEvento = new EventEmitter<Pizza>()


  visualizzaPizza() {
    console.log(this.pizza)
  }

  mandaPizzaDaEliminare() {
    this.mandaPizzaDaEliminareEvento.emit(this.pizza)
  }
}
