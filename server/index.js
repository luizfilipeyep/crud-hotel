const express = require("express")
const app = express()
const mysql = require("mysql2")
const cors = require("cors")

const db = mysql.createPool({ // conexão ao banco de dados
  host: "localhost",
  user: "root",
  password: "",
  database: "hotel"
})

app.use(cors())
app.use(express.json())

// CRUD cliente
app.get("/get/cliente", (req, res) => {
  let SQL = "SELECT * FROM cliente;"

  db.query(SQL, (err, result) => {
    if (err) res.send({ msg: err })
    else res.send(result)
  })
})

app.post("/add/cliente", (req, res) => {
  const name = req.body.name
  const age = req.body.age
  const uf = req.body.uf

  let SQL = "INSERT INTO cliente ( name, age, uf ) VALUES ( ?, ?, ? );"

  db.query(SQL, [name, age, uf], (err, result) => {
    if (err) res.send({ msg: err })
    else res.send({ msg: "Usuário Cadastrado!" })
  })
})

app.put("/edit/cliente", (req, res) => {
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

app.delete("/delete/cliente", (req, res) => {
  const cod_cliente = req.body.cod_cliente

  let SQL = "DELETE FROM cliente WHERE cod_cliente = ?;"

  db.query(SQL, [cod_cliente], (err, result) => {
    if (err) res.send({ msg: err })
    else res.send({ msg: "Apagado!" })
  })
})

// CRUD reservas
app.get("/get/reserva", (req, res) => {
  let SQL = "SELECT * FROM reserva;"

  db.query(SQL, (err, result) => {
    if (err) res.send({ msg: err })
    else res.send(result)
  })
})

app.post("/add/reserva", (req, res) => {
  const data_reserva = req.body.data_reserva
  const idCliente = req.body.idCliente
  const idQuarto = req.body.idQuarto

  let SQL = "INSERT INTO reserva ( data_reserva, idCliente, idQuarto ) VALUES ( ?, ?, ? );"

  db.query(SQL, [data_reserva, idCliente, idQuarto], (err, result) => {
    if (err) res.send({ msg: err })
    else res.send({ msg: "Reserva efetuada!" })
  })
})

app.put("/edit/reserva", (req, res) => {
  const data_reserva = req.body.data_reserva
  const data_checkin = req.body.data_checkin
  const data_checkout = req.body.data_checkout
  const idCliente = req.body.idCliente
  const idQuarto = req.body.idQuarto
  const id_reserva = req.body.id_reserva

  let SQL = "UPDATE reserva SET data_reserva = ?, data_chekin = ?, data_checkout = ?, idCliente = ?, idQuarto = ? WHERE id_reserva = ?;"

  db.query(SQL, [data_reserva, data_checkin, data_checkout, idCliente, idQuarto, id_reserva], (err, result) => {
    if (err) res.send({ msg: err })
    else res.send({ msg: "Edição feita!" })
  })
})

app.delete("/delete/reserva", (req, res) => {
  const id_reserva = req.body.id_reserva

  let SQL = "DELETE FROM reserva WHERE id_reserva = ?;"

  db.query(SQL, [id_reserva], (err, result) => {
    if (err) res.send({ msg: err })
    else res.send({ msg: "Apagado!" })
  })
})

app.listen(8800, () => {
  console.log("servidor iniciado");
})