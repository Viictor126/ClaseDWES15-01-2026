const express = require("express")

const ruta = express.Router()

let coches = [
    {_id: 0, marca: "Renault", modelo: "R5", year: "1978"},
    {_id: 1, marca: "Renault", modelo: "R4", year: "1968"},
    {_id: 2, marca: "Seat", modelo: "600-D", year: "1972"},
]

ruta.get("/", (req,res) => {
  res.status(200).send(coches)
})

ruta.get("/marca/:marca", (req,res) => {
  let cochesBuscarMarca = coches.filter(coche => coche.marca === req.params.marca)
  res.status(200).send(cochesBuscarMarca);
})

ruta.get("/:id", (req,res) => {
  let cocheBuscarId = coches.find(coche => coche._id == req.params.id)
  if (!cocheBuscarId) {
    res.status(404).send("Este coche no existe");
  } else {
    res.status(200).send(cocheBuscarId);
  }
})


module.exports = ruta