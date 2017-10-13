import { default as Profesor } from "../models/Profesor";

export let saveProfesor = (profesorData: any) => {
	let profesor = new Profesor(profesorData);
	return profesor.save();
}

export let getAllProfesors = () => {
	let query = Profesor.find();
 	return query.exec();
}

export let getProfesorById = (id: number) => {
	let query = Profesor.findOne({ id: id });
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