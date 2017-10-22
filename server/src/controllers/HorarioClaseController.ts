import { Request, Response, NextFunction } from "express";

import * as HorarioClasesDataSource from "../datasources/HorarioClasesDataSource";

import * as GenerarHorariosAlumno from "../usecases/GenerarHorariosAlumno";

export let index = async (req: Request, res: Response) => {
 	try {
		var horarios = await HorarioClasesDataSource.getHorariosSorted();
		res.json(horarios).end()
	} catch(e) {
		res.json({ status: "error" }).end()
	}
};

export let make = (req: Request, res: Response) => {
	let schedules = GenerarHorariosAlumno.execute(req.body);
	res.json(schedules).end();
};
