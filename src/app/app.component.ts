import { Component } from '@angular/core';
import { Pizza } from './interfaces/pizza';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pizze: Pizza[] = []

  pulsante = {
    show: false,
    autohide: true,
    colore: '#32a856',
    testoNotifica: ''
  }

  riceviPizza(pizza: Pizza) {
    this.pizze.push(pizza);
    this.pulsante.show = true;
    this.pulsante.colore = '#0d6efd';
    this.pulsante.testoNotifica = 'Pizza ' + pizza.nome + ' inserita con successo'
  }

  riceviPizzaDaEliminare(pizza: Pizza) {
    const index = this.pizze.indexOf(pizza);

    if (index !== -1) {
      this.pizze.splice(index, 1);
    }

    this.pulsante.show = true;
    this.pulsante.colore = '#c9130c';
    this.pulsante.testoNotifica = 'Pizza ' + pizza.nome + ' rimossa con successo'
  }

}
