const register = require("./register");
const login = require("./login");
const getUser = require("./getUser");
const actualizarTarea = require("./actualizarTarea");
const getTareaEdit = require("./getTareaEdit");
const getTareas = require("./getTareas");
const tareaAdd = require("./tareaAdd");
const eliminarTarea = require("./eliminarTarea");
const filtroTareas = require("./filtroTareas");

module.exports = {
  register,
  login,
  getUser,
  actualizarTarea,
  getTareaEdit,
  getTareas,
  tareaAdd,
  eliminarTarea,
  filtroTareas,
};
