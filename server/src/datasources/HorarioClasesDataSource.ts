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
	let query = HorarioClase.find({}, visible);
 	return query.exec();
}

export let getHorariosSorted = () => {
	let query = HorarioClase.find({}, visible).sort({ grupo: 1 });
	return query.exec();
}