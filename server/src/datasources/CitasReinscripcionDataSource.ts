import { default as CitaReinscripcion } from "../models/CitaReinscripcion";

export let saveCitaReinscripcion = (citaData: any) => {
	let citaReinscripcion = new CitaReinscripcion(citaData);
	return citaReinscripcion.save();
}

export let getCitaByBoleta = (boleta: number) => {
	let query = CitaReinscripcion.findOne({ boleta_alumno: boleta });
 	return query.exec();
}

export let getAllCitas = () => {
	let query = CitaReinscripcion.find();
 	return query.exec();
}