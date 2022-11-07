import pg from 'pg'
import config from '../config'

export const poll = new pg.Pool({
    user:config.USER || 'crate',
    host:config.HOST || 'localhost',
    database:config.DATABASE || 'card_game',
    password:config.PSW,
    port:parseInt(config.PORT_DB as string,10) || 5432


})

export const connection = async ()=>{

    try{
      const client = await poll.connect()
      const res = await client.query('SELECT NOW()')
      console.log(res.rows)
    }catch(error){
      console.log(error)
    }
  
  }