import { Request, Response, NextFunction } from "express";

import * as HorarioClasesDataSource from "../datasources/HorarioClasesDataSource";

import * as GenerarHorariosAlumno from "../usecases/GenerarHorariosAlumno";

const HashMap = require('hashmap');

export let index = async (req: Request, res: Response) => {
 	try {
		var horarios = await HorarioClasesDataSource.getHorariosSorted();
		res.json(horarios).end()
	} catch(e) {
		res.json({ status: "error" }).end()
	}
};

export let make = async (req: Request, res: Response) => {
	// console.log(JSON.stringify(req.body, null, 2));
	let schedules  = await GenerarHorariosAlumno.execute(req.body);
	res.json(schedules).end();
};
