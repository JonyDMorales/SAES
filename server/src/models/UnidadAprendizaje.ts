import * as mongoose from "mongoose";

const unidadAprendizajeSchema = new mongoose.Schema({
  
  id: {type: Number, unique: true},
  id_plan_estudios: Number,
	nombre: String,
	semestre: Number,
	creditos: Number,
	optativa: Boolean

}, { timestamps: false });

const UnidadAprendizaje = mongoose.model("Unidad_Aprendizaje", unidadAprendizajeSchema);
export default UnidadAprendizaje;