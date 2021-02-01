const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate-v2');




const Personne = new Schema(
    {
        nom: String,
        prenom: String,
        profession: String,

        email: {
            type: String,
            required: true,
            unique: true,
        },
        civilite: {
            type: String,
        },
        address: {
            type: String,
        },

        mobile: { type: String },


        devis: { type: Schema.Types.ObjectId, ref: 'Devis', required: false },
        contrat: { type: Schema.Types.ObjectId, ref: 'Contrat', required: false },


    },

       
    );
Personne.plugin(mongoosePaginate);

module.exports = mongoose.model('Personne', Personne);