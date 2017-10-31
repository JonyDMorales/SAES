import { Request, Response, NextFunction } from "express";

import * as UnidadAprendizajeDataSource from "../datasources/UnidadAprendizajeDataSource";

export let store = async (req: Request, res: Response) => {
	try {
		let unidadAprendizaje = await UnidadAprendizajeDataSource.saveUnidadAprendizaje(req.body);
		res.json(unidadAprendizaje).end()
	} catch(e) {
		res.json({ status: "error" }).end()
	}
};

export let index = async (req: Request, res: Response) => {
	try {
		let unidadadesAprendizaje = await UnidadAprendizajeDataSource.getAllUnidadesAprendizaje();
		res.json(unidadadesAprendizaje).end()
	} catch(e) {
		res.json({ status: "error" }).end()
	}
};

export let show = async (req: Request, res: Response) => {
	try {
		let unidadAprendizaje = await UnidadAprendizajeDataSource.getUnidadAprendizajeById(req.params.id);
		res.json(unidadAprendizaje).end()
	} catch(e) {
		res.json({ status: "error" }).end()
	}
};

export let update = async (req: Request, res: Response) => {
 	try {
		let result = await UnidadAprendizajeDataSource.modifyUnidadAprendizaje(req.params.id, req.body);
		res.json({ status: "ok" }).end()
	} catch(e) {
		res.json({ status: "error" }).end()
	}
};

export let destroy = async (req: Request, res: Response) => {
	try {
		let result = await UnidadAprendizajeDataSource.deleteUnidadAprendizajeById(req.params.id);
		res.json({ status: "ok"}).end()
	} catch(e) {
		res.json({ status: "error" }).end()
	}
};

export let search = (req: Request, res: Response) => {
	
};