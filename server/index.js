const express = require("express")
const app = express()
const mysql = require("mysql2")
const cors = require("cors")

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "hotel"
})

app.use(cors())
app.use(express.json())

app.post("/add/client", (req, res) => {
  const name = req.body.name
  const age = req.body.age
  const uf = req.body.uf

  let SQL = "INSERT INTO cliente ( name, age, uf ) VALUES ( ?, ?, ? )"

  db.query(SQL, [name, age, uf], (err, result) => {
    if (err) res.send({ msg: err })
    else res.send({ msg: "Usuário Cadastrado" })
  })
})

app.listen(8800, () => {
  console.log("servidor iniciado");
})