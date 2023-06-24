const Tarea = require("../model/tarea");
const getTareas = async (req, res) => {
  try {
    const docs = await Tarea.find();
    res.send(docs);
  } catch (err) {
    res.send(err);
  }
};

module.exports = getTareas;
