const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate-v2');




const Expert= new Schema(
    {

        date_rapport: { type: Date },

        nom_expert: {
            type: String,
        },
        prenom_expert: {
            type: String,
        },
        telephone_expert: {
            type: String,
        },


    },


);
Expert.plugin(mongoosePaginate);

module.exports = mongoose.model('Expert', Expert);