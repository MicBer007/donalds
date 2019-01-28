import { TestBed } from '@angular/core/testing';

import { DeckService } from './deck.service';
import { Player } from '../model/Player';

describe('DeckService', () => {

  beforeEach(() => TestBed.configureTestingModule({}));

  it('should create a deck with 52 cards', () => {

    const deckService = TestBed.get(DeckService);

    const deck = deckService.createDeck();

    expect(deck).toBeDefined();

    expect(deck.cards.length).toBe(52);

  });

  it('a deck should start unshuffled', () => {

    const deckService = TestBed.get(DeckService);

    const deck = deckService.createDeck();

    expect(deck.isShuffled).toBe(false);

  });

  it('should not have any duplicates', () => {

    const deckService = TestBed.get(DeckService);

    const deck = deckService.createDeck();

    const hasDuplicates = deck.cards.some((card, index) => deck.cards.indexOf(card) !== index);  // THIS SHOULD NOT BE IN TESTS

    expect(hasDuplicates).toBe(false);

  });

  it('should shuffle successfully', () => {

    const deckService = TestBed.get(DeckService);

    const newDeck = deckService.createDeck();

    deckService.shuffle(newDeck);

    expect(newDeck.isShuffled).toBe(true);

  });

  it('should have only 51 cards when a card is taken', () => {

    const deckService = TestBed.get(DeckService);

    const deck = deckService.createDeck();

    deckService.takeCardFromDeck(deck);

    expect(deck.cards.length).toBe(51);
  });

  it('should take the first card in deck to be available to deal', () => {

    const deckService = TestBed.get(DeckService);

    const deck = deckService.createDeck();

    const cardSupposeToDeal = deck.cards[0];

    const cardToDeal = deckService.takeCardFromDeck(deck);

    expect(cardToDeal.suite + cardToDeal.rank).toEqual(cardSupposeToDeal.suite + cardSupposeToDeal.rank);

  });

});
