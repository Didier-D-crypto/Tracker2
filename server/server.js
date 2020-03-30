
var express = require("express");
var mongoose = require("mongoose");

var app = express();
var PORT = process.env.PORT || 3004;
const db= require("./models"); 


app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());





//connecting 
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useUnifiedTopology:true,
  useNewUrlParser: true
});

app.listen(PORT, function() {
  console.log(`Now listening on port: ${PORT}`);
});
