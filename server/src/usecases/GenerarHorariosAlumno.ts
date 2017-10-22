const Bucket = require('buckets-js');
const Combinatorics = require('js-combinatorics');

var classes: any;

export let execute = (clases: any) => {
	// console.log(JSON.stringify(clases, null, 2));
	var schedules: any[] = [];
	var uas = new Bucket.Dictionary();

	classes = clases;

	clases.forEach((clase: any) => {
		if(uas.get(clase.id_unidad_aprendizaje)) {
			uas.get(clase.id_unidad_aprendizaje).push(clase.id);
		} else {
			uas.set(clase.id_unidad_aprendizaje, [clase.id])
		}
	})
	// console.log(uas.values())
	var possibleSchedulesIds = Combinatorics.cartesianProduct(...uas.values());

	possibleSchedulesIds.toArray().forEach((possibleScheduleId: number[]) => {
		if (isValid(possibleScheduleId)) {
			var schedule: any[] = []
			possibleScheduleId.forEach((scheduleId: number) => {
				schedule.push(getClassById(scheduleId))
			})
			schedules.push(schedule)
		}
	})
	// console.log(JSON.stringify(schedules, null, 2));
	return schedules;
}

let isValid = (possibleSchedule: number[]) => {
	var hoursDays = new Bucket.Set();
	var prevSize = 0;
	var valid = true;
	for (var idx = 0; idx < possibleSchedule.length; idx++) {
		let clase = getClassById(possibleSchedule[idx]);
		for (var jdx = 0; jdx < clase.horarios.length; jdx++) {
			if (clase.horarios[jdx].hora_inicio.length > 0) {
				let key = clase.horarios[jdx].dia + clase.horarios[jdx].hora_inicio + clase.horarios[jdx].hora_fin;
				hoursDays.add(key)
				if (prevSize === hoursDays.size()) {
					valid = false;
					break;
				} else {
					prevSize = hoursDays.size();
				}
			}
		}
		if (!valid) break;
	}
	return valid;
}

let getClassById = (id: number) => {
	for (var i = classes.length - 1; i >= 0; i--) {
		if(classes[i].id === id) {
			return classes[i];
		}
	}
}
