const Tarea = require("../model/tarea");

const tareaAdd = async (req, res) => {
  const { nombre, descripcion } = req.body;
  const fecha = new Date();

  // Obtener componentes de la fecha
  const dia = fecha.getDate();
  const mes = fecha.getMonth() + 1; // Los meses en JavaScript son base 0, por eso se suma 1
  const año = fecha.getFullYear();

  // Formatear la fecha en formato corto
  const fechaCorta = `${dia}/${mes}/${año}`;

  const nuevaTarea = new Tarea({
    nombre,
    descripcion,
    status: 0,
    fecha: fechaCorta,
  });
  nuevaTarea
    .save()
    .then((tarea) => {
      res.json({ mensaje: "Tarea agregada correctamente", tarea });
    })
    .catch((error) => console.log(error));
};

module.exports = tareaAdd;
