const mongoose = require("mongoose");

const farmaciaSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: [true, "O campo nome é obrigatório"],
  },
  cnpj: {
    type: String,
    required: [true, "O campo cnpj é obrigatório"],
  },
  criadoEm: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Farmacias", farmaciaSchema);
