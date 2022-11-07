export default class Deck {
	deck: string[] = [];
	players_bot_1_card: string[] = [];
	players_bot_2_card: string[] = [];
	players_bot_3_card: string[] = [];
	players_bot_4_card: string[] = [];
	players_user_card: string[] = [];

	static create_a_deck():Deck {

		let deck = new Deck();
		return deck;

	}
  
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
	  var index_of_bot_1 = 0;
	  var index_of_bot_2 = 0;
	  var index_of_bot_3 = 0;
	  var index_of_bot_4 = 0;
  
	  for (let i = 1; i <= this.deck.length - 1; i++) {
		if (i % 5 == 1 && index_of_bot_1 < 10) {
		  let card_swap = this.deck[i];
		  let index_of_bot_1_card = this.deck.indexOf(
			this.players_bot_1_card[index_of_bot_1]
		  );
		  this.deck[i] = this.deck[index_of_bot_1_card];
		  this.deck[index_of_bot_1_card] = card_swap;
		  index_of_bot_1++;
		}
		if (i % 5 == 2 && index_of_bot_2 < 10) {
		  let card_swap = this.deck[i];
		  let index_of_bot_2_card = this.deck.indexOf(
			this.players_bot_2_card[index_of_bot_2]
		  );
		  this.deck[i] = this.deck[index_of_bot_2_card];
		  this.deck[index_of_bot_2_card] = card_swap;
		  index_of_bot_2++;
		}
		if (i % 5 == 3 && index_of_bot_3 < 10) {
		  let card_swap = this.deck[i];
		  let index_of_bot_3_card = this.deck.indexOf(
			this.players_bot_3_card[index_of_bot_3]
		  );
		  this.deck[i] = this.deck[index_of_bot_3_card];
		  this.deck[index_of_bot_3_card] = card_swap;
		  index_of_bot_3++;
		}
		if (i % 5 == 4 && index_of_bot_4 < 10) {
		  let card_swap = this.deck[i];
		  let index_of_bot_4_card = this.deck.indexOf(
			this.players_bot_4_card[index_of_bot_4]
		  );
		  this.deck[i] = this.deck[index_of_bot_4_card];
		  this.deck[index_of_bot_4_card] = card_swap;
		  index_of_bot_4++;
		}
		if (i % 5 == 0 && index_of_player_deck < 10) {
		  let swap = this.deck[i];
		  let index_of_player_card = this.deck.indexOf(
			this.players_user_card[index_of_player_deck]
		  );
		  this.deck[i] = this.deck[index_of_player_card];
		  this.deck[index_of_player_card] = swap;
		  index_of_player_deck++;
		}
	  }
	  let val = this.deck[0];
	  this.deck.splice(0, 1);
	  this.deck.push(val);
	  this.deck = [...new Set(this.deck)]; //check unique element in array
	}
  
	create_deck_for_level(level: number) {
	  this.shuffleDeck();
	  switch (level) {
		case 0: {
		  // RED BLACK
		  this.players_user_card = [];
		  this.players_bot_1_card = [];
		  this.players_bot_2_card = [];
		  this.players_bot_3_card = [];
		  this.players_bot_4_card = [];
		  for (let i = 0; i <= this.deck.length; i++) {
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
			}
			if (
			  this.deck[i] == "C01" ||
			  this.deck[i] == "H04" ||
			  this.deck[i] == "S10" ||
			  this.deck[i] == "D02" ||
			  this.deck[i] == "S09" ||
			  this.deck[i] == "H13" ||
			  this.deck[i] == "D05" ||
			  this.deck[i] == "C06" ||
			  this.deck[i] == "S03" ||
			  this.deck[i] == "C13"
			) {
			  this.players_bot_1_card.push(this.deck[i]);
			}
			if (
			  this.deck[i] == "D03" ||
			  this.deck[i] == "H07" ||
			  this.deck[i] == "D10" ||
			  this.deck[i] == "H09" ||
			  this.deck[i] == "H11" ||
			  this.deck[i] == "S01" ||
			  this.deck[i] == "C03" ||
			  this.deck[i] == "S13" ||
			  this.deck[i] == "C08" ||
			  this.deck[i] == "D06"
			) {
			  this.players_bot_2_card.push(this.deck[i]);
			}
			if (
			  this.deck[i] == "C04" ||
			  this.deck[i] == "S07" ||
			  this.deck[i] == "H05" ||
			  this.deck[i] == "D09" ||
			  this.deck[i] == "S12" ||
			  this.deck[i] == "S05" ||
			  this.deck[i] == "D11" ||
			  this.deck[i] == "C12" ||
			  this.deck[i] == "D07" ||
			  this.deck[i] == "S02"
			) {
			  this.players_bot_3_card.push(this.deck[i]);
			}
			if (
			  this.deck[i] == "C10" ||
			  this.deck[i] == "C11" ||
			  this.deck[i] == "D01" ||
			  this.deck[i] == "D04" ||
			  this.deck[i] == "D08" ||
			  this.deck[i] == "H06" ||
			  this.deck[i] == "H03" ||
			  this.deck[i] == "S06" ||
			  this.deck[i] == "H08" ||
			  this.deck[i] == "H12"
			) {
			  this.players_bot_4_card.push(this.deck[i]);
			}
		  }
		  this.create_deck_for_player();
		  break;
		}
		case 1: {
		  // DIFFERENT VALUE OR SUITE
		  this.players_user_card = [];
		  this.players_bot_1_card = [];
		  this.players_bot_2_card = [];
		  this.players_bot_3_card = [];
		  this.players_bot_4_card = [];
		  for (let i = 0; i <= this.deck.length; i++) {
			if (
			  this.deck[i] == "D08" ||
			  this.deck[i] == "S07" ||
			  this.deck[i] == "C01" ||
			  this.deck[i] == "H05" ||
			  this.deck[i] == "S05" ||
			  this.deck[i] == "S11" ||
			  this.deck[i] == "H13" ||
			  this.deck[i] == "C11" ||
			  this.deck[i] == "H02" ||
			  this.deck[i] == "D10"
			) {
			  this.players_user_card.push(this.deck[i]);
			}
			if (
			  this.deck[i] == "H01" ||
			  this.deck[i] == "S09" ||
			  this.deck[i] == "S12" ||
			  this.deck[i] == "C06" ||
			  this.deck[i] == "C09" ||
			  this.deck[i] == "D03" ||
			  this.deck[i] == "H07" ||
			  this.deck[i] == "H12" ||
			  this.deck[i] == "D13" ||
			  this.deck[i] == "S10"
			) {
			  this.players_bot_1_card.push(this.deck[i]);
			}
			if (
			  this.deck[i] == "D01" ||
			  this.deck[i] == "H04" ||
			  this.deck[i] == "C10" ||
			  this.deck[i] == "C13" ||
			  this.deck[i] == "S03" ||
			  this.deck[i] == "S01" ||
			  this.deck[i] == "C04" ||
			  this.deck[i] == "H09" ||
			  this.deck[i] == "D04" ||
			  this.deck[i] == "D06"
			) {
			  this.players_bot_2_card.push(this.deck[i]);
			}
			if (
			  this.deck[i] == "H06" ||
			  this.deck[i] == "D11" ||
			  this.deck[i] == "C08" ||
			  this.deck[i] == "C07" ||
			  this.deck[i] == "H03" ||
			  this.deck[i] == "C02" ||
			  this.deck[i] == "D05" ||
			  this.deck[i] == "S04" ||
			  this.deck[i] == "H10" ||
			  this.deck[i] == "C03"
			) {
			  this.players_bot_3_card.push(this.deck[i]);
			}
			if (
			  this.deck[i] == "H11" ||
			  this.deck[i] == "S13" ||
			  this.deck[i] == "D02" ||
			  this.deck[i] == "C05" ||
			  this.deck[i] == "H08" ||
			  this.deck[i] == "S06" ||
			  this.deck[i] == "S08" ||
			  this.deck[i] == "D07" ||
			  this.deck[i] == "C12" ||
			  this.deck[i] == "D12"
			) {
			  this.players_bot_4_card.push(this.deck[i]);
			}
		  }
  
		  this.create_deck_for_player();
		  break;
		}
  
		case 2: {
		  //ODD EVEN
		  for (let i = 0; i <= this.deck.length; i++) {
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
			}
			if (
			  this.deck[i] == "S05" ||
			  this.deck[i] == "H07" ||
			  this.deck[i] == "C11" ||
			  this.deck[i] == "D10" ||
			  this.deck[i] == "D02" ||
			  this.deck[i] == "H07" ||
			  this.deck[i] == "C11" ||
			  this.deck[i] == "C02" ||
			  this.deck[i] == "D03" ||
			  this.deck[i] == "S11"
			) {
			  this.players_bot_1_card.push(this.deck[i]);
			}
			if (
			  this.deck[i] == "H03" ||
			  this.deck[i] == "S09" ||
			  this.deck[i] == "S13" ||
			  this.deck[i] == "C05" ||
			  this.deck[i] == "C09" ||
			  this.deck[i] == "D08" ||
			  this.deck[i] == "C12" ||
			  this.deck[i] == "S13" ||
			  this.deck[i] == "H06" ||
			  this.deck[i] == "H01"
			) {
			  this.players_bot_2_card.push(this.deck[i]);
			}
			if (
			  this.deck[i] == "H05" ||
			  this.deck[i] == "H10" ||
			  this.deck[i] == "C10" ||
			  this.deck[i] == "C03" ||
			  this.deck[i] == "D11" ||
			  this.deck[i] == "D01" ||
			  this.deck[i] == "S01" ||
			  this.deck[i] == "H08" ||
			  this.deck[i] == "C13" ||
			  this.deck[i] == "C08"
			) {
			  this.players_bot_3_card.push(this.deck[i]);
			}
			if (
			  this.deck[i] == "H02" ||
			  this.deck[i] == "H12" ||
			  this.deck[i] == "S07" ||
			  this.deck[i] == "S08" ||
			  this.deck[i] == "S12" ||
			  this.deck[i] == "C07" ||
			  this.deck[i] == "D04" ||
			  this.deck[i] == "D05" ||
			  this.deck[i] == "D06" ||
			  this.deck[i] == "D09"
			) {
			  this.players_bot_4_card.push(this.deck[i]);
			}
		  }
  
		  this.create_deck_for_player();
		  break;
		}
		case 3: {
		  // SAME SUITE/FIGURE NOT CONSECUTIVE
		  this.players_user_card = [];
		  this.players_bot_1_card = [];
		  this.players_bot_2_card = [];
		  this.players_bot_3_card = [];
		  this.players_bot_4_card = [];
		  for (let i = 0; i <= this.deck.length; i++) {
			if (
			  this.deck[i] == "C01" ||
			  this.deck[i] == "C10" ||
			  this.deck[i] == "C12" ||
			  this.deck[i] == "C13" ||
			  this.deck[i] == "S02" ||
			  this.deck[i] == "S04" ||
			  this.deck[i] == "H06" ||
			  this.deck[i] == "H09" ||
			  this.deck[i] == "D10" ||
			  this.deck[i] == "D13"
			) {
			  this.players_user_card.push(this.deck[i]);
			}
			if (
			  this.deck[i] == "D01" ||
			  this.deck[i] == "C03" ||
			  this.deck[i] == "H04" ||
			  this.deck[i] == "S06" ||
			  this.deck[i] == "C07" ||
			  this.deck[i] == "H13" ||
			  this.deck[i] == "S01" ||
			  this.deck[i] == "D09" ||
			  this.deck[i] == "C11" ||
			  this.deck[i] == "D05"
			) {
			  this.players_bot_1_card.push(this.deck[i]);
			}
			if (
			  this.deck[i] == "H03" ||
			  this.deck[i] == "S10" ||
			  this.deck[i] == "D12" ||
			  this.deck[i] == "C08" ||
			  this.deck[i] == "H10" ||
			  this.deck[i] == "H12" ||
			  this.deck[i] == "D07" ||
			  this.deck[i] == "S12" ||
			  this.deck[i] == "S03" ||
			  this.deck[i] == "S07"
			) {
			  this.players_bot_2_card.push(this.deck[i]);
			}
			if (
			  this.deck[i] == "H11" ||
			  this.deck[i] == "C09" ||
			  this.deck[i] == "C02" ||
			  this.deck[i] == "C05" ||
			  this.deck[i] == "S09" ||
			  this.deck[i] == "S13" ||
			  this.deck[i] == "H07" ||
			  this.deck[i] == "S11" ||
			  this.deck[i] == "D03" ||
			  this.deck[i] == "C04"
			) {
			  this.players_bot_3_card.push(this.deck[i]);
			}
			if (
			  this.deck[i] == "H01" ||
			  this.deck[i] == "H02" ||
			  this.deck[i] == "S05" ||
			  this.deck[i] == "H05" ||
			  this.deck[i] == "D04" ||
			  this.deck[i] == "S08" ||
			  this.deck[i] == "C06" ||
			  this.deck[i] == "D02" ||
			  this.deck[i] == "D11" ||
			  this.deck[i] == "H08"
			) {
			  this.players_bot_4_card.push(this.deck[i]);
			}
		  }
  
		  this.create_deck_for_player();
		  break;
		}
		case 4: {
		  //ALTERNATE FIGURE/NUMBER
		  this.players_user_card = [];
		  this.players_bot_1_card = [];
		  this.players_bot_2_card = [];
		  this.players_bot_3_card = [];
		  this.players_bot_4_card = [];
		  for (let i = 0; i <= this.deck.length; i++) {
			if (
			  this.deck[i] == "H13" ||
			  this.deck[i] == "D09" ||
			  this.deck[i] == "C01" ||
			  this.deck[i] == "H06" ||
			  this.deck[i] == "S11" ||
			  this.deck[i] == "C06" ||
			  this.deck[i] == "H02" ||
			  this.deck[i] == "D06" ||
			  this.deck[i] == "S01" ||
			  this.deck[i] == "C03"
			) {
			  this.players_user_card.push(this.deck[i]);
			}
			if (
			  this.deck[i] == "S03" ||
			  this.deck[i] == "D03" ||
			  this.deck[i] == "H09" ||
			  this.deck[i] == "C09" ||
			  this.deck[i] == "C11" ||
			  this.deck[i] == "D12" ||
			  this.deck[i] == "S07" ||
			  this.deck[i] == "H04" ||
			  this.deck[i] == "C04" ||
			  this.deck[i] == "C02"
			) {
			  this.players_bot_1_card.push(this.deck[i]);
			}
			if (
			  this.deck[i] == "D02" ||
			  this.deck[i] == "C13" ||
			  this.deck[i] == "S08" ||
			  this.deck[i] == "H08" ||
			  this.deck[i] == "H05" ||
			  this.deck[i] == "D10" ||
			  this.deck[i] == "S09" ||
			  this.deck[i] == "C07" ||
			  this.deck[i] == "D11" ||
			  this.deck[i] == "H12"
			) {
			  this.players_bot_2_card.push(this.deck[i]);
			}
			if (
			  this.deck[i] == "C12" ||
			  this.deck[i] == "S12" ||
			  this.deck[i] == "S10" ||
			  this.deck[i] == "H10" ||
			  this.deck[i] == "D01" ||
			  this.deck[i] == "S04" ||
			  this.deck[i] == "S05" ||
			  this.deck[i] == "D05" ||
			  this.deck[i] == "C10" ||
			  this.deck[i] == "S13"
			) {
			  this.players_bot_3_card.push(this.deck[i]);
			}
			if (
			  this.deck[i] == "H11" ||
			  this.deck[i] == "S06" ||
			  this.deck[i] == "D13" ||
			  this.deck[i] == "C02" ||
			  this.deck[i] == "C08" ||
			  this.deck[i] == "D07" ||
			  this.deck[i] == "D08" ||
			  this.deck[i] == "H07" ||
			  this.deck[i] == "S02" ||
			  this.deck[i] == "D04"
			) {
			  this.players_bot_4_card.push(this.deck[i]);
			}
		  }
  
		  this.create_deck_for_player();
		  break;
		}
		case 5: {
		  //SUITES ALWAY VALID, IF YOU CHANGE VALUES ARE ACCEPTED ONLY THE CARD OF THE SUITE
		  this.players_user_card = [];
		  this.players_bot_1_card = [];
		  this.players_bot_2_card = [];
		  this.players_bot_3_card = [];
		  this.players_bot_4_card = [];
		  for (let i = 0; i <= this.deck.length; i++) {
			if (
			  this.deck[i] == "H01" ||
			  this.deck[i] == "H09" ||
			  this.deck[i] == "S01" ||
			  this.deck[i] == "S09" ||
			  this.deck[i] == "D13" ||
			  this.deck[i] == "C07" ||
			  this.deck[i] == "C01" ||
			  this.deck[i] == "C12" ||
			  this.deck[i] == "D04" ||
			  this.deck[i] == "H10"
			) {
			  this.players_user_card.push(this.deck[i]);
			}
			if (
			  this.deck[i] == "H12" ||
			  this.deck[i] == "C10" ||
			  this.deck[i] == "D09" ||
			  this.deck[i] == "S12" ||
			  this.deck[i] == "D03" ||
			  this.deck[i] == "H06" ||
			  this.deck[i] == "D11" ||
			  this.deck[i] == "S11" ||
			  this.deck[i] == "C08" ||
			  this.deck[i] == "D02"
			) {
			  this.players_bot_1_card.push(this.deck[i]);
			}
			if (
			  this.deck[i] == "C03" ||
			  this.deck[i] == "H03" ||
			  this.deck[i] == "S04" ||
			  this.deck[i] == "C13" ||
			  this.deck[i] == "D10" ||
			  this.deck[i] == "H08" ||
			  this.deck[i] == "D07" ||
			  this.deck[i] == "S05" ||
			  this.deck[i] == "C06" ||
			  this.deck[i] == "C04"
			) {
			  this.players_bot_2_card.push(this.deck[i]);
			}
			if (
			  this.deck[i] == "H11" ||
			  this.deck[i] == "C02" ||
			  this.deck[i] == "C05" ||
			  this.deck[i] == "D12" ||
			  this.deck[i] == "S07" ||
			  this.deck[i] == "S08" ||
			  this.deck[i] == "H04" ||
			  this.deck[i] == "C09" ||
			  this.deck[i] == "S13" ||
			  this.deck[i] == "S01"
			) {
			  this.players_bot_3_card.push(this.deck[i]);
			}
			if (
			  this.deck[i] == "H05" ||
			  this.deck[i] == "H13" ||
			  this.deck[i] == "H07" ||
			  this.deck[i] == "C11" ||
			  this.deck[i] == "S02" ||
			  this.deck[i] == "S03" ||
			  this.deck[i] == "S06" ||
			  this.deck[i] == "D08" ||
			  this.deck[i] == "S10" ||
			  this.deck[i] == "D05"
			) {
			  this.players_bot_4_card.push(this.deck[i]);
			}
		  }
  
		  this.create_deck_for_player();
		  break;
		}
  
		case 6: {
		  //DIFFERENT SUITE/VALUE BOUND +-1
		  this.players_user_card = [];
		  this.players_bot_1_card = [];
		  this.players_bot_2_card = [];
		  this.players_bot_3_card = [];
		  this.players_bot_4_card = [];
		  for (let i = 0; i <= this.deck.length; i++) {
			if (
			  this.deck[i] == "H01" ||
			  this.deck[i] == "H10" ||
			  this.deck[i] == "S03" ||
			  this.deck[i] == "D04" ||
			  this.deck[i] == "C06" ||
			  this.deck[i] == "S10" ||
			  this.deck[i] == "C12" ||
			  this.deck[i] == "S04" ||
			  this.deck[i] == "S08" ||
			  this.deck[i] == "C10"
			) {
			  this.players_user_card.push(this.deck[i]);
			}
			if (
			  this.deck[i] == "D03" ||
			  this.deck[i] == "S02" ||
			  this.deck[i] == "S11" ||
			  this.deck[i] == "S13" ||
			  this.deck[i] == "C01" ||
			  this.deck[i] == "C09" ||
			  this.deck[i] == "C05" ||
			  this.deck[i] == "S09" ||
			  this.deck[i] == "H09" ||
			  this.deck[i] == "H13"
			) {
			  this.players_bot_1_card.push(this.deck[i]);
			}
			if (
			  this.deck[i] == "S01" ||
			  this.deck[i] == "D01" ||
			  this.deck[i] == "H08" ||
			  this.deck[i] == "C04" ||
			  this.deck[i] == "H05" ||
			  this.deck[i] == "H03" ||
			  this.deck[i] == "H07" ||
			  this.deck[i] == "D10" ||
			  this.deck[i] == "S06" ||
			  this.deck[i] == "C08"
			) {
			  this.players_bot_2_card.push(this.deck[i]);
			}
			if (
			  this.deck[i] == "D02" ||
			  this.deck[i] == "H11" ||
			  this.deck[i] == "H12" ||
			  this.deck[i] == "S07" ||
			  this.deck[i] == "C11" ||
			  this.deck[i] == "D13" ||
			  this.deck[i] == "S12" ||
			  this.deck[i] == "C03" ||
			  this.deck[i] == "H04" ||
			  this.deck[i] == "D07"
			) {
			  this.players_bot_3_card.push(this.deck[i]);
			}
			if (
			  this.deck[i] == "H02" ||
			  this.deck[i] == "D06" ||
			  this.deck[i] == "D05" ||
			  this.deck[i] == "D12" ||
			  this.deck[i] == "C02" ||
			  this.deck[i] == "D09" ||
			  this.deck[i] == "S05" ||
			  this.deck[i] == "D08" ||
			  this.deck[i] == "D11" ||
			  this.deck[i] == "C13"
			) {
			  this.players_bot_4_card.push(this.deck[i]);
			}
		  }
  
		  this.create_deck_for_player();
		  break;
		}
		case 7: {
		  //CQFP
		  this.players_user_card = [];
		  this.players_bot_1_card = [];
		  this.players_bot_2_card = [];
		  this.players_bot_3_card = [];
		  this.players_bot_4_card = [];
		  for (let i = 0; i <= this.deck.length; i++) {
			if (
			  this.deck[i] == "H01" ||
			  this.deck[i] == "S04" ||
			  this.deck[i] == "D10" ||
			  this.deck[i] == "C13" ||
			  this.deck[i] == "H09" ||
			  this.deck[i] == "S06" ||
			  this.deck[i] == "D07" ||
			  this.deck[i] == "C03" ||
			  this.deck[i] == "D02" ||
			  this.deck[i] == "H10"
			) {
			  this.players_user_card.push(this.deck[i]);
			}
			if (
			  this.deck[i] == "S02" ||
			  this.deck[i] == "S05" ||
			  this.deck[i] == "D03" ||
			  this.deck[i] == "D05" ||
			  this.deck[i] == "C07" ||
			  this.deck[i] == "C08" ||
			  this.deck[i] == "H11" ||
			  this.deck[i] == "H13" ||
			  this.deck[i] == "S10" ||
			  this.deck[i] == "C01"
			) {
			  this.players_bot_1_card.push(this.deck[i]);
			}
			if (
			  this.deck[i] == "D08" ||
			  this.deck[i] == "C09" ||
			  this.deck[i] == "H12" ||
			  this.deck[i] == "D13" ||
			  this.deck[i] == "C11" ||
			  this.deck[i] == "D06" ||
			  this.deck[i] == "D04" ||
			  this.deck[i] == "H05" ||
			  this.deck[i] == "H06" ||
			  this.deck[i] == "H08"
			) {
			  this.players_bot_2_card.push(this.deck[i]);
			}
			if (
			  this.deck[i] == "H02" ||
			  this.deck[i] == "H03" ||
			  this.deck[i] == "H07" ||
			  this.deck[i] == "D12" ||
			  this.deck[i] == "C10" ||
			  this.deck[i] == "C05" ||
			  this.deck[i] == "C06" ||
			  this.deck[i] == "S08" ||
			  this.deck[i] == "S13" ||
			  this.deck[i] == "S11"
			) {
			  this.players_bot_3_card.push(this.deck[i]);
			}
			if (
			  this.deck[i] == "S01" ||
			  this.deck[i] == "S03" ||
			  this.deck[i] == "D11" ||
			  this.deck[i] == "S12" ||
			  this.deck[i] == "C12" ||
			  this.deck[i] == "C02" ||
			  this.deck[i] == "C04" ||
			  this.deck[i] == "D09" ||
			  this.deck[i] == "S09" ||
			  this.deck[i] == "H04"
			) {
			  this.players_bot_4_card.push(this.deck[i]);
			}
		  }
  
		  this.create_deck_for_player();
		  break;
		}
		case 8: {
		  //RANGE >=10 <=5
		  this.players_user_card = [];
		  this.players_bot_1_card = [];
		  this.players_bot_2_card = [];
		  this.players_bot_3_card = [];
		  this.players_bot_4_card = [];
		  for (let i = 0; i <= this.deck.length; i++) {
			if (
			  this.deck[i] == "H02" ||
			  this.deck[i] == "S10" ||
			  this.deck[i] == "D05" ||
			  this.deck[i] == "C03" ||
			  this.deck[i] == "D08" ||
			  this.deck[i] == "H12" ||
			  this.deck[i] == "D13" ||
			  this.deck[i] == "D01" ||
			  this.deck[i] == "C09" ||
			  this.deck[i] == "H08"
			) {
			  this.players_user_card.push(this.deck[i]);
			}
			if (
			  this.deck[i] == "S05" ||
			  this.deck[i] == "D10" ||
			  this.deck[i] == "C12" ||
			  this.deck[i] == "H06" ||
			  this.deck[i] == "D03" ||
			  this.deck[i] == "S04" ||
			  this.deck[i] == "H04" ||
			  this.deck[i] == "C04" ||
			  this.deck[i] == "C11" ||
			  this.deck[i] == "D12"
			) {
			  this.players_bot_1_card.push(this.deck[i]);
			}
			if (
			  this.deck[i] == "C13" ||
			  this.deck[i] == "S11" ||
			  this.deck[i] == "H05" ||
			  this.deck[i] == "H11" ||
			  this.deck[i] == "D07" ||
			  this.deck[i] == "C08" ||
			  this.deck[i] == "C02" ||
			  this.deck[i] == "H09" ||
			  this.deck[i] == "C10" ||
			  this.deck[i] == "S06"
			) {
			  this.players_bot_2_card.push(this.deck[i]);
			}
			if (
			  this.deck[i] == "H07" ||
			  this.deck[i] == "S08" ||
			  this.deck[i] == "C05" ||
			  this.deck[i] == "C06" ||
			  this.deck[i] == "S02" ||
			  this.deck[i] == "D06" ||
			  this.deck[i] == "C07" ||
			  this.deck[i] == "H10" ||
			  this.deck[i] == "S12" ||
			  this.deck[i] == "S13"
			) {
			  this.players_bot_3_card.push(this.deck[i]);
			}
			if (
			  this.deck[i] == "H01" ||
			  this.deck[i] == "D02" ||
			  this.deck[i] == "C01" ||
			  this.deck[i] == "H03" ||
			  this.deck[i] == "H13" ||
			  this.deck[i] == "S07" ||
			  this.deck[i] == "S09" ||
			  this.deck[i] == "D09" ||
			  this.deck[i] == "D11" ||
			  this.deck[i] == "D04"
			) {
			  this.players_bot_4_card.push(this.deck[i]);
			}
		  }
  
		  this.create_deck_for_player();
		  break;
		}
		case 9: {
		  //CQFP
		  this.players_user_card = [];
		  this.players_bot_1_card = [];
		  this.players_bot_2_card = [];
		  this.players_bot_3_card = [];
		  this.players_bot_4_card = [];
		  for (let i = 0; i <= this.deck.length; i++) {
			if (
			  this.deck[i] == "H1" ||
			  this.deck[i] == "S04" ||
			  this.deck[i] == "D10" ||
			  this.deck[i] == "C13" ||
			  this.deck[i] == "H09" ||
			  this.deck[i] == "S06" ||
			  this.deck[i] == "D07" ||
			  this.deck[i] == "C03" ||
			  this.deck[i] == "D02" ||
			  this.deck[i] == "H10"
			) {
			  this.players_user_card.push(this.deck[i]);
			}
			if (
			  this.deck[i] == "S02" ||
			  this.deck[i] == "S05" ||
			  this.deck[i] == "D03" ||
			  this.deck[i] == "D05" ||
			  this.deck[i] == "C07" ||
			  this.deck[i] == "C08" ||
			  this.deck[i] == "H11" ||
			  this.deck[i] == "H13" ||
			  this.deck[i] == "S10" ||
			  this.deck[i] == "C01"
			) {
			  this.players_bot_1_card.push(this.deck[i]);
			}
			if (
			  this.deck[i] == "D08" ||
			  this.deck[i] == "C09" ||
			  this.deck[i] == "H12" ||
			  this.deck[i] == "D13" ||
			  this.deck[i] == "C11" ||
			  this.deck[i] == "D06" ||
			  this.deck[i] == "D04" ||
			  this.deck[i] == "H05" ||
			  this.deck[i] == "H06" ||
			  this.deck[i] == "H08"
			) {
			  this.players_bot_2_card.push(this.deck[i]);
			}
			if (
			  this.deck[i] == "H02" ||
			  this.deck[i] == "H03" ||
			  this.deck[i] == "H07" ||
			  this.deck[i] == "D12" ||
			  this.deck[i] == "C10" ||
			  this.deck[i] == "C05" ||
			  this.deck[i] == "C06" ||
			  this.deck[i] == "S08" ||
			  this.deck[i] == "S13" ||
			  this.deck[i] == "S11"
			) {
			  this.players_bot_3_card.push(this.deck[i]);
			}
			if (
			  this.deck[i] == "S01" ||
			  this.deck[i] == "S03" ||
			  this.deck[i] == "D11" ||
			  this.deck[i] == "S12" ||
			  this.deck[i] == "C12" ||
			  this.deck[i] == "C02" ||
			  this.deck[i] == "C04" ||
			  this.deck[i] == "D09" ||
			  this.deck[i] == "S09" ||
			  this.deck[i] == "H04"
			) {
			  this.players_bot_4_card.push(this.deck[i]);
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
  