import { Component } from '@angular/core';
import { DeckService } from './services/deck.service';
import { Deck } from './model/Deck';
import { Player } from './model/Player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trump-game';

  deck: Deck;

  hasDuplicates: boolean;

  player: Player = new Player();

  constructor(private deckService: DeckService) {

    this.deck = this.deckService.createDeck();

    this.deckService.shuffle(this.deck);

    this.deckService.dealCardToPlayer(this.player, this.deck);

    this.hasDuplicates = this.deck.cards.some((card, index) => this.deck.cards.indexOf(card) != index);

  }



}
