export class Card {

    suite: string;

    rank: string;

    inDeck = true;

    constructor(suite: string = null, rank: string = null) {

        this.suite = suite;

        this.rank = rank;

        this.inDeck = true;

    }

}
