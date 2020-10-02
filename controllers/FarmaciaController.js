const farmacia = require("../models/FarmaciaSchema");

class FarmaciaController{
    async store(req, res){
        var resultFind = await farmacia.findOne({cnpj: req.body.cnpj});
        if (resultFind === null) {
            var result = await farmacia.create(req.body);
            res.status(201).json(result);
        } else {
            res.status(406).json("Cnpj já cadastrado");
        }    
    }

    async get(req, res){
        var result = await farmacia.find({});
        res.status(200).json(result);
    }
    async getOne(req, res){
        var result = await farmacia.findOne({cnpj: req.params.cnpj});
        res.status(200).json(result);
    }
    async update(req, res){
        var result = await farmacia.updateOne({cnpj: req.body.cnpj}, {$set:req.body});
        res.status(200).json(result);
    }
    async delete(req, res){
        var result = await farmacia.deleteOne({cnpj: req.params.cnpj});
        res.status(200).json(result);
    }
}

module.exports = new FarmaciaController();