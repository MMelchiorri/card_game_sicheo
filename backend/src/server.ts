import express from "express";
import user_router from "./Routes/UserRoutes";
import {
	connection
} from "./Database/connection_db";
import {
	create_table_user
} from "./Database/create_table";
import {
	handleError
} from "./Middleware/ErrorMiddleware";
import config from "./config";
import path from 'path'
import cors from 'cors'


const app = express();

const PORT = config.PORT_SERVER || 5000;

app.use(express.json());

connection()

create_table_user()

app.use(cors({
	origin: "*"
}))

app.use('/user', user_router)

app.use('/brain_clash', express.static(path.join(__dirname, '../../sicheo-card-game')))

app.use(handleError)

app.listen(PORT, () => {
	console.log("\nServer is listening on port: " + PORT);

});

export default app