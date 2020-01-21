var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema(
    {
        name: {type: String, required: true},
        description: {type: String, default: 'TBD'},
        price: {type: Number, default: 0}
    },
    {
        timestamps: true
    }
    );

module.exports = mongoose.model('Product', productSchema);