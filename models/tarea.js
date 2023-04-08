const { Schema,model } = require("mongoose");

const tareaSchema = new Schema({
	text: {type: String},
	completed: {type: Boolean}
})

module.exports = model("Tarea",tareaSchema) ;