const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Itemschema = new Schema({
  name  :  String,
  price   : String,
  stock   :   Number,
  tags: [String],s
}, {
    timestamps : true
});

const Item = mongoose.model('Item', Itemschema);

module.exports = Item