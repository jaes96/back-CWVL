const Tarea = require("../model/tarea");
const getTareaEdit = async (req, res) => {
  const { idTarea } = req.params;

  Tarea.findById(idTarea).then((tarea) => {
    if (!tarea) {
      return res.json({ mensaje: "No se encontro ninguna tarea" });
    } else {
      const { _id, contraseña, __v, ...resto } = tarea._doc;
      res.json(resto);
    }
  });
};

module.exports = getTareaEdit;
