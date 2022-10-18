import { poll } from "./connection_db";

export const create_table_user = async () => {
  try {
    await poll.query(
      "CREATE TABLE IF NOT EXISTS card_game.client (username TEXT PRIMARY KEY NOT NULL, password TEXT NOT NULL, score INTEGER NOT NULL, level_progress INTEGER, deck_level ARRAY(text) ,number_of_trials ARRAY(INTEGER))"
    );
  } catch (error) {
    console.log(error);
  }
};
