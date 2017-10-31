import { default as CitaReinscripcion } from "../models/CitaReinscripcion";

export let visible = {
	boleta_alumno: 1,
	nombre_alumno: 1,
	fecha_inicio: 1,
	fecha_limite: 1,
	promedio: 1,
	num_reprobadas: 1,
	_id: 0
}

export let saveCitaReinscripcion = (citaData: any) => {
	let citaReinscripcion = new CitaReinscripcion(citaData);
	return citaReinscripcion.save();
}

export let getCitaByBoleta = (boleta: number) => {
	let query = CitaReinscripcion.findOne({ boleta_alumno: boleta }, visible);
 	return query.exec();
}

export let getAllCitas = () => {
	let query = CitaReinscripcion.find({}, visible).sort({ fecha_inicio: 1 });
 	return query.exec();
}