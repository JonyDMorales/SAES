import { Request, Response, NextFunction } from "express";

import * as HorarioClasesDataSource from "../datasources/HorarioClasesDataSource";

import * as GenerarHorariosAlumno from "../usecases/GenerarHorariosAlumno";

import * as Pusher from "../pusher";

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

export let occupability = async (req: Request, res: Response) => {
	try {
		let cSchedule: any = await HorarioClasesDataSource.updateOccupability(req.params.id, req.body.inc);
		let result = [{
			id: cSchedule.id,
			lugares: cSchedule.lugares_disponibles,
			inscritos: cSchedule.alumnos_inscritos + req.body.inc
		}]
		Pusher.trigger('inscripcion-channel', 'onNewInscription', result);
		res.json(result).end()
	} catch (err) {
		res.json({ status: "error" }).end()
	}
};
