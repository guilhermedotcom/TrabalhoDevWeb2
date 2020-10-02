const express = require("express");
const router = express.Router();
const farmaciaController = require("../controllers/FarmaciaController.js");

router.post("/farmacia/cadastrar", farmaciaController.store);
router.get("/farmacia/buscar/:cnpj", farmaciaController.getOne);
router.get("/farmacia/listar", farmaciaController.get);
router.post("/farmacia/alterar", farmaciaController.update);
router.get("/farmacia/remover/:cnpj", farmaciaController.delete);

module.exports = router;
