const { _: [sqlFileName], e = "local", env = e} = require("simple-argv")
if (!sqlFileName) {
  throw new Error("devi specificare il nome del file sql da eseguire come primo argomento del comando")
}
console.log(`Eseguo ${sqlFileName}.sql in ambiente ${env}`)
const mysql = require("mysql")
const config = require(`./db-config-${env}.json`)
const { readFileSync } = require("fs")
const { join } = require("path")

const sql = readFileSync(join(__dirname, `${sqlFileName}.sql`), "utf8")

const pool = mysql.createPool({
  connectionLimit: 10,
  multipleStatements: true,
  ...config
})

table = 
sql = `Select * from ${table}`

pool.query(sql, (err, data) => {
  if (err) {
    console.log(err)
  } else {
    console.log(data)
  }
})