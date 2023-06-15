import pg from "pg";
import config from "../config";
import { create_table_user } from "./create_table";

export const pool = new pg.Pool({
  user: config.USER || "crate",
  host: config.HOST || "localhost",
  database: config.DATABASE || "card_game",
  password: config.PSW || "asRoma90",
  port: parseInt(config.PORT_DB as string, 10) || 5433,
   idleTimeoutMillis: 30000,
});

export const connection = async () => {
  try {
    const client = await pool.connect();
    const res = await client.query("SELECT NOW()");
    create_table_user();
    client.release();
    console.log(res.rows);
  } catch (error) {
    console.log("******************", error);
  
  }
};
