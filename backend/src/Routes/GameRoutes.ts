import { Router } from "express";
import * as controller from '../Controller/GameController'

const router_game = Router()

router_game.route('/').get(controller.play_a_game)

export default router_game