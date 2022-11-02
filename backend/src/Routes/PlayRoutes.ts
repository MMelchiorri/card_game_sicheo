import {
	Router
} from "express";

import { play_a_game } from "../Controller/PlayController";

const start_game_router = Router()

start_game_router.route('/').get(play_a_game)

export default start_game_router