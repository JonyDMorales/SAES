import * as mongoose from "mongoose";

const alumnoSchema = new mongoose.Schema({
  	nombre: String,
	boleta: {type: Number, unique: true},
	password: String,
	email: {type: String, unique: true},

	status: String,
	creditos_obtenidos: Number,

	unidades_cursadas: [],

	horarios_guardados: []

}, { timestamps: false });

const Alumno = mongoose.model("Alumno", alumnoSchema);
export default Alumno;