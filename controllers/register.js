const bcrypt = require("bcrypt");
const Usuario = require("../model/usuario");
const register = async (req, res) => {
  const { nombre, correo, contraseña } = req.body;

  Usuario.findOne({ correo }).then((usuario) => {
    if (usuario) {
      return res.json({
        mensaje: "El correo ya esta registrado, intente con otro",
      });
    } else if (!nombre || !correo || !contraseña) {
      return res.json({
        mensaje: "Debe de llenar todos los campos",
      });
    } else {
      bcrypt.hash(contraseña, 10, (error, contraseñaHash) => {
        if (error) res.json({ error });
        else {
          const nuevoUsuario = new Usuario({
            nombre,
            correo,
            contraseña: contraseñaHash,
          });
          nuevoUsuario
            .save()
            .then((usuario) => {
              res.json({ mensaje: "Usuario creado correctamente", usuario });
            })
            .catch((error) => console.log(error));
        }
      });
    }
  });
};

module.exports = register;
