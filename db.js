const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/crud",{
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(db => console.log("conexion satisfactoria"))
  .catch(err => console.error(err))


module.exports = mongoose;