const { model, Schema } = require("mongoose");

const tareaSchema = new Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
  status: { type: String, required: true },
  fecha: { type: String, required: true },
});

module.exports = model("Tarea", tareaSchema);
