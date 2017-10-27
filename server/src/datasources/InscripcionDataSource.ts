import { default as Inscripcion } from "../models/Inscripcion";

let visisible = { 
	_id: 0
}

export let saveInscripcion = (inscripcionData: any) => {
	let inscripcion = new Inscripcion(inscripcionData);
	return inscripcion.save();
}

export let getAll = () => {
	let query = Inscripcion.find({}, visisible);
 	return query.exec();
}

export let getInscripcionByBoleta = (boleta: number) => {
	let query = Inscripcion.findOne({ boleta_alumno: boleta });
 	return query.exec();
}
