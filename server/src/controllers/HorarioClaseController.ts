import { Request, Response, NextFunction } from "express";

import * as HorarioClasesDataSource from "../datasources/HorarioClasesDataSource";

import * as GenerarHorariosAlumno from "../usecases/GenerarHorariosAlumno";

const HashMap = require('hashmap');

export let index = async (req: Request, res: Response) => {
 	try {
		var horarios = await HorarioClasesDataSource.getHorariosSorted();
		
		var groups = new HashMap();
		var uas = new HashMap();

		horarios.forEach((horario: any) => {
			if(!groups.get(horario.grupo)) {
				groups.set(horario.grupo, {grupo: horario.grupo, clases: [horario]});
			} else {
				groups.get(horario.grupo).clases.push(horario);
			}

			if(!uas.get(horario.unidad_aprendizaje)) {
				uas.set(horario.unidad_aprendizaje, {unidad_aprendizaje: horario.unidad_aprendizaje, clases: [horario]});
			} else {
				uas.get(horario.unidad_aprendizaje).clases.push(horario);
			}
		})

		res.json({
			namegroups: groups.keys(), 
			groups: groups.values(),
			nameUAs: uas.keys(), 
			uas: uas.values()
		}).end()
	} catch(e) {
		res.json({ status: "error" }).end()
	}
};

export let make = async (req: Request, res: Response) => {
	//console.log(JSON.stringify(req.body, null, 2));
	let schedules  = await GenerarHorariosAlumno.execute(req.body);
	//console.log(JSON.stringify(schedules, null, 2));
	/*schedules.forEach((schedule: any) => {
		//console.log(JSON.stringify(schedule, null, 2));
		schedule._data.forEach((s: any) => {
			console.log(s.id)
		})
	})*/
	res.json(schedules).end();
};
