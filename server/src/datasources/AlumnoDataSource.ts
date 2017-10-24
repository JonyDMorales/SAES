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

export let saveAlumno = (alumnoData: any) => {
	let alumno = new Alumno(alumnoData);
	return alumno.save();
}

export let addBookmark = (boleta: number, schedule: any) => {
	let query = Alumno.findOneAndUpdate({boleta: boleta}, {$push: {"horarios_guardados": schedule}});
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

export let deleteAlumnoByBoleta = (boleta: number) => {
	let query = Alumno.remove({ boleta: boleta });
 	return query.exec();
}

export let getAlumnoForLogin = (boleta: number, password: string) => {
	let query = Alumno.findOne({}, visisible).and([{ boleta: boleta }, { password: password }]);
	return query.exec();
}

export let getAlumnosSorted = () => {
	let query = Alumno.find({}, visisible).sort({numero_unidades_reprobadas: 1, promedio_general: -1});
	return query.exec();
}

export let getKardexData = (boleta: number) => {
	let query = Alumno.findOne({ boleta: boleta }, kardexData);
	return query.exec();
}

export let modifyAlumno = (boleta: number, newAlumnoData: any) => {
	let query = Alumno.update({boleta: boleta}, newAlumnoData);
	return query.exec();
}