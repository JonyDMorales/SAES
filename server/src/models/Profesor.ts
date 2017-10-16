import * as mongoose from "mongoose";

const profesorSchema = new mongoose.Schema({
  nombre: String,
	id: {type: Number, unique: true},
	password: String,
	email: {type: String, unique: true}

}, { timestamps: false });

const Profesor = mongoose.model("Profesor", profesorSchema);
export default Profesor;