var Compagnie = require('../controllers/compagnie');

module.exports = function(router) {
    router.post('/create', Compagnie.createCompagnie);
    router.get('/get', Compagnie.getCompagnie);
    router.get('/get/:name',Compagnie.getCompagnie);
    router.put('/update/:id', Compagnie.updateCompagnie);
    router.delete('/remove/:id', Compagnie.removeCompagnie);
}