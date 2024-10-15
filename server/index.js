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

app.listen(8800, () => {
  console.log("servidor iniciado");
})