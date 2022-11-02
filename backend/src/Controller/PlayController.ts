import { Request,Response,NextFunction } from "express";
import path from 'path'
import express from "express";


export const play_a_game = (req:Request,res:Response,next:NextFunction)=>{

    const clientFolder: string = path.join(__dirname, '../../../sicheo-card-game/Build');
    console.log(clientFolder)
    
    res.sendFile(path.join(clientFolder,'../index.html'))


    //res.send(path.join(__dirname))
}