const Tarea = require("../model/tarea");
const filtroTareas = async (req, res) => {
  const { filtro } = req.body;
  try {
    const docs = await Tarea.find({ status: filtro });
    res.send(docs);
  } catch (err) {
    res.send(err);
  }
};

module.exports = filtroTareas;
