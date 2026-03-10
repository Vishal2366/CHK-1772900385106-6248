<<<<<<< HEAD
const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({

name:String,
price:Number,
description:String,
image:String,

artisanId:String,
artisanName:String

});

=======
const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({

name:String,
price:Number,
description:String,
image:String,

artisanId:String,
artisanName:String

});

>>>>>>> d28b42e3fe3e0919501cd28ee7685f10db97edd1
module.exports = mongoose.model("Product",ProductSchema);