import * as AlumnoDataSource from "../datasources/AlumnoDataSource";
import * as CitasReinscripcionDataSource from "../datasources/CitasReinscripcionDataSource";
import * as Bluebird from "bluebird";

export let execute = async (opts: any) => {

	const Second: number = 1000;
	const Minute: number = Second * 60;
	const Hour: number = Minute * 60;
	const Day: number = Hour * 24;
	const Week: number = Day * 7;
	
	let totalMiliSeconds: number = opts.endDate - opts.startDate;
	let totalDays: number = Math.floor(totalMiliSeconds / Day);
	let totalTimePerDay: number = opts.endTime - opts.startTime;
	let totalPeriod = totalDays * totalTimePerDay;
	let totalMinutes: number = Math.floor(totalPeriod / Minute);
	let minutesFactor: number =  Math.ceil((Minute * 15) / (1000 * 60));
	let rounds:number = Math.ceil(totalMinutes / minutesFactor);
	let alumnos = await AlumnoDataSource.getAlumnosSorted();
	let alumnosPerPeriod: number = Math.ceil(alumnos.length / rounds);
	
	var idx = 1;
	var time: number = opts.startDate;

	var infoCitas: any[] = []
	var limitDay: number = opts.startDate;

	alumnos.forEach((alumno: any) => { 
		infoCitas.push({
			boleta_alumno: alumno.boleta,
			nombre_alumno: alumno.nombre,
			fecha_inicio: time,
			fecha_limite: time + (1000 * 60 * 60 * 24)
		});
		let nextLimit:number = limitDay + totalTimePerDay;
		if(time < nextLimit) {
			if (idx % alumnosPerPeriod === 0) {
				time += (minutesFactor * 1000 * 60);
			}
		} else {
			time += Day;
			time -= totalTimePerDay;
			limitDay = time;
		}
		idx++;
	})
	
	let citas = await Bluebird.map(infoCitas, async (infoCita: any) => {
		let cita = await CitasReinscripcionDataSource.saveCitaReinscripcion(infoCita)
		return cita;
	})

	return citas;
}