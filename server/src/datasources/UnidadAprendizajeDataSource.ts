import { default as UnidadAprendizaje } from "../models/UnidadAprendizaje";

export let saveUnidadAprendizaje = (unidadAprendizajeData: any) => {
	let unidadAprendizaje = new UnidadAprendizaje(unidadAprendizajeData);
	return unidadAprendizaje.save();
}

export let getAllUnidadAprendizajes = () => {
	let query = UnidadAprendizaje.find();
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