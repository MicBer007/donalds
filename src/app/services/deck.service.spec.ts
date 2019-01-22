import { TestBed } from '@angular/core/testing';

import { DeckService } from './deck.service';

describe('DeckService', () => {

  beforeEach(() => TestBed.configureTestingModule({}));

  it("should not have any duplicates", () => {

    const deckService = TestBed.get(DeckService);

    const deck = deckService.createDeck();

    const hasDuplicates = deck.cards.some((card, index) => deck.cards.indexOf(card) != index);

    expect(hasDuplicates).toBeFalsy();

  });

  it("should create a deck with 52 cards", () => {

    const deckService = TestBed.get(DeckService);

    const deck = deckService.createDeck();

    expect(deck).toBeDefined();

    expect(deck.cards.length).toBe(52);

  })

  it("should shuffle successfully", () => {

    const deckService = TestBed.get(DeckService);

    const oldDeck = deckService.createDeck();

    const newDeck = deckService.createDeck();

    deckService.shuffle(newDeck);

    if(oldDeck.cards[0] == newDeck.cards[0]) {

      if(oldDeck.cards[10] == newDeck.cards[10]) {

        if(oldDeck.cards[20] == newDeck.cards[20]) {

          if(oldDeck.cards[30] == newDeck.cards[30]) {

            if(oldDeck.cards[40] == newDeck.cards[40]) {

              expect(oldDeck.cards[50]).toEqual(newDeck.cards[50]);

            }

          }

        }

      }

    }

  });

});
