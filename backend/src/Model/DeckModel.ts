export default class Deck {
  deck: string[];
  players_bot_card: string[];
  players_user_card: string[] = [];

  constructor() {
    const suites = ["C", "D", "H", "S"];

    const values = [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
      "13",
    ];

    this.deck = [];
    this.players_bot_card = [];
    this.players_user_card = [];

    suites.flatMap((suite) => {
      values.map((value) => {
        this.deck.push(suite + value);
      });
    });
  }

  shuffleDeck(): Deck {
    for (let i: number = this.deck.length - 1; i >= 0; i--) {
      let n_index = Math.floor(Math.random() * i + 1);
      let o_card = this.deck[n_index];
      this.deck[n_index] = this.deck[i];
      this.deck[i] = o_card;
    }
    return this;
  }

  create_deck_for_player(): any {
    var index_of_player_deck = 0;

    for (let i = 1; i <= this.deck.length; i++) {
      if (i % 5 == 0 && index_of_player_deck < 10) {
        console.log(this.players_user_card[index_of_player_deck])
        let swap = this.deck[i];
        let index_of_player_card = this.deck.indexOf(
          this.players_user_card[index_of_player_deck]
        );
        this.deck[i] = this.deck[index_of_player_card];
        this.deck[index_of_player_card] = swap;
        index_of_player_deck++;
      }
    }
    console.log('before',this.deck)
    let val =this.deck[0]
    this.deck.splice(0, 1)
    this.deck.push(val)
    console.log('after',this.deck)
  }

  create_deck_for_level(level: number) {
    this.shuffleDeck();
    switch (level) {
      case 0: { //DIFFERENT VALUE OR SUITE
        this.players_user_card = [];
        for (let i = 0; i < this.deck.length; i++) {

          if (
            this.deck[i] == "D08" || 
            this.deck[i] == "S07" || 
            this.deck[i] == "C01" || 
            this.deck[i] == "H05" || 
            this.deck[i] == "S05" || 
            this.deck[i] == "S11" || 
            this.deck[i] == "H13" ||
            this.deck[i] == "C12" || 
            this.deck[i] == "H02" || 
            this.deck[i] == "D10" 
          ) {
            this.players_user_card.push(this.deck[i]);
          } else {
            this.players_bot_card.push(this.deck[i]);
          }
        }

        this.create_deck_for_player();
        break;
      }
      case 1: {// RED BLACK
        this.players_user_card = [];
        for (let i = 0; i < this.deck.length; i++) {
          if (
            this.deck[i] == "C07" ||
            this.deck[i] == "S08" ||
            this.deck[i] == "S11" ||
            this.deck[i] == "C02" ||
            this.deck[i] == "D13" ||
            this.deck[i] == "D12" ||
            this.deck[i] == "H01" ||
            this.deck[i] == "S04" ||
            this.deck[i] == "H02" ||
            this.deck[i] == "C09"
          ) {
            this.players_user_card.push(this.deck[i]);
          } else {
            this.players_bot_card.push(this.deck[i]);
          }
        }
        this.create_deck_for_player();
        break;
      }
      case 2: { //SUITES ALWAY VALID, IF YOU CHANGE VALUES ARE ACCEPTED ONLY THE CARD OF THE SUITE
        this.players_user_card = [];
        for (let i = 0; i < this.deck.length; i++) {
          if (
            this.deck[i] == "C01" ||
            this.deck[i] == "D11" ||
            this.deck[i] == "S04" ||
            this.deck[i] == "S09" ||
            this.deck[i] == "D09" ||
            this.deck[i] == "H04" ||
            this.deck[i] == "D05" ||
            this.deck[i] == "H12" ||
            this.deck[i] == "S13"
          ) {
            this.players_user_card.push(this.deck[i]);
          } else {
            this.players_bot_card.push(this.deck[i]);
          }
        }
      }
      case 3: { //OD EVEN 
        this.players_user_card = [];
        for (let i = 0; i < this.deck.length; i++) {
          if (
            this.deck[i] == "H09" ||
            this.deck[i] == "C06" ||
            this.deck[i] == "H13" ||
            this.deck[i] == "S02" ||
            this.deck[i] == "H11" ||
            this.deck[i] == "H04" ||
            this.deck[i] == "S03" ||
            this.deck[i] == "D12" ||
            this.deck[i] == "D07" ||
            this.deck[i] == "S06"
          ) {
            this.players_user_card.push(this.deck[i]);
          } else {
            this.players_bot_card.push(this.deck[i]);
          }
        }
        this.create_deck_for_player();

        break;
      }
      case 4: { //RANGE >=5 RANGE <=2
        this.players_user_card = [];
        for (let i = 0; i < this.deck.length; i++) {
          if (
            this.deck[i] == "H07" ||
            this.deck[i] == "D10" ||
            this.deck[i] == "D02" ||
            this.deck[i] == "D05" ||
            this.deck[i] == "C07" ||
            this.deck[i] == "C01" ||
            this.deck[i] == "Q12" ||
            this.deck[i] == "C04" ||
            this.deck[i] == "S08" ||
            this.deck[i] == "S01"
          ) {
            this.players_user_card.push(this.deck[i]);
          } else {
            this.players_bot_card.push(this.deck[i]);
          }
        }
        this.create_deck_for_player();

        break;
      }
      case 4: { //RANGE>=10 RANGE <=4
        this.players_user_card = [];
        for (let i = 0; i < this.deck.length; i++) {
          if (
            this.deck[i] == "Q12" ||
            this.deck[i] == "K13" ||
            this.deck[i] == "S10" ||
            this.deck[i] == "C07" ||
            this.deck[i] == "D06" ||
            this.deck[i] == "C05" ||
            this.deck[i] == "D04" ||
            this.deck[i] == "C03" ||
            this.deck[i] == "H03" ||
            this.deck[i] == "S01"
          ) {
            this.players_user_card.push(this.deck[i]);
          } else {
            this.players_bot_card.push(this.deck[i]);
          }
        }
        this.create_deck_for_player();

        break;
      }
      case 5: { //+-3
        this.players_user_card = [];
        for (let i = 0; i < this.deck.length; i++) {
          if (
            this.deck[i] == "C06" ||
            this.deck[i] == "C11" ||
            this.deck[i] == "S13" ||
            this.deck[i] == "H09" ||
            this.deck[i] == "C06" ||
            this.deck[i] == "D05" ||
            this.deck[i] == "C03" ||
            this.deck[i] == "D02" ||
            this.deck[i] == "C01" ||
            this.deck[i] == "D07"
          ) {
            this.players_user_card.push(this.deck[i]);
          } else {
            this.players_bot_card.push(this.deck[i]);
          }
        }
        this.create_deck_for_player();

        break;
      }
      case 6: { //CQFP POWER UP
        this.players_user_card = [];
        for (let i = 0; i < this.deck.length; i++) {
          if (
            this.deck[i] == "H05" ||
            this.deck[i] == "D01" ||
            this.deck[i] == "S02" ||
            this.deck[i] == "S13" ||
            this.deck[i] == "H02" ||
            this.deck[i] == "H10" ||
            this.deck[i] == "D08" ||
            this.deck[i] == "D05" ||
            this.deck[i] == "C03" ||
            this.deck[i] == "C01"
          ) {
            this.players_user_card.push(this.deck[i]);
          } else {
            this.players_bot_card.push(this.deck[i]);
          }
        }
        this.create_deck_for_player();
        break;
      }
      case 7: { //+-6
        this.players_user_card = [];
        for (let i = 0; i < this.deck.length; i++) {
          if (
            this.deck[i] == "D12" ||
            this.deck[i] == "D01" ||
            this.deck[i] == "H01" ||
            this.deck[i] == "C04" ||
            this.deck[i] == "H05" ||
            this.deck[i] == "C02" ||
            this.deck[i] == "D07" ||
            this.deck[i] == "S11" ||
            this.deck[i] == "S06" ||
            this.deck[i] == "A01"
          ) {
            this.players_user_card.push(this.deck[i]);
          } else {
            this.players_bot_card.push(this.deck[i]);
          }
        }
        this.create_deck_for_player();
        break;
      }
      case 8: {
        this.players_user_card = [];
        for (let i = 0; i < this.deck.length; i++) {
          if (
            this.deck[i] == "D01" ||
            this.deck[i] == "H03" ||
            this.deck[i] == "D06" ||
            this.deck[i] == "C04" ||
            this.deck[i] == "H05" ||
            this.deck[i] == "C02" ||
            this.deck[i] == "D07" ||
            this.deck[i] == "C06" ||
            this.deck[i] == "S11" ||
            this.deck[i] == "C13"
          ) {
            this.players_user_card.push(this.deck[i]);
          } else {
            this.players_bot_card.push(this.deck[i]);
          }
        }
        this.create_deck_for_player();
        break;
      }
      case 9: {
        this.players_user_card = [];
        for (let i = 0; i < this.deck.length; i++) {
          if (
            this.deck[i] == "D09" ||
            this.deck[i] == "D02" ||
            this.deck[i] == "C06" ||
            this.deck[i] == "H09" ||
            this.deck[i] == "H06" ||
            this.deck[i] == "H10" ||
            this.deck[i] == "S08" ||
            this.deck[i] == "S01" ||
            this.deck[i] == "C10" ||
            this.deck[i] == "D04"
          ) {
            this.players_user_card.push(this.deck[i]);
          } else {
            this.players_bot_card.push(this.deck[i]);
          }
        }
        this.create_deck_for_player();
        break;
      }

      default: {
        break;
      }
    }

    return this.deck;
  }
}
