const express = require("express");
const router = express.Router();
const farmaciaController = require("../controllers/FarmaciaController.js");
const produtoController = require("../controllers/ProdutoController.js");

router.post("/farmacia/cadastrar", farmaciaController.store);
router.get("/farmacia/buscar/:cnpj", farmaciaController.getOne);
router.get("/farmacia/listar", farmaciaController.get);
router.post("/farmacia/alterar", farmaciaController.update);
router.get("/farmacia/remover/:cnpj", farmaciaController.delete);

router.post("/produto/cadastrar", produtoController.store);
router.get("/produto/buscar/:cnpjFarmacia/:codigo", produtoController.getOne);
router.get("/produto/listar/:cnpjFarmacia", produtoController.get);
router.post("/produto/alterar/", produtoController.update);
router.get("/produto/remover/:cnpjFarmacia/:codigo", produtoController.delete);

module.exports = router;
