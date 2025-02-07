const pgp = require('pg-promise')({
    schema: [process.env.DB_SCHEMA]
})

const opt = {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS
}
var db
try {
    db = pgp(opt)
} catch (err) {
    console.log(err)
}

module.exports = { db }