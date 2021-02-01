const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate-v2');




const Devis= new Schema(
    {


        duree: {
            type: number,
        },


        date_creation: { type: Date },
        date_debut: { type: Date },
        date_fin: { type: Date },

        produit: { type: Schema.Types.ObjectId, ref: 'Produit', required: false },





    },


);
Devis.plugin(mongoosePaginate);

module.exports = mongoose.model('Devis', Devis);