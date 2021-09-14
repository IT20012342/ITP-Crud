const mongoose = require('mongoose');
const { Schema } = mongoose;

const productCartShopping = new Schema({
    item_id: {
        type: String,
        //required: true
      },

    name: {
    type: String,
    //required: true
  },

  price: {
    type: Number,
    //required: true
  },

  qty: {
    type: String,
    //required: true
  },

  total: {
    type: String,
    //required: true
  }  
});

const productShopping = mongoose.model('productCartShopping', productCartShopping);

module.exports = productShopping;