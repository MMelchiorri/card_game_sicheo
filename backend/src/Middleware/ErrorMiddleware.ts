import { Request,Response,NextFunction } from "express";
import { NumberError } from "../Error/number.error";
import { LoginError } from "../Error/login.error";

export const handleError = (err:LoginError|NumberError,req:Request,res:Response,next:NextFunction)=>{

    let customError = err

    if(customError instanceof LoginError){
        res.status((customError as LoginError).status).send(customError);
    }

    if(customError instanceof NumberError){
        res.status((customError as NumberError).status).send(customError);
    }

}