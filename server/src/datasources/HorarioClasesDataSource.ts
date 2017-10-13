import { default as HorarioClase } from "../models/HorarioClase";

export let getAllHorarios = () => {
	let query = HorarioClase.find({});
 	return query.exec();
}

export let getHorariosSorted = () => {
	let query = HorarioClase.find({},{ _id: 0 }).sort({ grupo: 1 });
	return query.exec();
}