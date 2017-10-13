import { Request, Response, NextFunction } from "express";
import * as dotenv from "dotenv";
const JsonWebToken = require("jsonwebtoken"); 

import * as AnalistaDataSource from "../datasources/AnalistaDataSource";

dotenv.config({ path: ".env" });

export let store = async (req: Request, res: Response) => {
	try {
		let analista = await AnalistaDataSource.saveAnalista(req.body);
		res.json(analista).end()
	} catch(e) {
		res.json({ status: "error" }).end()
	}
};

export let index = async (req: Request, res: Response) => {
	try {
		let analistas = await AnalistaDataSource.getAllAnalistas();
		res.json(analistas).end()
	} catch(e) {
		res.json({ status: "error" }).end()
	}
};

export let show = async (req: Request, res: Response) => {
	try {
		let analista = await AnalistaDataSource.getAnalistaById(req.params.id);
		res.json(analista).end()
	} catch(e) {
		res.json({ status: "error" }).end()
	}
};

export let update = (req: Request, res: Response) => {
 	
};

export let destroy = async (req: Request, res: Response) => {
	try {
		let result = await AnalistaDataSource.deleteAnalistaById(req.params.id);
		res.json({ status: "ok"}).end()
	} catch(e) {
		res.json({ status: "error" }).end()
	}
};

export let search = (req: Request, res: Response) => {
	
};

export let login = async (req: Request, res: Response) => {
	try {
		let id = req.body.id;
		let password = req.body.password;
		
		let analista = await AnalistaDataSource.getAnalistaByIdAndPassword(id, password);
		if(analista) {
 			res.json({analista: analista, token: loginToken(analista.toJSON()), status: "ok"}).end();
 		} else {
 			res.json({status: "error", errors: ['Los datos son incorrectos']}).end();
 		}
	} catch(e) {
		res.json({status: "error"}).end();
	}
};

let loginToken = (analista: any) => {
	return JsonWebToken.sign(analista, process.env.JWT_SECRET, {expiresIn: 60 * 60 * 24 * 7});
}
