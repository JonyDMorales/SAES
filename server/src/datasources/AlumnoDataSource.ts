import { default as Alumno } from "../models/Alumno";

let visisible = { 
	boleta: 1, 
	nombre : 1,
	email: 1, 
	_id: 0
}

let kardexData = { 
	status: 1, 
	creditos_obtenidos: 1, 
	promedio_general: 1, 
	periodos_cursados: 1,
	numero_unidades_reprobadas: 1,
	unidades_cursadas: 1,
	unidades_aprobadas: 1,
	unidades_no_aprobadas: 1, 
	_id: 0
}

let forVa

export let saveAlumno = (alumnoData: any) => {
	let alumno = new Alumno(alumnoData);
	return alumno.save();
}

export let addBookmark = (boleta: number, schedule: any) => {
	let query = Alumno.findOneAndUpdate({boleta: boleta}, {$push: {"horarios_guardados": schedule}});
	return query.exec();
}

export let getBoletaAlumnos = () => {
	let query = Alumno.find({}, {_id: 0, boleta: 1});
 	return query.exec();
}

export let getAllAlumnos = () => {
	let query = Alumno.find({}, visisible);
 	return query.exec();
}

export let getAlumnoByBoleta = (boleta: number) => {
	let query = Alumno.findOne({ boleta: boleta });
 	return query.exec();
}

export let getBookmarks = (boleta: number) => {
	let query = Alumno.findOne({ boleta: boleta }, {horarios_guardados: 1, _id: 0});
 	return query.exec();
}

export let deleteAlumnoByBoleta = (boleta: number) => {
	let query = Alumno.remove({ boleta: boleta });
 	return query.exec();
}

export let getAlumnoForLogin = (boleta: number, password: string) => {
	let query = Alumno.findOne({}, visisible).and([{ boleta: boleta }, { password: password }]);
	return query.exec();
}

export let checkEmail = (email: string) => {
	let query = Alumno.findOne({email: email}, { boleta: 1, _id: 0 });
	return query.exec();
}

export let getAlumnosSorted = () => {
	let query = Alumno.find({}, visisible);
	return query.exec();
}

export let getKardexData = (boleta: number) => {
	let query = Alumno.findOne({ boleta: boleta }, kardexData);
	return query.exec();
}

export let getCode = (boleta: number) => {
	let query = Alumno.findOne({ boleta: boleta }, {_id: 0, resetPasswordCode: 1});
	return query.exec();
}

export let modifyAlumno = (boleta: number, newAlumnoData: any) => {
	let query = Alumno.update({boleta: boleta}, newAlumnoData);
	return query.exec();
}

export let setPasswordCode = (boleta: number, code: number) => {
	let query = Alumno.findOneAndUpdate({boleta: boleta}, {resetPasswordCode: code});
	return query.exec();
}