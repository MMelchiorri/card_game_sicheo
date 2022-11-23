import express from "express";
import user_router from "./Routes/UserRoutes";
import { connection } from "./Database/connection_db";
import { handleError } from "./Middleware/ErrorMiddleware";
import config from "./config";
import path from "path";
import cors from "cors";
import http from "http";
import csp from 'express-csp-header';

const app = express();

const PORT = config.PORT_SERVER || 5000;

let front_end_folder = path.join(__dirname, "../static/sicheo-card-game");
let sicheo_brain_clash = path.join(__dirname,"../static/landingPage")



app.use(express.json());

connection();

app.use(
  cors({
    origin: "*",
    
  })
);

app.use(handleError);

http.createServer(app).listen(PORT, () => {
  console.log("\nServer is listening on port: " + PORT);
});

app.use("/user", user_router);

console.log(sicheo_brain_clash)

app.use('/SicheoBrainClash',express.static(sicheo_brain_clash))

app.use("/BrainClash", express.static(path.join(front_end_folder)));
