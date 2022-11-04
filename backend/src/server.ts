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
import https from 'https'
import config from "./config";
import path from 'path'
import cors from 'cors'
import fs from 'fs'


const app = express();

const PORT = config.PORT_SERVER || 5000;

/*const options ={
	key: fs.readFileSync(path.join(__dirname,'../certificate/key.pem')),
	cert: fs.readFileSync('../certificate/cert.pem')
};*/

let certificate_folder = path.join(__dirname,'../certificate/')

let front_end_folder = path.join(__dirname,'../static')

const options = {
	key:fs.readFileSync(certificate_folder+'key.pem'),
	cert:fs.readFileSync(certificate_folder+'cert.pem')

}

app.use(express.json());

connection()

create_table_user()

app.use(cors({
	origin: "*"
}))


app.use('/user', user_router)

app.use('/brain_clash', express.static(path.join(front_end_folder)))

app.use(handleError)

https.createServer(options,app).listen(PORT,()=>{
	console.log("\nServer is listening on port: " + PORT);
})
