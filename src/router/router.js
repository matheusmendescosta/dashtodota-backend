const express = require("express");
const router = express.Router();

const controllerUsuario = require("../controller/usuario");
const controllerProduto = require("../controller/produto.contoller.js");

router.post("/criar/Usuario", controllerUsuario.criarUsuario);
router.post("/criar/Produto", controllerProduto.criarProduto);

module.exports = router;
