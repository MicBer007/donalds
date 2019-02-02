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

  amountOfCardsDealt: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 7, 6, 5, 4, 3, 2, 1]

  players: Player[];

  roundNumber = 0;

  trumpCard: Card;
  
  constructor(private deckService: DeckService) { 

  }

  prepareNewRound(): void{

    this.deck = this.deckService.createDeck();

    this.deckService.shuffle(this.deck);

    this.players.forEach((player) => {

      player.cardsInHand = [];

    });

  }

  start(numberOfPlayers: number = 0, shouldStartNewRound = true): void {
    console.log('Game Started');
    this.players = [];
    const newDeck = this.deckService.createDeck();
    this.deck = this.deckService.shuffle(newDeck);

    for (let index = 0; index < numberOfPlayers; index++) {
      this.players.push(new Player());
    }

    if(shouldStartNewRound == true) {

      this.startNewRound();

    }


  }

  private deal(): void {

    this.players.forEach(player => {
      const cardToDeal = this.deckService.takeCardFromDeck(this.deck);
      player.cardsInHand.push(cardToDeal);
    });

  }

  private getTrumpCard(): void {

    this.trumpCard = this.deck.cards.shift();

  }

  startNewRound(): void {

    this.roundNumber++;

    console.log(`Round ${this.roundNumber}`);

    this.prepareNewRound();

    for(let i = 0; i < this.amountOfCardsDealt[this.roundNumber-1]; i++) {

      this.deal();

    }

    this.getTrumpCard();

  }

}
