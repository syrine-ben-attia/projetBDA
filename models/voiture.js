const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate-v2');




const Voiture = new Schema(
    {

        modele: {
            type: String,
        },
        marque: {
            type: String,
        },

        energie: {
            type: String,
        },





    },


);
Voiture.plugin(mongoosePaginate);

module.exports = mongoose.model('Voiture', Voiture);