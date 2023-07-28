// Allow for reusable pool connection

const pg = require('pg')

const pool = new pg.Pool({
    // name of database is koalas
    database: 'koala_holla',
    host: 'localhost',
    port: 5432
})

module.exports = pool