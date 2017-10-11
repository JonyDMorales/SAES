import * as AlumnoDataSource from "../datasources/AlumnoDataSource";
import * as CitasReinscripcionDataSource from "../datasources/CitasReinscripcionDataSource";
import * as Bluebird from "bluebird";

export let execute = async (startDate: number, endDate: number) => {

	const Minutes: number = 1000 * 60 * 15; //Fifteen minutes
	let totalTime: number = endDate - startDate;

	let alumnos = await AlumnoDataSource.getAlumnosSorted();

	let totalAlumnos = alumnos.length;
	let rounds: number = totalTime / Minutes;
	let alumnosPerPeriod: number = Math.ceil(totalAlumnos / rounds);

	var time: number = startDate;

	console.log("Se reinscriben " + alumnosPerPeriod + " alumno(s) cada " + Minutes/(1000*60) + " minutos");
	
	var idx = 0;

	let citas = await Bluebird.map(alumnos, async (alumno: any) => {
		//let date = new Date(time);
		//console.log(date.toString());
		if(idx % alumnosPerPeriod === 0) {
			time += Minutes;
		}
		
		let cita = await CitasReinscripcionDataSource.saveCitaReinscripcion({
			boleta_alumno: alumno.boleta,
			fecha_inicio: time,
			fecha_limite: time + (1000 * 60 * 16 * 24)
		});

		return cita; 
	})

	return citas;
}