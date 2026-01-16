const express = require("express")
const app = express()

const rutaCoches = require("../01_PRIMERAS_RUTAS/routes/coche.routes")

// Middleware
app.use(express.json())
app.use("/api/coches", rutaCoches)


// rutas de saludo para aprender (no debería estar aquí)
/**
app.get("/saludo",(req,res) =>{
  res.status(200).send("Hola me llamo saba y quiero ser programador")
})

app.get("/saludo/:nombre/:edad",(req,res) =>{

  let nombre = req.params.nombre
  let edad = req.params.edad

  res.status(200).send(`Hola me llamo ${nombre} y tengo ${edad} años`)
})

app.get("/saludo/con-parametros",(req,res) =>{

  let nombre = req.query.nombre
  let edad = req.query.edad

  res.status(200).send(`Hola me llamo ${nombre} y tengo ${edad} años`)
}) */

// levantar el servicio

app.listen(3000, () => console.log("proyecto arrancado por el puert 3000"))
