const mongoose = require('mongoose');

const ESchema = new mongoose.Schema({
    date :{
        type :Date
    },
    cusName :{
        type:String
    },
    contactNo :{
        type:Number
    },
    address:{
        type:String
    },
    email:{
        type:String
    },
    itemCode:{
        type:String
    },
    qty:{
        type:Number
    },
    description:{
        type:String
    },
    unitPrice:{
        type:String
    },
    price:{
        type:Number
    },
    discount:{
        type:Number
    },
    totalAmount:{
        type:Number
    }

})

const CashPay = mongoose.model('CashPayments',ESchema);
module.exports = CashPay;