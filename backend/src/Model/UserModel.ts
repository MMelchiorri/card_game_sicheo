import bcrypt from "bcrypt";
import config from "../config";
import { poll } from "../Database/connection_db";
import { NumberError } from "../Error/number.error";
import { LoginError } from "../Error/login.error";
import Deck from "./DeckModel";

export class User {
  deck = new Deck();

  constructor() {}

  /* add user to the database */
  sign_up = async (username: string, password: string) => {
    try {
      const salt = bcrypt.genSaltSync(parseInt(config.SALT as string, 10));
      const password_hashed = bcrypt.hashSync(password, salt);

      let deck_of_card = this.deck.create_deck_for_level(0);

      await poll.query(
        `insert into "card_game"."client" values (` +
          "($1)" +
          `,` +
          "($2)" +
          `,'0','0',` +
          "($3)" +
          `,['0','0','0','0','0','0','0','0','0','0']);`,
        [username, password_hashed, deck_of_card]
      );
    } catch (error: Error | any) {
      throw new Error(error.message);
    }
  };

  /*check if user exists and the password is correct */
  sign_in = async (username: string, password: string) => {
    const result = await poll.query(
      `select username,score,level_progress,number_of_trials,deck_level from card_game.client where username='` +
        username +
        `'`
    );
    const password_hashed = await poll.query(
      `select password from card_game.client where username='` + username + `'`
    );
    if (
      !result.rows.length ||
      !bcrypt.compareSync(password, password_hashed.rows[0].password)
    ) {
      throw new LoginError("Username or Password not correct", 401);
    }
    return result.rows[0];
  };

  /* increment number of trials of a level when stars a new game for that level */
  start_game = async (
    username: string,
    password: string,
    level: number | any
  ) => {
    const password_hashed = await poll.query(
      `select password from card_game.client where username='` + username + `'`
    );
    if (!bcrypt.compareSync(password, password_hashed.rows[0].password)) {
      throw new LoginError("Username or Password not correct", 401);
    }

    if (isNaN(parseInt(level))) {
      throw new NumberError("The parameter is not a number", 400);
    }
    const number_of_trials = await poll.query(
      `select number_of_trials from card_game.client where username='` +
        username +
        `'`
    );
    number_of_trials.rows[0].number_of_trials[level] += 1;
    await poll.query(
      `update card_game.client set number_of_trials=($1) where username=($2)`,
      [number_of_trials.rows[0].number_of_trials, username]
    );
    const retrieve_number_of_trials_level = await poll.query(
      `select number_of_trials,level_progress from card_game.client where username='` +
        username +
        `'`
    );
    return retrieve_number_of_trials_level.rows[0];
  };

  /*update the score for one player when finish a level */
  update_score_deck = async (
    score: number,
    level_progress: number | any,
    username: string,
    password: string
  ) => {
    const result = await poll.query(
      `select password,score,level_progress from card_game.client where username='` +
        username +
        `'`
    );
    if (!bcrypt.compareSync(password, result.rows[0].password)) {
      throw new LoginError("Username or Password not correct", 401);
    }

    const number_of_trials = await poll.query(
      `select number_of_trials from card_game.client where username='` +
        username +
        `'`
    );
    if (level_progress > number_of_trials.rows[0].number_of_trials.length) {
      throw new Error(
        "Level progress more than numbers of " +
          number_of_trials.rows[0].number_of_trials.length
      );
    }
    if (score > 200) {
      throw new Error(`The score is too high, you cheated`);
    }

    score += result.rows[0].score;
    level_progress = result.rows[0].level_progress + 1;
    let deck_of_card = this.deck.create_deck_for_level(level_progress);


    await poll.query(
      `update card_game.client set score=($1), level_progress=($2), deck_level=($3) where username=($4)`,
      [score, level_progress,deck_of_card, username]
    );
    const retrieve_score_level = await poll.query(
      `select score,level_progress from card_game.client where username='` +
        username +
        `'`
    );
    return retrieve_score_level.rows[0];
  };

  /*get score of all the player */
  get_score = async () => {
    const result = await poll.query(
      `select username,score from card_game.client order by score desc`
    );
    return result.rows;
  };
}

//const user = new User()

//user.create_deck_player_rule(0)
