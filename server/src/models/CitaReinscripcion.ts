import * as mongoose from "mongoose";

const citaReinscripcionSchema = new mongoose.Schema({
  
	boleta_alumno: {type: Number, unique: true},
	fecha_inicio: Number,
	fecha_limite: Number

}, { timestamps: false });

const CitaReinscripcion = mongoose.model("Cita_Reinscripcion", citaReinscripcionSchema);
export default CitaReinscripcion;