import { default as HorarioClase } from "../models/HorarioClase";

let visible = {
	id: 1,
	profesor: 1,
	unidad_aprendizaje: 1,
	id_unidad_aprendizaje: 1,
	grupo: 1,
	lugares_disponibles: 1,
	alumnos_inscritos: 1,
	horarios: 1,
	_id: 0
}

export let getAllHorarios = () => {
	let query = HorarioClase.find({}, visible).sort({ id: 1 });
 	return query.exec();
}

export let getHorariosSorted = () => {
	let query = HorarioClase.find({}, visible).sort({ id: 1 });
	return query.exec();
}

export let getHorarioById = (id: number) => {
	let query = HorarioClase.findOne({ id: id }, visible);
 	return query.exec();
}

export let updateOccupability = (id: number) => {
	let query = HorarioClase.findOneAndUpdate({ id: id }, { $inc: { alumnos_inscritos: 1 }});
 	return query.exec();
}
