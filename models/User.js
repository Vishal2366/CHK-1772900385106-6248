<<<<<<< HEAD
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({

name:String,
email:String,
password:String,
role:String

});

=======
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({

name:String,
email:String,
password:String,
role:String

});

>>>>>>> d28b42e3fe3e0919501cd28ee7685f10db97edd1
module.exports = mongoose.model("User",UserSchema);