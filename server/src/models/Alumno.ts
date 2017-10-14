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
	promedio_general: Number,
	numero_unidades_reprobadas: Number,


	unidades_cursadas: [],

	unidades_aprobadas: [],

	unidades_no_aprobadas: [],
	
	horarios: []

}, { timestamps: false });

const Alumno = mongoose.model("Alumno", alumnoSchema);
export default Alumno;