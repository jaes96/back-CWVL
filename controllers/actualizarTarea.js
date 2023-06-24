const Tarea = require("../model/tarea");

const actualizarTarea = async (req, res) => {
  const { idTarea, nombre, descripcion, status } = req.body;

  try {
    const tareaActualizada = await Tarea.findOneAndUpdate(
      { _id: idTarea },
      { nombre, descripcion, status },
      { new: true }
    );

    if (!tareaActualizada) {
      return res.json({ mensaje: "Tarea no encontrada" });
    }

    return res.json({ mensaje: "Tarea Actualizada correctamente" });
  } catch (error) {
    console.log(error);
    return res.json({ mensaje: "Error en el servidor" });
  }
};

module.exports = actualizarTarea;
