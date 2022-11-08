import Deck from "../Model/DeckModel";

test('expect been create a deck', ()=>{

    expect(Deck.create_a_deck()).toStrictEqual(new Deck())
})

test('expect deck has been shuffled',()=>{
    let deck = Deck.create_a_deck();
    expect(deck.shuffleDeck().deck).not.toBe(Deck.create_a_deck().deck)

})

