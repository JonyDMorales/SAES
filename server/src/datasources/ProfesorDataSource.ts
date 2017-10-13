import { default as Profesor } from "../models/Profesor";

let visisibleData = { 
	id: 1, 
	nombres : 1,
	apellido_paterno: 1, 
	apellido_materno: 1,
	email: 1, 
	_id: 0
}

export let saveProfesor = (profesorData: any) => {
	let profesor = new Profesor(profesorData);
	return profesor.save();
}

export let getAllProfesors = () => {
	let query = Profesor.find({}, visisibleData);
 	return query.exec();
}

export let getProfesorById = (id: number) => {
	let query = Profesor.findOne({ id: id }, visisibleData);
 	return query.exec();
}

export let deleteProfesorById = (id: number) => {
	let query = Profesor.remove({ id: id });
 	return query.exec();
}

export let getProfesorByIdAndPassword = (id: number, password: string) => {
	let query = Profesor.findOne().and([{ id: id }, { password: password }]);
	return query.exec();
}

export let modifyProfesor = (id: number, newProfesorData: any) => {
	let query = Profesor.update({id: id}, newProfesorData);
	return query.exec();
}