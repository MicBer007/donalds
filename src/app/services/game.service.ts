import { Injectable } from '@angular/core';
import { Deck } from '../model/Deck';
import { DeckService } from './deck.service';
import { Player } from '../model/Player';
import { Card } from '../model/Card';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  deck: Deck;

  players: Player[];

  roundNumber = 0;

  trumpCard: Card;
  
  constructor(private deckService: DeckService) { }

  prepareNewRound(): void{

    this.deck = this.deckService.createDeck();

    this.deckService.shuffle(this.deck);

    this.players.forEach((player) => {

      player.cardsInHand = [];

    });

  }

    start(numberOfPlayers: number = 0): void {
      console.log('Game Started');
      this.players = [];
      const newDeck = this.deckService.createDeck();
      this.deck = this.deckService.shuffle(newDeck);
      for (let index = 0; index < numberOfPlayers; index++) {
        this.players.push(new Player());
      }
    }

    private deal(): void {
      this.roundNumber++;
      console.log(`Deal round ${this.roundNumber}`);
      this.players.forEach(player => {
        const cardToDeal = this.deckService.takeCardFromDeck(this.deck);
        player.cardsInHand.push(cardToDeal);
      });

    }

    private getTrumpCard(): void {

      this.trumpCard = this.deck.cards.shift();

    }

    startNewRound(): void {

      this.deal();

      this.getTrumpCard();

    }

}
