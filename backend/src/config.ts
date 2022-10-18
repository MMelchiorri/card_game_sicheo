import dotenv from 'dotenv'

dotenv.config()

const {PORT,PG_USER,PG_PSW,PG_HOST,PG_DATABASE,PG_PORT,GEN_SALT} = process.env

export default {
    PORT_SERVER:PORT,
    USER:PG_USER,
    PSW:PG_PSW,
    HOST:PG_HOST,
    DATABASE:PG_DATABASE,
    PORT_DB:PG_PORT,
    SALT:GEN_SALT
}
