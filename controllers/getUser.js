const Usuario = require("../model/usuario");
const getUser = async (req, res) => {
  const { userId } = req.params;

  if (userId.length === 24) {
    Usuario.findById(userId).then((usuario) => {
      if (!usuario) {
        return res.json({ mensaje: "No se encontro ningun usuario" });
      } else {
        const { _id, contraseña, __v, ...resto } = usuario._doc;
        res.json(resto);
      }
    });
  } else {
    res.json({ mensaje: "Estas enviando una contraseña incorrecta" });
  }
};

module.exports = getUser;
