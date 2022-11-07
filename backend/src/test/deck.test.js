"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DeckModel_1 = __importDefault(require("../src/Model/DeckModel"));
test('expect been create a deck', () => {
    expect(DeckModel_1.default.create_a_deck()).toStrictEqual(new DeckModel_1.default());
});
test('expect deck has been shuffled', () => {
    let deck = DeckModel_1.default.create_a_deck();
    expect(deck.shuffleDeck().deck).not.toBe(DeckModel_1.default.create_a_deck().deck);
});
