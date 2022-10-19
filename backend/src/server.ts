import express from "express";
import user_router from "./Routes/UserRoutes";
import {
	connection
} from "./Database/connection_db";
import {
	create_table_user
} from "./Database/create_table";
import cors from 'cors'
import { handleError } from "./Middleware/ErrorMiddleware";
import config from "./config";


const app = express();

const PORT = config.PORT_SERVER ||3000;

app.use(express.json());

app.listen(PORT, () => {
	console.log("\nServer is listening on port: " + PORT);

});

connection()

create_table_user()

app.use(cors({
	origin: "*"
}))

app.use('/user', user_router)

app.use(handleError)

export default app