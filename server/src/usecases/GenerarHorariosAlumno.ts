import * as Bluebird from "bluebird";
const HashMap = require('hashmap');

var schedules = new HashMap();
var uas = new HashMap();

export let execute = (clases: any) => {
	clases.forEach((clase: any) => {
		if(uas.get(clase.unidad_aprendizaje)) {
			uas.get(clase.unidad_aprendizaje).byStarts.push(clase);
			uas.get(clase.unidad_aprendizaje).byEnds.push(clase);
		} else {
			uas.set(clase.unidad_aprendizaje, { byStarts: [clase], byEnds: [clase] })
		}
	})

	uas.forEach((v: any,k: string) => {
		v.byEnds.sort((a: any, b: any) => {
			return a.horarios[0].hora_fin - b.horarios[0].hora_fin;
		})
		v.byStarts.sort((a: any, b: any) => {
			return a.horarios[0].hora_inicio - b.horarios[0].hora_inicio;
		})
		/*
		v.byEnds.forEach((c: any) => {
			let new_schedule = magic(c);
			if(!schedules.get(new_schedule) && new_schedule.size == uas.size) {
				schedules.set(new_schedule, "schedule")
			}
		})
		*/
		v.byStarts.forEach((c: any) => {
			let new_schedule = magic(c);
			if(!schedules.get(new_schedule) /*&& new_schedule.size == uas.size*/) {
				schedules.set(new_schedule, "schedule")
			}
		})
	})

	console.log(JSON.stringify(schedules, null, 2));
	console.log("TOTAL => " + schedules.size);

	return 0;
}

let magic = (c: any) => {
	var new_schedule = new HashMap();

	new_schedule.set(c,c)
	uas.forEach((v: any,k: string) => {
		if(c.unidad_aprendizaje !== k) {
			console.log(c.unidad_aprendizaje + " - " + c.grupo)
			console.log(k)
			let max_end = maxEnd(new_schedule);
			let min_start = minStart(new_schedule);

			let upper = upper_bound(v.byStarts,max_end);
			let lower = lower_bound(v.byEnds,min_start);

			if (/*!new_schedule.get(v.byStarts[upper]) &&*/ upper <= v.byStarts.length && upper >= 0) {
				if(upper === v.byStarts.length) {
					new_schedule.set(v.byStarts[upper - 1],v.byStarts[upper - 1])
				} else {
					if(v.byStarts[upper].horarios[0].hora_inicio >= max_end) {
					 new_schedule.set(v.byStarts[upper],v.byStarts[upper])
					}
				}
			} else if(/*!new_schedule.get(v.byEnds[lower]) && */lower <= v.byEnds.length && lower >= 0) {
				if(lower === v.byEnds.length) {
					new_schedule.set(v.byEnds[lower - 1],v.byEnds[lower - 1])
				} else {
					if(v.byEnds[lower].horarios[0].hora_fin <= min_start) {
						new_schedule.set(v.byEnds[lower],v.byEnds[lower])
					}
				}
			} else {
				console.log("FAIL")
				console.log("upper => " + upper)
				console.log("lower => " + lower)
				console.log("max_end => " + max_end)
				console.log("min_start => " + min_start)
			}
		}
	})
	return new_schedule;
}

let maxEnd = (ends: any) => {
	let max = -1;
	ends.forEach((v: any, k: any) => {
		if(v.horarios[0].hora_fin > max) {
			max = v.horarios[0].hora_fin;
		}
	})
	return max;
}

let minStart = (starts: any) => {
	let min = 100;
	starts.forEach((v: any, k: any) => {
		if(v.horarios[0].hora_inicio < min) {
			min = v.horarios[0].hora_inicio;
		}
	})
	return min;
}

let upper_bound = (v: any, k: number) => {
	var lower: number = 0;
  var upper: number = v.length;

  while (lower < upper) {
    let middle = Math.floor((lower + upper) / 2);
    if (k >= v[middle].horarios[0].hora_inicio) lower = middle + 1;
    else upper = middle;
  }
  return lower;
}

let lower_bound = (v: any, k: number) => {
	var lower: number = 0;
  var upper: number = v.length;

  while (lower < upper) {
    let middle = Math.floor((lower + upper) / 2);
    if (k <= v[middle].horarios[0].hora_fin) upper = middle;
    else lower = middle + 1;
  }
  return lower;
}