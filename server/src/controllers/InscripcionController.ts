import { Request, Response, NextFunction } from "express";
import * as InscripcionDataSource from "../datasources/InscripcionDataSource";
import * as GetHorario from "../usecases/GetHorario";
import * as ReinscribirAlumno from "../usecases/ReinscribirAlumno";
import * as Pusher from "../pusher";

export let store = async (req: Request, res: Response) => {
	let result = await ReinscribirAlumno.execute(req.body);
	Pusher.trigger('inscripcion-channel', 'onNewInscription', result);
	res.json(result).end()
};

export let index = async (req: Request, res: Response) => {
	try {
		let inscripciones = await InscripcionDataSource.getAll();
		res.json(inscripciones).end()
	} catch(e) {
		res.json({ status: "error" }).end()
	}
};

export let show = async (req: Request, res: Response) => {
	let result = await GetHorario.execute(req.params.boleta);
	res.json(result).end()
};
