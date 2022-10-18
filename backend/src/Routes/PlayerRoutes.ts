import { Router } from "express";
import * as controller from '../Controller/PlayerController'

const router_player = Router()

router_player.route('/').get(controller.player_turn)

export default router_player