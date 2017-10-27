import { Request, Response, NextFunction } from "express";
import * as InscripcionDataSource from "../datasources/InscripcionDataSource";
import * as GetHorario from "../usecases/GetHorario";

export let store = async (req: Request, res: Response) => {
	try {
		let inscripcion = await InscripcionDataSource.saveInscripcion(req.body);
		res.json(inscripcion).end()
	} catch(e) {
		res.json({ status: "error" }).end()
	}
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
