import { default as UnidadAprendizaje } from "../models/UnidadAprendizaje";

export let saveUnidadAprendizaje = (unidadAprendizajeData: any) => {
	let unidadAprendizaje = new UnidadAprendizaje(unidadAprendizajeData);
	return unidadAprendizaje.save();
}

export let getAllUnidadesAprendizaje = () => {
	let query = UnidadAprendizaje.find().sort({ id: 1});
 	return query.exec();
}

export let getUnidadAprendizajeById = (id: number) => {
	let query = UnidadAprendizaje.findOne({ id: id });
 	return query.exec();
}

export let deleteUnidadAprendizajeById = (id: number) => {
	let query = UnidadAprendizaje.remove({ id: id });
 	return query.exec();
}

export let modifyUnidadAprendizaje = (id: number, newUnidadAprendizajeData: any) => {
	let query = UnidadAprendizaje.update({id: id}, newUnidadAprendizajeData);
	return query.exec();
}