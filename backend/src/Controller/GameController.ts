import { Request, Response, NextFunction } from "express";
import GameModel from "../Model/GameModel";


const game = new GameModel()

export const play_a_game = async (req:Request,res:Response,next:NextFunction)=>{
    try{

        game.play_a_game()

    }catch(error){
        next(error)
    }
}