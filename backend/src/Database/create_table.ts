import { poll } from "./connection_db";

export const create_table_user = async () => {
  try {
    await poll.query(
      "CREATE TABLE IF NOT EXISTS card_game.client (username TEXT PRIMARY KEY NOT NULL, password TEXT NOT NULL, global_score INTEGER NOT NULL, level_progress INTEGER, bonus INTEGER ,deck_level ARRAY(text) ,first_trials ARRAY(INTEGER),nickname TEXT)"
    );
  } catch (error) {
    console.log(error);
  }
};
