const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate-v2');




const Produit= new Schema(
    {

        descriptionProd: { type: String },





    },


);
Produit.plugin(mongoosePaginate);

module.exports = mongoose.model('Produit', Produit);