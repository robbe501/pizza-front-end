import { Component, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Pizza } from '../../interfaces/pizza';

@Component({
  selector: 'app-add-pizza',
  templateUrl: './add-pizza.component.html',
  styleUrls: ['./add-pizza.component.css']
})
export class AddPizzaComponent {

  @ViewChild('nomePizza')
  input!: ElementRef;

  @Output()
  mandaPizzaEvento = new EventEmitter<Pizza>()

  ingredientiDisponibili: string[] = ['pomodoro', 'mozzarella', 'salsiccia', 'prosciutto', 'funghi', 'basilico', 'origano', 'patate', 'alici', 'wurstel', 'verdure'].sort();

  ingredientiSelezionati: string[] = [];

  aggiungiIngrediente(target: EventTarget) {
    if(this.ingredientiSelezionati.length < 5) {
      let selezionato = (<HTMLSelectElement>target).value;
      this.ingredientiSelezionati = [...this.ingredientiSelezionati, selezionato].sort();

      const index = this.ingredientiDisponibili.indexOf(selezionato);

      if (index !== -1) {
        this.ingredientiDisponibili.splice(index, 1);
      }
    }
  }

  eliminaIngrediente(target: EventTarget){


    let ingredienteDaEliminare: string

    if((<HTMLButtonElement>target).value) {
      ingredienteDaEliminare = (<HTMLButtonElement>target).value
    }
    else {
      ingredienteDaEliminare = (<HTMLButtonElement>(<HTMLElement>target).parentElement).value
    }

    const index = this.ingredientiSelezionati.indexOf(ingredienteDaEliminare);

    if (index !== -1) {
      this.ingredientiSelezionati.splice(index, 1);
    }

    this.ingredientiDisponibili = [...this.ingredientiDisponibili, ingredienteDaEliminare].sort();
  }

  mandaPizza() {
    let nomePizza = (<HTMLInputElement>this.input.nativeElement).value
    if(nomePizza.trim() && this.ingredientiSelezionati.length > 0) {
      let pizzaDaInviare: Pizza = {
        nome: nomePizza,
        ingredienti: this.ingredientiSelezionati

      }
      this.mandaPizzaEvento.emit(pizzaDaInviare);
    }


  }

}
