import { Request, Response, NextFunction } from "express";
import * as dotenv from "dotenv";
const JsonWebToken = require("jsonwebtoken"); 

import * as ProfesorDataSource from "../datasources/ProfesorDataSource";

dotenv.config({ path: ".env" });

export let store = async (req: Request, res: Response) => {
	try {
		let profesor = await ProfesorDataSource.saveProfesor(req.body);
		res.json(profesor).end()
	} catch(e) {
		res.json({ status: "error" }).end()
	}
};

export let index = async (req: Request, res: Response) => {
	try {
		let profesores = await ProfesorDataSource.getAllProfesors();
		res.json(profesores).end()
	} catch(e) {
		res.json({ status: "error" }).end()
	}
};

export let show = async (req: Request, res: Response) => {
	try {
		let profesor = await ProfesorDataSource.getProfesorById(req.params.id);
		res.json(profesor).end()
	} catch(e) {
		res.json({ status: "error" }).end()
	}
};

export let update = (req: Request, res: Response) => {
 	
};

export let destroy = async (req: Request, res: Response) => {
	try {
		let result = await ProfesorDataSource.deleteProfesorById(req.params.id);
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
		
		let profesor = await ProfesorDataSource.getProfesorByIdAndPassword(id, password);
		if(profesor) {
 			res.json({profesor: profesor, token: loginToken(profesor.toJSON()), status: "ok"}).end();
 		} else {
 			res.json({status: "error", errors: ['Los datos son incorrectos']}).end();
 		}
	} catch(e) {
		res.json({status: "error"}).end();
	}
};

let loginToken = (profesor: any) => {
	return JsonWebToken.sign(profesor, process.env.JWT_SECRET, {expiresIn: 60 * 60 * 24 * 7});
}
