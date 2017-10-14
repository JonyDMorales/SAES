import * as Bluebird from "bluebird";
const HashMap = require('hashmap');

var schedules: any;
var uas: any;
var classes: any;

export let execute = (clases: any) => {
	classes = clases;
	uas = new HashMap();
	schedules = new HashMap();

	clases.forEach((clase: any) => {
		if(uas.get(clase.id_unidad_aprendizaje)) {
			uas.get(clase.id_unidad_aprendizaje).byStarts.push(clase);
			uas.get(clase.id_unidad_aprendizaje).byEnds.push(clase);
		} else {
			uas.set(clase.id_unidad_aprendizaje, { byStarts: [clase], byEnds: [clase] })
		}
	})

	uas.forEach((v: any,k: string) => {
		v.byEnds.sort((a: any, b: any) => {
			return toNum(a.horarios[0].hora_fin) - toNum(b.horarios[0].hora_fin);
		})
		v.byStarts.sort((a: any, b: any) => {
			return toNum(a.horarios[0].hora_inicio) - toNum(b.horarios[0].hora_inicio);
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
			console.log()
			console.log()
			console.log()
			let new_schedule = magic(c);
			let key = new_schedule.keys().join();
			if(!schedules.get(key) /*&& new_schedule.size == uas.size*/) {
				schedules.set(key, new_schedule.values())
			}
		})
	})

	console.log(JSON.stringify(schedules.values(), null, 2));
	console.log("TOTAL => " + schedules.size);

	return schedules.values();
}

let magic = (c: any) => {
	var new_schedule = new HashMap();

	new_schedule.set(c.id, getClassById(c.id))
	uas.forEach((v: any,k: string) => {
		if(c.id_unidad_aprendizaje !== k) {
			//console.log(c.id_unidad_aprendizaje + " - " + c.grupo)
			//console.log(k)
			let max_end = maxEnd(new_schedule);
			let min_start = minStart(new_schedule);

			let upper = upper_bound(v.byStarts,max_end);
			let lower = lower_bound(v.byEnds,min_start);
			console.log("LOGS")
			console.log("upper => " + upper)
			console.log("lower => " + lower)
			console.log("max_end => " + max_end)
			console.log("min_start => " + min_start)
			if (/*!new_schedule.get(v.byStarts[upper].id) &&*/ upper <= v.byStarts.length && upper >= 0) {
				if(upper === v.byStarts.length) {
					console.log("A1")
					if(!new_schedule.get(v.byStarts[upper - 1].id)) {
						console.log("B1")
						var flag = false
						new_schedule.forEach((nv: any, nk: number) => {
							if(toNum(nv.horarios[0].hora_inicio) === toNum(v.byStarts[upper - 1].horarios[0].hora_inicio)) {
								flag = true;
							}
						})
						if(!flag) {
							new_schedule.set(v.byStarts[upper - 1].id,getClassById(v.byStarts[upper - 1].id))
						}
					}
				} else {
					console.log("C1")
					if(toNum(v.byStarts[upper].horarios[0].hora_inicio) >= max_end) {
					 new_schedule.set(v.byStarts[upper].id,getClassById(v.byStarts[upper].id))
					}
				}
			} else if(/*!new_schedule.get(v.byEnds[lower].id) &&*/ lower <= v.byEnds.length && lower >= 0) {
				if(lower === v.byEnds.length) {
					console.log("A2")
					if(!new_schedule.get(v.byEnds[lower - 1].id)) {
						console.log("B2")
						var flag = false
						new_schedule.forEach((nv: any, nk: number) => {
							if(toNum(nv.horarios[0].hora_inicio) === toNum(v.byEnds[lower - 1].horarios[0].hora_inicio)) {
								flag = true;
							}
						})
						if(!flag) {
							new_schedule.set(v.byEnds[lower - 1].id,getClassById(v.byEnds[lower - 1].id))
						}
					}
				} else {
					console.log("C2")
					if(toNum(v.byEnds[lower].horarios[0].hora_fin) <= min_start) {
						new_schedule.set(v.byEnds[lower].id,getClassById(v.byEnds[lower].id))
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
		if(toNum(v.horarios[0].hora_fin) > max) {
			max = toNum(v.horarios[0].hora_fin);
		}
	})
	return max;
}

let minStart = (starts: any) => {
	let min = 100;
	starts.forEach((v: any, k: any) => {
		if(toNum(v.horarios[0].hora_inicio) < min) {
			min = toNum(v.horarios[0].hora_inicio);
		}
	})
	return min;
}

let upper_bound = (v: any, k: number) => {
	var lower: number = 0;
  var upper: number = v.length;

  while (lower < upper) {
    let middle = Math.floor((lower + upper) / 2);
    if (k >= toNum(v[middle].horarios[0].hora_inicio)) lower = middle + 1;
    else upper = middle;
  }
  return lower;
}

let lower_bound = (v: any, k: number) => {
	var lower: number = 0;
  var upper: number = v.length;

  while (lower < upper) {
    let middle = Math.floor((lower + upper) / 2);
    if (k <= toNum(v[middle].horarios[0].hora_fin)) upper = middle;
    else lower = middle + 1;
  }
  return lower;
}

let toNum = (str: string) => {
	let n = str.replace(':','.');
	return parseFloat(n);
}

let getClassById = (id: number) => {
	for (var i = classes.length - 1; i >= 0; i--) {
		if(classes[i].id === id) {
			return classes[i];
		}
	}
}