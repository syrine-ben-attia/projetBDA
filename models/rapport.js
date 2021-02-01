const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate-v2');




const Rapport= new Schema(
    {

        date_rapport: { type: Date },

        sinistre: { type: Schema.Types.ObjectId, ref: 'Sinistre', required: false },
        expert: { type: Schema.Types.ObjectId, ref: 'Expert', required: false },





    },


);
Sinistre.plugin(mongoosePaginate);

module.exports = mongoose.model('Sinistre', Sinistre);