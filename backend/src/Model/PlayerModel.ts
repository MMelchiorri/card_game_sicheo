export class Player {
  username: String = "";
  card_in_hand: string[] = [];
  card_discarded: string[] = [];
  isHuman:boolean = true
  player_score:number = 0

  constructor(username: string,isHuman:boolean) {
    this.username = username;
    this.isHuman=isHuman

  }

  take_a_card = (card:string)=>{
    this.card_in_hand.push(card)
  }

  play_a_card_bot = ():string|undefined =>{

    if(this.card_in_hand.length == 1){
      return this.card_in_hand[0]
    }
    

    if(this.card_in_hand.length != 0){
      return this.card_in_hand[Math.floor(Math.random()*this.card_in_hand.length-1)];

    }else if(this.card_discarded.length !=0){
      return this.card_discarded[Math.floor(Math.random()*this.card_discarded.length-1)];

    }
  }

  get_score = ()=>{
    return this.player_score
  }


}

