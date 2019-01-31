import { TestBed } from '@angular/core/testing';
import { GameService } from './game.service';

describe('GameService', () => {

  describe('When game is started', () => {

    beforeEach(() => TestBed.configureTestingModule({}));

    it('should have a shuffled deck', () => {
      const gameService = TestBed.get(GameService);

      gameService.start();

      expect(gameService.deck).toBeDefined();
      expect(gameService.deck.isShuffled).toBeTruthy();
    });

    it('with 2 players, it should have 2 players', () => {
      const gameService = TestBed.get(GameService);

      gameService.start(2);

      expect(gameService.players.length).toBe(2);
    });


    it('2 player game, first time startNewRound(), the round should be 1 ', () => {
      const gameService = TestBed.get(GameService);

      gameService.start(2);
      gameService.startNewRound();

      expect(gameService.roundNumber).toBe(1);
    });

    it('2 player game, first time deal, the deck should have 50 cards', () => {
      const gameService = TestBed.get(GameService);

      gameService.start(2);
      gameService.deal();

      expect(gameService.deck.cards.length).toBe(50);
    });

    it('2 player game, first time deal, every player should have the top card from deck - only 1', () => {

      const gameService = TestBed.get(GameService);
      gameService.start(2);

      const player1Card = gameService.deck.cards[0];
      const player2Card = gameService.deck.cards[1];

      gameService.deal();

      expect(gameService.players[0].cardsInHand.length).toBe(1);
      expect(gameService.players[1].cardsInHand.length).toBe(1);
      expect(gameService.players[0].cardsInHand[0]).toEqual(player1Card);
      expect(gameService.players[1].cardsInHand[0]).toEqual(player2Card);

    });

    it('2 player game, after first time deal, top card should be trump card', () => {

      const gameService = TestBed.get(GameService);

      gameService.start(2);

      const trumpCard = gameService.deck.cards[2];

      gameService.deal();

      gameService.getTrumpCard();

      expect(gameService.trumpCard).toBe(trumpCard);

    });

    it('in two player game, when start new round button has been pressed, is the deck new', () => {

      const gameService = TestBed.get(GameService);

      gameService.start(2);

      gameService.startNewRound();

      gameService.prepareNewRound();

      expect(gameService.deck.cards.length).toBe(52);

      expect(gameService.deck.isShuffled).toBe(true);

      expect(gameService.players[0].cardsInHand.length).toBe(0);

      expect(gameService.players[1].cardsInHand.length).toBe(0);

    });

    it('should deal 2 cards on the second round', () => {

      const gameService = TestBed.get(GameService);

      gameService.start(2);

      gameService.startNewRound();

      gameService.startNewRound();

      expect(gameService.players[0].cardsInHand.length).toBe(2);

      expect(gameService.players[1].cardsInHand.length).toBe(2);

    });

  });

});
