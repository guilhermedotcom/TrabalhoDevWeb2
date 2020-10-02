const mongoose = require("mongoose");
const produtoSchema = require("./ProdutoSchema.js");

const farmaciaSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: [true, "O campo nome é obrigatório"],
  },
  cnpj: {
    type: String,
    required: [true, "O campo código é obrigatório"],
  },
  produtos: [produtoSchema],
  criadoEm: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Farmacias", farmaciaSchema);
