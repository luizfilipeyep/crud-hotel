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

app.get("/get/client", (req, res) => {
  let SQL = "SELECT * FROM cliente;"

  db.query(SQL, (err, result) => {
    if (err) res.send({ msg: err })
    else res.send(result)
  })
})

app.post("/add/client", (req, res) => {
  const name = req.body.name
  const age = req.body.age
  const uf = req.body.uf

  let SQL = "INSERT INTO cliente ( name, age, uf ) VALUES ( ?, ?, ? );"

  db.query(SQL, [name, age, uf], (err, result) => {
    if (err) res.send({ msg: err })
    else res.send({ msg: "Usuário Cadastrado!" })
  })
})

app.put("/edit/client", (req, res) => {
  const cod_cliente = req.body.cod_cliente
  const name = req.body.name
  const age = req.body.age
  const uf = req.body.uf

  let SQL = "UPDATE cliente SET name = ?, age = ?, uf = ? WHERE cod_cliente = ?;"

  db.query(SQL, [name, age, uf, cod_cliente], (err, result) => {
    if (err) res.send({ msg: err })
    else res.send({ msg: "Edição feita!" })
  })
})

app.delete("/delete/client", (req, res) => {
  const cod_cliente = req.body.cod_cliente

  let SQL = "DELETE FROM cliente WHERE cod_cliente = ?;"

  db.query(SQL, [cod_cliente], (err, result) => {
    if (err) res.send({ msg: err })
    else res.send({ msg: "Apagado!" })
  })
})

app.listen(8800, () => {
  console.log("servidor iniciado");
})