import * as mongoose from "mongoose";

const alumnoSchema = new mongoose.Schema({
  nombres: String,
	apellido_paterno: String,
	apellido_materno: String,
	boleta: {type: Number, unique: true},
	password: String,
	email: {type: String, unique: true},

	status: String,
	id_escuela: String,
	id_plan_estudios: String,
	periodo_inicio: String,
	creditos_obtenidos: Number,
	periodos_cursados: Number,

	unidades_cursadas: [
		{
			id_unidad_aprendizaje: String,
			calificacion: Number,
			periodo: String
		}
	],

	unidades_aprobadas: [
		{
			id_unidad_aprendizaje: String,
			calificacion: Number,
			periodo: String,
			forma_evaluacion: String
		}
	],

	unidades_no_aprobadas: [
		{
			id_unidad_aprendizaje: String,
			calificacion: Number,
			periodo: String
		}
	],
	
	horarios: [
		{
			periodo: String,
			clases: [String]
		}
	]

}, { timestamps: true });

const Alumno = mongoose.model("Alumno", alumnoSchema);
export default Alumno;