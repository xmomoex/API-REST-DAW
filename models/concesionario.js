const mongoose = require('mongoose');

const concesionarioSchema = new mongoose.Schema({
  nombre: String,
  direccion: String,
  listCoches: [{
        marca: String,
        modelo: String
   }]
});

const concesionarios = mongoose.model('Concesionario', concesionarioSchema);

module.exports = concesionarios;
