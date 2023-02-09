const model = require("../models");

const Usuario = model.Usuario;

module.exports = {
  async criarUsuario(req, res) {
    try {
      const { primeiroNome, ultimoNome, email, senha_hash } = req.body;

      const salvarUsuario = await Usuario.create({
        primeiroNome,
        ultimoNome,
        email,
        senha_hash,
      });

      salvarUsuario.senha_hash = undefined;

      return res.json({ salvarUsuario });
    } catch (error) {
      return res.json({ msg: "deu pau 🥲 " + error });
    }
  },
};
