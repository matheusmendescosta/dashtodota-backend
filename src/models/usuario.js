"use strict";
const { Model } = require("sequelize");
const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  class usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  usuario.init(
    {
      primeiroNome: DataTypes.STRING,
      ultimoNome: DataTypes.STRING,
      email: DataTypes.STRING,
      senha_hash: DataTypes.VIRTUAL,
      senha: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "usuario",
    }
  );

  usuario.addHook("beforeSave", async (cryptSenha) => {
    if (cryptSenha.senha_hash) {
      cryptSenha.senha = await bcrypt.hash(cryptSenha.senha_hash, 8);
    }
  });

  return usuario;
};
