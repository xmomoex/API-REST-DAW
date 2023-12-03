// Importamos el framework express.
const express = require("express");

// Inicializamos la aplicación
const app = express();

// Indicamos que la aplicación puede recibir JSON (API Rest)
app.use(express.json());

// Indicamos el puerto en el que vamos a desplegar la aplicación
const port = process.env.PORT || 8080;

// Arrancamos la aplicación
app.listen(port, () => {
  console.log(`Servidor desplegado en puerto: ${port}`);
});

// Definimos una estructura de datos
// (temporal hasta incorporar una base de datos)

let coches = [
  { marca: "Renault", modelo: "Clio" },
  { marca: "Nissan", modelo: "Skyline R34" },
];

let concesionarios = [
  { nombre: "Diauto", direccion: "Remedios, 22", listCoches: coches },
  { nombre: "Coches Lepi", direccion: "Liebre, 3", listCoches: coches },
  { nombre: "Nachocar", direccion: "FelipeIII, 14", listCoches: coches },
  { nombre: "Flexicar", direccion: "Palacios, 5", listCoches: coches },
  { nombre: "AutosCeda", direccion: "Camino, 10", listCoches: coches },
];

// Lista todos los concesionarios
app.get("/concesionarios", (request, response) => {
  response.json(concesionarios);
});

// Añadir un nuevo concesionario
app.post("/concesionarios", (request, response) => {
  concesionarios.push(request.body);
  response.json({ message: "ok" });
});
// Obtener un solo concesionario
app.get("/concesionarios/:id", (request, response) => {
  const id = request.params.id;
  const result = concesionarios[id];
  response.json({ result });
});

// Actualizar un solo concesionario
app.put("/concesionarios/:id", (request, response) => {
  const id = request.params.id;
  concesionarios[id] = request.body;
  response.json({ message: "ok" });
});

// Borrar un elemento del array concesionario
app.delete("/concesionarios/:id", (request, response) => {
  const id = request.params.id;
  concesionarios = concesionarios.filter(
    (item) => concesionarios.indexOf(item) != id
  );

  response.json({ message: "ok" });
});

// Lista todos los coches de un concesionario
app.get("/concesionarios/:id/coches", (request, response) => {
  const id = request.params.id;
  response.json(concesionarios[id].listCoches);
});

// Añadir un nuevo coche en un concesionario
app.post("/concesionarios/:id/coches", (request, response) => {
  const id = request.params.id;
  concesionarios[id].listCoches.push(request.body);
  response.json({ message: "ok" });
});

// Obtener un solo coche de un concesionario
app.get("/concesionarios/:id/coches/:cocheid", (request, response) => {
  const id = request.params.id;
  const CocheId = request.params.cocheid;
  const result = concesionarios[id].listCoches[CocheId];
  response.json({ result });
});

// Actualizar un solo coche de un concesionario
app.put("/concesionarios/:id/coches/:cocheid", (request, response) => {
  const id = request.params.id;
  const CocheId = request.params.cocheid;
  concesionarios[id].listCoches[CocheId] = request.body;
  response.json({ message: "ok" });
});

// Borrar un elemento del array
app.delete("/concesionarios/:id/coches/:cocheid", (request, response) => {
  const id = request.params.id;
  const CocheId = request.params.cocheid;
  concesionarios[id].listCoches = concesionarios[id].listCoches.filter(
    (item) => concesionarios[id].listCoches.indexOf(item) != CocheId
  );

  response.json({ message: "ok" });
});
