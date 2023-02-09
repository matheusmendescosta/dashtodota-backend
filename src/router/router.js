const express = require("express");
const router = express.Router();

const controllerUsuario = require("../controller/usuario");

router.post("/criar/Usuario", controllerUsuario.criarUsuario);

module.exports = router;
