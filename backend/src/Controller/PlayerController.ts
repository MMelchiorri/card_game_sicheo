import { Request,Response,NextFunction } from "express";

import { Player } from "../Model/PlayerModel";

export const create = ():Player=>{
    return new Player("Baldassare",true)
}

export const player_turn = (req:Request,res:Response,next:NextFunction)=>{
    let suite = req.body.card[req.body.card.length-1]
    let value =  req.body.card.substring(0, req.body.card.length - 1)
  
    switch (suite) {
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
 
    let card=value+suite
    let username=req.body.username
    res.status(200).json({username,card})
    console.log({username,card})
    return

}