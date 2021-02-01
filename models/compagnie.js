const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate-v2');




const Compagnie = new Schema(
    {
        descriptionComp: String,
        prenom: String,
        profession: String,


        address: {
            type: String,
        },

        mobile: { type: String },
        produit: { type: Schema.Types.ObjectId, ref: 'Produit', required: false },



    },


);
Compagnie.plugin(mongoosePaginate);

module.exports = mongoose.model('Compagnie', Compagnie);