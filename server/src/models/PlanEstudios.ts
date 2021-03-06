import * as mongoose from "mongoose";

const planEstudiosSchema = new mongoose.Schema({
	
  id: {type: Number, unique: true},
  nombre: String,
	version: Number,
	carrera: String,
	periodo_inicio: String,
	periodo_fin: String,
	total_creditos: Number,
	duracion_periodos: Number

}, { timestamps: false });

const PlanEstudios = mongoose.model("Plan_Estudios", planEstudiosSchema);
export default PlanEstudios;