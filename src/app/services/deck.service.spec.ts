import { TestBed } from '@angular/core/testing';

import { DeckService } from './deck.service';
import { Player } from '../model/Player';

describe('DeckService', () => {

  beforeEach(() => TestBed.configureTestingModule({}));

  it("should create a deck with 52 cards", () => {

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

  it("should not have any duplicates", () => {

    const deckService = TestBed.get(DeckService);

    const deck = deckService.createDeck();

    const hasDuplicates = deck.cards.some((card, index) => deck.cards.indexOf(card) != index);

    expect(hasDuplicates).toBe(false);

  });

  it("should shuffle successfully", () => {

    const deckService = TestBed.get(DeckService);

    let newDeck = deckService.createDeck();

    deckService.shuffle(newDeck);

    expect(newDeck.isShuffled).toBe(true);

  });

  it('should deal a random card to a player', () => {

    const deckService = TestBed.get(DeckService);

    const deck = deckService.createDeck();

    const player = new Player();

    deckService.dealCardToPlayer(player, deck);

    expect(player.cardsInHand.length).toBe(1);

  })

});
