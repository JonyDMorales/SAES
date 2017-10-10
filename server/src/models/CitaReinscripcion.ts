import * as mongoose from "mongoose";

const citaReinscripcionSchema = new mongoose.Schema({
  
	id: {type: String, unique: true},
	id_alumno: Number,
	periodo: String,
	fecha_inicio: Number,
	fecha_fin: Number

}, { timestamps: false });

const CitaReinscripcion = mongoose.model("Cita_Reinscripcion", citaReinscripcionSchema);
export default CitaReinscripcion;