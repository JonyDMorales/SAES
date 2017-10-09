import * as mongoose from "mongoose";

const planEstudiosSchema = new mongoose.Schema({
	
  id: {type: String, unique: true},
  nombre: String,
	version: String,
	carrera: String,
	periodo_inicio: String,
	periodo_fin: String,
	total_creditos: Number,
	duracion_periodos: Number

}, { timestamps: true });

const PlanEstudios = mongoose.model("Plan_Estudios", planEstudiosSchema);
export default PlanEstudios;