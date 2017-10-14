import * as mongoose from "mongoose";

const horarioClaseSchema = new mongoose.Schema({
  
  id: Number,
	profesor: String,
	unidad_aprendizaje: String,
	id_unidad_aprendizaje: Number,
	grupo: String,
	lugares_disponibles: Number,
	alumnos_inscritos: Number,

	horarios: []

}, { timestamps: false });

const HorarioClase = mongoose.model("Horario_Clase", horarioClaseSchema);
export default HorarioClase;