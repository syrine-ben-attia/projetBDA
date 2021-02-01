const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate-v2');




const Contrat = new Schema(
    {

         duree: {
            type: number,
         },
        type_reconduction: {
            type: String,
        },

        date_creation: { type: Date },
        date_debut: { type: Date },
        date_fin: { type: Date },
        sinistre: { type: Schema.Types.ObjectId, ref: 'Sinistre', required: false },
        produit: { type: Schema.Types.ObjectId, ref: 'Produit', required: false },



    },


);
    Contrat.plugin(mongoosePaginate);

module.exports = mongoose.model('Contrat', Contrat);