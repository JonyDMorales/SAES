import * as mongoose from "mongoose";

const horarioClaseSchema = new mongoose.Schema({
  
  id: String,
	id_profesor: String,
	profesor: String,
	unidad_aprendizaje: String,
	id_unidad_aprendizaje: Number,
	grupo: String,
	lugares_disponibles: Number,
	alumnos_inscritos: Number,

	horarios: 
	[
		{
			dia: String,
			hora_inicio: String,
			hora_fin: String
		}
	]

}, { timestamps: false });

const HorarioClase = mongoose.model("Horario_Clase", horarioClaseSchema);
export default HorarioClase;