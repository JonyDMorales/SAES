import { default as Analista } from "../models/Analista";

let visisibleData = { 
	id: 1, 
	nombres : 1,
	apellido_paterno: 1, 
	apellido_materno: 1,
	email: 1, 
	_id: 0
}

export let saveAnalista = (analistaData: any) => {
	let analista = new Analista(analistaData);
	return analista.save();
}

export let getAllAnalistas = () => {
	let query = Analista.find({}, visisibleData);
 	return query.exec();
}

export let getAnalistaById = (id: number) => {
	let query = Analista.findOne({ id: id }, visisibleData);
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

export let modifyAnalista = (id: number, newAnalistaData: any) => {
	let query = Analista.update({id: id}, newAnalistaData);
	return query.exec();
}