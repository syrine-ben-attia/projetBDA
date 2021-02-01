const Compagnie = require('../models/compagnie');

exports.createCompagnie = function (req, res, next) {
    var compagnie = {
        descriptionComp: req.body.descriptionComp,
        prenom:req.body.prenom,
        address: req.body.address,
        mobile: req.body.mobile,
        profession: req.body.profession,
    };

    Compagnie.create(compagnie, function(err, compagnie) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "Compagny created successfully"
        })
    })
}

exports.getCompagnie = function(req, res, next) {
    Compagnie.get({}, function(err, compagnie) {
        if(err) {
            res.json({
                error: err
            })
        }
        res.json({
            compagnie: compagnie
        })
    })
}



exports.getCompagnie = function (req, res, next) {
    query = {}


    Compagnie.find(query).sort({ name: 1 })
        .exec((err, doc) => {
            if (err) {
                return res.status(400).json(err)
            }
            return res.status(200).json(doc)
        })
}

exports.updateCompagnie = function(req, res, next) {
    var compagnie = {
        descriptionComp: req.body.descriptionComp,
        prenom:req.body.prenom,
        profession: req.body.profession,
        address: req.body.address,
        mobile: req.body.mobile,
        profession: req.body.profession,
    }
    Compagnie.update({_id: req.params.id}, compagnie, function(err, compagnie) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "Compagny updated successfully"
        })
    })
}


exports.removeCompagnie = function(req, res, next) {
    Compagnie.delete({_id: req.params.id}, function(err, compagnie) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "Compagny deleted successfully"
        })
    })
}






