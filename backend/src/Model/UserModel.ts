import bcrypt from "bcrypt";
import config from "../config";
import { poll } from "../Database/connection_db";
import { NumberError } from "../Error/number.error";
import { LoginError } from "../Error/login.error";
import Deck from "./DeckModel";
import { Pool } from "pg";

export class User {
  deck = new Deck();

  constructor() {}

  /* add user to the database */
  sign_up = async (username: string, password: string) => {

      const salt = bcrypt.genSaltSync(parseInt(config.SALT as string, 10));
      const password_hashed = bcrypt.hashSync(password, salt);

      let deck_of_card = this.deck.create_deck_for_level(0);

      await poll.query(
        `insert into "card_game"."client" values (` +
          "($1)" +
          `,` +
          "($2)" +
          `,'0','0','2',` +
          "($3)" +
          `,['0','0','0','0','0','0','0','0','0','0'],'','');`,
        [username, password_hashed, deck_of_card]
      );
  };

  /*check if user exists and the password is correct */
  sign_in = async (username: string, password: string) => {
    let result = await poll.query(
      `select username,global_score,level_progress,nickname,avatar,bonus from card_game.client where username='` +
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
  start_game = async (username: string, password: string) => {
    let password_hashed = await poll.query(
      `select password from card_game.client where username='` + username + `'`
    );
    if (!bcrypt.compareSync(password, password_hashed.rows[0].password)) {
      throw new LoginError("Username or Password not correct", 401);
    }
    let number_of_trials = await poll.query(
      `select first_trials from card_game.client where username='` +
        username +
        `'`
    );
    let bonus = await poll.query(
      `select bonus from card_game.client where username='` + username + `'`
    );

    let level_progress = await poll.query(
      `select level_progress from card_game.client where username='` +
        username +
        `'`
    );

    let deck_level = await poll.query(
      `select deck_level from card_game.client where username='` +
        username +
        `'`
    );

    let global_score = await poll.query(
      `select global_score from card_game.client where username='` +
        username +
        `'`
    );

    number_of_trials.rows[0].first_trials[
      level_progress.rows[0].level_progress
    ] += 1;

    if (
      number_of_trials.rows[0].first_trials[
        level_progress.rows[0].level_progress
      ] > 1
    ) {
      if (bonus.rows[0].bonus > 0) {
        bonus.rows[0].bonus -= 1;
      } else {
        level_progress.rows[0].level_progress += 1;
        deck_level.rows[0].deck_level = this.deck.create_deck_for_level(
          level_progress.rows[0].level_progress
        );
      }
    }

    await poll.query(
      `update card_game.client set global_score=($1), level_progress=($2), bonus=($3), deck_level=($4),first_trials=($5) where username=($6)`,
      [
        global_score.rows[0].global_score,
        level_progress.rows[0].level_progress,
        bonus.rows[0].bonus,
        deck_level.rows[0].deck_level,
        number_of_trials.rows[0].first_trials,
        username,
      ]
    );
    const result = await poll.query(
      `select deck_level,bonus,level_progress from card_game.client where username='` +
        username +
        `'`
    );
    return result.rows[0];
  };

  /*update the score for one player when he finish a level */
  update_score_deck = async (

    username: string,
    password: string,
    score: number,
  ) => {
    const password_ = await poll.query(
      `select password from card_game.client where username='` +
        username +
        `'`
    );
    if (!bcrypt.compareSync(password, password_.rows[0].password)) {
      throw new LoginError("Username or Password not correct", 401);
    }

    let deck_level = await poll.query(
      `select deck_level from card_game.client where username='` +
        username +
        `'`
    );

    let global_score = await poll.query(
      `select global_score from card_game.client where username='` +
        username +
        `'`
    );
    let number_of_trials = await poll.query(
      `select first_trials from card_game.client where username='` +
        username +
        `'`
    );

    
    let level_progress = await poll.query(
      `select level_progress from card_game.client where username='` +
        username +
        `'`
    );

    level_progress.rows[0].level_progress += 1;


    number_of_trials.rows[0].first_trials[level_progress.rows[0].level_progress] += 1;

    global_score.rows[0].global_score += score;

    deck_level.rows[0].deck_level = this.deck.create_deck_for_level(
      level_progress.rows[0].level_progress
    );

    await poll.query(
      `update card_game.client set global_score=($1), level_progress=($2), deck_level=($3),first_trials=($4) where username=($5)`,
      [
        global_score.rows[0].global_score,
        level_progress.rows[0].level_progress,
        deck_level.rows[0].deck_level,
        number_of_trials.rows[0].first_trials,
        username,
      ]);

      const result = await poll.query(
        `select level_progress,global_score from card_game.client where username='` +
          username +
          `'`
      );
      return result.rows[0];

  };

  update_nickname = async (username:string, password:string, nickname:string,avatar:string)=>{
    let password_hashed = await poll.query(
      `select password from card_game.client where username='` + username + `'`
    );
    if (!bcrypt.compareSync(password, password_hashed.rows[0].password)) {
      throw new LoginError("Username or Password not correct", 401);
    }

    if(!(/^[a-zA-Z]{4,8}$/.test(nickname))){
      throw new Error("Nickname non valido, inserisci un nickname valido tra 4 e 8 caratteri");
      
    }

    let user_nickname = await poll.query(`select nickname from card_game.client where nickname=($1)`,[nickname]);

    

    if(user_nickname.rows.length == 0){
      await poll.query(`update card_game.client set nickname=($1),avatar=($2) where username=($3)`,[nickname,avatar,username]);

    }else{
      throw new Error("nickname already exists");
      
    }

  }

  /*get score of all the player */
  get_score = async () => {
    const result = await poll.query(
      `select nickname, global_score,level_progress from card_game.client order by global_score desc`
    );
    return result.rows;
  };
}

