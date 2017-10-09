import * as mongoose from "mongoose";

const unidadAprendizajeSchema = new mongoose.Schema({
  
  id: {type: String, unique: true},
  id_plan_estudios: String,
	nombre: String,
	semestre: Number,
	creditos: Number,
	optatativa: Boolean

}, { timestamps: true });

const UnidadAprendizaje = mongoose.model("Unidad_Aprendizaje", unidadAprendizajeSchema);
export default UnidadAprendizaje;