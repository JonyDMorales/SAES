import { default as Analista } from "../models/Analista";

export let saveAnalista = (analistaData: any) => {
	let analista = new Analista(analistaData);
	return analista.save();
}

export let getAllAnalistas = () => {
	let query = Analista.find();
 	return query.exec();
}

export let getAnalistaById = (id: number) => {
	let query = Analista.findOne({ id: id });
 	return query.exec();
}

export let deleteAnalistaById = (id: number) => {
	let query = Analista.remove({ id: id });
 	return query.exec();
}

export let getAnalistaByIdAndPassword = (id: number, password: string) => {
	let query = Analista.findOne().and([{ id: id }, { password: password }]);
	return query.exec();
}

export let getAnalistasSorted = () => {
	let query = Analista.find({},{ id: 1, apellido_paterno: 1, apellido_materno: 1, _id: 0 }).sort({numero_unidades_reprobadas: 1, promedio_general: -1});
	return query.exec();
}