import {
	Request,
	Response,
	NextFunction
} from "express";
import {
	NumberError
} from "../Error/number.error";
import {
	LoginError
} from '../Error/login.error';

import {
	User
} from '../Model/UserModel';



const userModel = new User()

export const sign_up = async (req: Request, res: Response, next: NextFunction) => {
	try {

		await userModel.sign_up(req.body.username, req.body.password);
		res.status(200).json({"message":"User Created with success"});

	} catch (error: Error | any) {
		res.status(401).json(error.message);
		next(error);
	}
}

export const sign_in = async (req: Request, res: Response, next: NextFunction) => {
	try {

		const user = await userModel.sign_in(req.body.username, req.body.password);
		res.status(200).json({
			"message": "user retrivied",
			data: user
		});
	} catch (error: Error | any) {
		res.status(401).json({
			error: error.message
		});
	}
}

export const start_game = async (req: Request, res: Response, next: NextFunction) => {
	try {

		const result = await userModel.start_game(req.body.username, req.body.password)
		res.status(200).json({
			"message": "Game started correctly",
			data: {
				"level_progress":result.level_progress,
				"bonus":result.bonus,
				"deck_level":result.deck_level,
			}
		});
	} catch (error: Error | any) {
		if (error instanceof LoginError) {
			res.status(error.status).json({
				error: error.message
			});
		}
		if (error instanceof NumberError) {
			res.status(error.status).json({
				error: error.message
			});

		}else{
			res.status(500).json({error:error.message});
		}

	}
}

export const update_nickname = async (req:Request,res:Response,next:NextFunction)=>{
	try{

		await userModel.update_nickname(req.body.username,req.body.password,req.body.nickname,req.body.avatar)
		res.status(200).json({
			"message":"updated nickname"
		});

	}catch(error:Error|any){
		res.status(401).json({
			error:error.message
		});
	}
}

export const update_score = async (req: Request, res: Response, next: NextFunction) => {
	try {

		const result = await userModel.update_score_deck(req.body.username, req.body.password,req.body.game_score);
		res.status(200).json({
			"message": "score and progress updated",
			data: {
				"level_progress":result.level_progress,
				"global_score":result.global_score
			}
		});
	} catch (error: Error | any) {
		res.status(400).json({
			error: error.message
		});
	}
}

export const get_score = async (req: Request, res: Response, next: NextFunction) => {

	try {

		const result = await userModel.get_score();
		res.status(200).json({
			"message": "score retrivied",
			data: [...result]
		});
	} catch (error) {
		next(error);
	}
}