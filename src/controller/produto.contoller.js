const model = require("../models");
const Produto = model.Produto;

module.exports = {
  async criarProduto(req, res) {
    try {
      const { nome, categoria } = req.body;

      const salvarProduto = await Produto.create({
        nome,
        categoria,
      });
      return res.json({ salvarProduto });
    } catch (error) {
      return res.json({ msg: "deu erro" + error });
    }
  },
};
