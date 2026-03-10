<<<<<<< HEAD
const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({

productName:String,
productImage:String,
price:Number,
quantity:Number,

artisanName:String,
artisanId:String,

customerId:String

});

=======
const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({

productName:String,
productImage:String,
price:Number,
quantity:Number,

artisanName:String,
artisanId:String,

customerId:String

});

>>>>>>> d28b42e3fe3e0919501cd28ee7685f10db97edd1
module.exports = mongoose.model("Order", OrderSchema);