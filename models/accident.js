const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate-v2');




const Accident= new Schema(
    {
        Lieu_Accident: String,
        descriptionAcc: String,
        date_Accident: {
            type: Date,
        },

        mobile: { type: String },
        voiture: { type: Schema.Types.ObjectId, ref: 'Voiture', required: false },



    },


);
Accident.plugin(mongoosePaginate);

module.exports = mongoose.model('Accident', Accident);