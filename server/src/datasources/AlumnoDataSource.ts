import { default as Alumno } from "../models/Alumno";

export let saveAlumno = (alumnoData: any) => {
	let alumno = new Alumno(alumnoData);
	return alumno.save();
}

export let getAllAlumnos = () => {
	let query = Alumno.find();
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

export let getAlumnoByBoletaAndPassword = (boleta: number, password: string) => {
	let query = Alumno.findOne().and([{ boleta: boleta }, { password: password }]);
	return query.exec();
}