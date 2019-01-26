import { Injectable } from '@angular/core';
import { Deck } from '../model/Deck';
import { Card } from '../model/Card';
import { Player } from '../model/Player';

@Injectable({
  providedIn: 'root'
})
export class DeckService {

  ranks: string[] = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];

  suites: string[] = ["♣", "♦", "♥", "♠"];

  hasDuplicates: boolean = false;

  constructor() { }

  shuffle(deck:Deck): Deck {

    let temp;
    let j;

    for (let i = 0; i < deck.maxAmountOfCards; i++) {

      j = Math.floor(Math.random() * deck.maxAmountOfCards);
      temp = deck.cards[i];
      deck.cards[i] = deck.cards[j];
      deck.cards[j] = temp;
    
    }

    this.hasDuplicates = deck.cards.some((card, index) => deck.cards.indexOf(card) != index);

    deck.isShuffled = true;

    return deck;

  }

  dealCardToPlayer(player: Player, deck: Deck){

    const card: Card = this.giveRandomCard(deck);

    card.inDeck = false;

    deck.cards[deck.cards.indexOf(card)].inDeck = false;

    player.cardsInHand.push(card);

  }

  private giveRandomCard(deck: Deck): Card {

    const card: Card = deck.cards[Math.floor(Math.random() * deck.maxAmountOfCards)];

    return card;

  }

  createDeck(): Deck {

    let deck:Deck = new Deck;

    for(let i = 0; i < this.ranks.length; i++) {

      for(let j = 0; j < this.suites.length; j++) {

        let place = i * this.suites.length + j;

        deck.cards[place] = { 
          suite: this.suites[j],
          rank: this.ranks[i]} as Card;
      }

    }

    return deck;

  }

}
