import {
	Router
} from "express";
import * as user_controller from '../Controller/UserController'

const user_router = Router()



user_router.route('/').post(user_controller.sign_up)

user_router.route('/login').post(user_controller.sign_in)

user_router.route('/start').post(user_controller.start_game)

user_router.route('/finish').post(user_controller.update_score)

user_router.route('/nickname').post(user_controller.update_nickname)

user_router.route('/score').get(user_controller.get_score)



export default user_router