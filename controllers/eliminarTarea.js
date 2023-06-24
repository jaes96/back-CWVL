const Tarea = require("../model/tarea");

const eliminarTarea = async (req, res) => {
  const { idTarea } = req.body;

  try {
    const tareaActualizada = await Tarea.findOneAndDelete({ _id: idTarea });

    if (!tareaActualizada) {
      return res.json({ mensaje: "Tarea no encontrada" });
    }

    return res.json({ mensaje: "Tarea Borrada correctamente" });
  } catch (error) {
    console.log(error);
    return res.json({ mensaje: "Error en el servidor" });
  }
};

module.exports = eliminarTarea;
