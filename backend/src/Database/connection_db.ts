import pg from 'pg'
import config from '../config'

export const poll = new pg.Pool({
    user:config.USER,
    host:config.HOST,
    database:config.DATABASE,
    password:config.PSW,
    port:parseInt(config.PORT_DB as string,10)


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
  