import { Request, Response, NextFunction } from "express";

import * as CitasReinscripcionDataSource from "../datasources/CitasReinscripcionDataSource";
import * as GenerarCitas from "../usecases/GenerarCitas";


export let store = async (req: Request, res: Response) => {
  let startDate = req.body.startDate;
  let endDate = req.body.endDate;

  let citas = await GenerarCitas.execute(startDate, endDate);
  res.json(citas).end();
};

export let index = (req: Request, res: Response) => {
	
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