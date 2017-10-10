import * as mongoose from "mongoose";

const profesorSchema = new mongoose.Schema({
  nombres: String,
	apellido_paterno: String,
	apellido_materno: String,
	id: {type: String, unique: true},
	id_escuela: String,
	password: String,
	email: {type: String, unique: true}

}, { timestamps: false });

const Profesor = mongoose.model("Profesor", profesorSchema);
export default Profesor;