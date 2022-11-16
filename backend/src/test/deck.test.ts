import Deck from "../Model/DeckModel";
import type {MatcherFunction} from 'expect';
import {expect, jest, test} from '@jest/globals';


let deck: Deck;

describe('test for deck model',()=>{

  test("expect been create a deck", () => {
    expect(Deck.create_a_deck()).toStrictEqual(new Deck());
  });
  
  test("expect deck has been shuffled", () => {
    deck = Deck.create_a_deck();
    expect(deck.shuffleDeck().deck).not.toBe(Deck.create_a_deck().deck);
  });
  
  test("expect deck for player has been created", () => {
    deck = Deck.create_a_deck();
    console.log(deck.deck)
    for(let j=0;j<=1000;j++){

      for (let i = 0; i <= 9; i++) {

        deck.create_deck_for_level(i);
          deck.deck.forEach(element =>{
            let suite= element[0];
            let value= Number(element.slice(1))
            expect(element).not.toBe(null)
            expect(element.length).toBe(3)
            expect(suite === 'C' || suite ==='D' || suite === 'H' || suite ==='S').toBeTruthy();
            expect(value).toBeLessThanOrEqual(13)
            expect(value).toBeGreaterThanOrEqual(1)
          })
          expect(deck.deck.length).toBe(52);
          
      }

    }

  });
  

})

