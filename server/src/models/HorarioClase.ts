import * as mongoose from "mongoose";

const horarioClaseSchema = new mongoose.Schema({
  
  id: String,
	periodo: String,
	id_profesor: String,
	profesor: String,
	id_unidad_aprendizaje: String,
	grupo: String,

	horarios: 
	[
		{
			dia: String,
			hora_inicio: String,
			hora_fin: String
		}
	]

}, { timestamps: true });

const HorarioClase = mongoose.model("Horario_Clase", horarioClaseSchema);
export default HorarioClase;