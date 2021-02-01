const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate-v2');




const Sinistre = new Schema(
    {


        description_sinistre: {
            type: String,
        },





    },


);
Sinistre.plugin(mongoosePaginate);

module.exports = mongoose.model('Sinistre', Sinistre);