require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./database/db");
const controllers = require("./controllers");

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.get("/user/:userId", controllers.getUser);
app.post("/register", controllers.register);
app.post("/login", controllers.login);
app.post("/agregar", controllers.tareaAdd);
app.post("/actualizar", controllers.actualizarTarea);
app.post("/eliminarTarea", controllers.eliminarTarea);
app.get("/tarea", controllers.getTareas);
app.get("/getTareaEdit/:idTarea", controllers.getTareaEdit);
app.get("/filtrarTareas", controllers.filtroTareas);

app.listen(PORT, () => {
  console.log(`SERVIDOR FUNCIONANDO EN EL PUERTO ${PORT}`);
  db();
});

module.exports = app;
