import { function_red_black } from "../Shared/shared";
import Deck from "./DeckModel";
import { Player } from "./PlayerModel";
import {create} from '../Controller/PlayerController'
//var prompt = require('prompt-sync')();

let player_1 = create()

let player_bot_1 = new Player("player bot 1", false)

let player_bot_2 = new Player("player bot 2", false)

let player_bot_3 = new Player("player bot 3", false)

let player_bot_4 = new Player("player bot 4", false)

let card_on_board: string[] = [];

export default class GameModel{

    deck = new Deck()

    array_of_player: Player[] = [player_bot_1,player_bot_2,player_bot_3,player_bot_4,player_1]

    constructor(){

    }


    give_card_player = (deck: string[], array_of_player:Player[]) => {

        this.deck.shuffleDeck()

        array_of_player.forEach(player => {
          for( var i=0;i<10;i++){
            let card = deck.splice(0,1)[0]
            player.take_a_card(card)
          }
        });
        card_on_board.push(deck.splice(0,1)[0])
      
      }

      handle_moves = (suite: string, value: string,player:Player)=> {

        let card = value + suite
      
        if (player.card_in_hand.includes(card) && player.card_in_hand.length != 0) {
      
          let bool_value = function_red_black(card, card_on_board)
          if (bool_value) {
      
            let index_to_remove = player.card_in_hand.indexOf(card)
            player.card_in_hand.splice(index_to_remove, 1)
            card_on_board.push(card)
            player.player_score += 1
            console.log('score after card in hand', player.player_score)
            return
          } 
          else {
            let index_to_remove = player.card_in_hand.indexOf(card)
            player.card_in_hand.splice(index_to_remove, 1)
            player.card_discarded.push(value + suite)
          }
      
        } else if (player.card_discarded.includes(card) && player.card_discarded.length != 0 && player.card_in_hand.length == 0) {
      
          if (function_red_black(card, card_on_board)) {
            let index_to_remove = player.card_discarded.indexOf(card)
            player.card_discarded.splice(index_to_remove, 1)
            card_on_board.push(card)
            player.player_score += 0.5
        
          } else {
            console.log("Card not correct, pls check the card on board")
          }
        } else {
          console.log("Card Selected not in the deck, pls select a new Card")
        }
      
      };

      handle_turn = (player: Player) => {

        console.log("/*** CARD ON BOARD ****/")
        console.log(card_on_board)
        console.log("/*** THIS IS YOUR HAND ****/")
        console.log('The player: '+ player.username +' cards in hand are ', player.card_in_hand)
        console.log('The player: '+ player.username +' cards discarder are', player.card_discarded)
        console.log('The player: '+ player.username +' score is ', player.player_score)
        console.log('player turn: ',player.username)
      
        if (player.card_in_hand.length == 0 && player.card_discarded.length == 0) {
          console.log(player.player_score)
          console.log("End Game")
          return true
        }
      
        if(player.card_in_hand.length == 0){
          let count: number = 0;
          this.array_of_player.forEach(player=>{
            player.card_in_hand.forEach(card=>{
              count += function_red_black(card, card_on_board) ? 1 : 0;
            })
            player.card_discarded.forEach(card=>{
              count += function_red_black(card, card_on_board) ? 1 : 0;
            })
          })
          if (count == 0) {
            let array_of_scores:number[] = []
            this.array_of_player.forEach(player=>{
              array_of_scores.push(player.player_score)
             })
             const max = Math.max(...array_of_scores)
             const index = array_of_scores.indexOf(max)
             var player = this.array_of_player[index]
             console.log("The Player "+player.username + " has reached the score: "+ player.player_score)
             return true
          }
      
        }
      
        if (player.isHuman == false) {
      
          let card = player.play_a_card_bot()
          if (card != undefined) {
          this.handle_moves(card[card.length - 1], card.substring(0, card.length - 1),player)
      
          }
        } else {
          //this.play(player)
        
        }
      }

      /*play = (player:Player) => {

        var card = prompt('Select a Card: ')
        let suite = card[card.length-1]
        let value =  card.substring(0, card.length - 1)
      
        switch (card[card.length-1]) {
          case 'c':
            suite = "♥"
            break
          case 'q':
            suite = "♦"
            break
          case 'f':
            suite = "♣"
            break
          case 'p':
            suite = "♠"
            break
          default:
            console.log('Inserted values not corrected, pls insert correct values')
        }
      
          let card_played = value+suite
            this.handle_moves(card_played[card_played.length - 1], card_played.substring(0, card_played.length - 1),player)    
          return
        }*/
      
      play_a_game = () => {

        this.give_card_player(this.deck.deck,this.array_of_player)

        for (let i = 0; i <= this.array_of_player.length; i++) {
          if (i == this.array_of_player.length) {
            i=0
          }
          if(this.handle_turn(this.array_of_player[i])){
            return 
          }
        }
      }

}
