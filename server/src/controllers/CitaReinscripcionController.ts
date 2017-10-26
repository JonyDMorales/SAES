import { Request, Response, NextFunction } from "express";

import * as CitasReinscripcionDataSource from "../datasources/CitasReinscripcionDataSource";
import * as GenerarCitas from "../usecases/GenerarCitas";


export let store = async (req: Request, res: Response) => {
  let citas = await GenerarCitas.execute(req.body);
  res.json(citas).end();
};

export let index = async (req: Request, res: Response) => {
	try {
		let citas = await CitasReinscripcionDataSource.getAllCitas();
		res.json(citas).end()
	} catch(e) {
		res.json({ status: "error" }).end()
	}
};

export let show = async (req: Request, res: Response) => {
 	try {
		let cita = await CitasReinscripcionDataSource.getCitaByBoleta(req.params.boleta);
		res.json(cita).end()
	} catch(e) {
		res.json({ status: "error" }).end()
	}
};

export let update = (req: Request, res: Response) => {
 	
};

export let destroy = (req: Request, res: Response) => {
	
};

export let search = (req: Request, res: Response) => {
	
};