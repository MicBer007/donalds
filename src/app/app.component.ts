import { Component } from '@angular/core';
import { DeckService } from './services/deck.service';
import { Deck } from './model/Deck';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trump-game';

  deck: Deck;

  hasDuplicates: boolean;

  constructor(private deckService: DeckService) {

    this.deck = this.deckService.createDeck();

    this.deckService.shuffle(this.deck);

    this.hasDuplicates = deckService.hasDuplicates;

  }



}
