module.exports = function (router) {
    const compagnie =  require ('../models/compagnie');
    const restify = require('express-restify-mongoose');
    const compagnieController = require('../controllers/compagnie');

    router.get('/get', compagnieController.getCompagnie);
    restify.serve(router, compagnie, { "prefix": "", "version": "" });

}