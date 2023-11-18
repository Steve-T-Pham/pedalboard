const Pool = require('pg').Pool
require('dotenv').config()

const user = process.env.POSTGRES_USER
const pass = process.env.POSTGRES_PASS

const pool = new Pool({
    user: user,
    host: 'localhost',
    database: 'pedalboard',
    password: pass,
    port: 5432
})

module.exports = pool