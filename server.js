const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const multer = require("multer");

const app = express();

app.use(bodyParser.json());
app.use(express.static("public"));
app.use("/uploads", express.static("uploads"));

mongoose.connect("mongodb://127.0.0.1:27017/craftkart")
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

const storage = multer.diskStorage({
destination:(req,file,cb)=>cb(null,"uploads"),
filename:(req,file,cb)=>cb(null,Date.now()+"-"+file.originalname)
});

const upload = multer({storage});

app.use("/api/auth", require("./routes/auth"));
app.use("/api/products", require("./routes/products"));
app.use("/api/orders", require("./routes/orders"));
app.use("/api/ratings", require("./routes/ratings"));

app.listen(3000,()=>{
console.log("Server running on port 3000");
});