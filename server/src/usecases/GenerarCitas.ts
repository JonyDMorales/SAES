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
	console.log("TOTAL DIAS => " + totalDays)
	let totalTimePerDay: number = opts.endTime - opts.startTime;
	console.log("TOTAL TIME PER DAY => " + totalTimePerDay)
	let totalPeriod = totalDays * totalTimePerDay;
	let totalMinutes: number = Math.floor(totalPeriod / Minute);
	console.log('TOTAL MINUTES => ' + totalMinutes)
	let minutesFactor: number =  Math.ceil((Minute * 15) / (1000 * 60));
	let rounds:number = Math.ceil(totalMinutes / minutesFactor);
	console.log('ROUNDS => ' + rounds)
	let alumnos = await AlumnoDataSource.getAlumnosSorted();
	let alumnosPerPeriod: number = Math.ceil(alumnos.length / rounds);
	console.log("Se reinscriben " + alumnosPerPeriod + " alumno(s) cada " + minutesFactor + " minutos");
	
	var idx = 1;
	var time: number = opts.startDate;

	var infoCitas: any[] = []
	var limitDay: number = opts.startDate;

	//let citas = await Bluebird.map(alumnos, async (alumno: any) => {
	//let cita = await CitasReinscripcionDataSource.saveCitaReinscripcion(
	alumnos.forEach((alumno: any) => { 
		infoCitas.push({
			boleta_alumno: alumno.boleta,
			nombre_alumno: alumno.nombre,
			fecha_inicio: new Date(time).toString(),
			fecha_limite: new Date(time + (1000 * 60 * 60 * 24)).toString()
		});
		let nextLimit:number = limitDay + totalTimePerDay;
		console.log(time + ' <***> ' + nextLimit)
		if(time < nextLimit) {
			if (idx % alumnosPerPeriod === 0) {
				time += (minutesFactor * 1000 * 60);
			}
		} else {
			console.log("debe entrar")
			time += Day;
			time -= totalTimePerDay;
			limitDay = time;
		}
		idx++;
	})
	
	console.log(JSON.stringify(infoCitas, null, 2))
	return infoCitas;
}