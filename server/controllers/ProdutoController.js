const produto = require("../models/ProdutoSchema");
const farmacia = require("../models/FarmaciaSchema");

class ProdutoController{
    async store(req, res){
        var resultFind = await farmacia.findOne({cnpj: req.body.cnpjFarmacia});
        if (resultFind === null) {
            res.status(404).json("Cnpj não cadastrado");
            
        } else {
            var result = await produto.findOne({codigo: req.body.codigo});
            if (result === null) {
            var resultCreate = await produto.create(req.body);
            res.status(201).json(resultCreate);
        } else {
            res.status(406).json("Código já cadastrado");
            }
        }    
    }

    async get(req, res){
        var result = await produto.find({cnpjFarmacia: req.params.cnpjFarmacia});
        res.status(200).json(result);
    }
    async getOne(req, res){
        var result = await produto.findOne({cnpjFarmacia: req.params.cnpjFarmacia, codigo: req.params.codigo});
        res.status(200).json(result);
    }
    async update(req, res){
        var result = await produto.updateOne({cnpjFarmacia: req.body.cnpjFarmacia, codigo: req.body.codigo}, {$set:req.body});
        res.status(200).json(result);
    }
    async delete(req, res){
        var result = await produto.deleteOne({cnpjFarmacia: req.params.cnpjFarmacia, codigo: req.params.codigo});
        res.status(200).json(result);
    }
}

module.exports = new ProdutoController();