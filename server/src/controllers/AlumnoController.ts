import { Request, Response, NextFunction } from "express";
import * as dotenv from "dotenv";
const JsonWebToken = require("jsonwebtoken"); 

import { default as Alumno } from "../models/Alumno";
import * as AlumnoDataSource from "../datasources/AlumnoDataSource";

dotenv.config({ path: ".env" });

export let store = async (req: Request, res: Response) => {
	try {
		let alumno = await AlumnoDataSource.saveAlumno(req.body);
		res.json({ alumno: alumno }).end()
	} catch(e) {
		res.json({ status: "error" }).end()
	}
};

export let index = (req: Request, res: Response) => {
 	let query = Alumno.find();
 	
 	query.exec()
 	.then((alumnos) => res.json(alumnos).end())
 	.catch((err) => console.log(err));

};

export let show = (req: Request, res: Response) => {
 	let query = Alumno.findOne({ boleta: req.params.boleta });

 	query.exec()
 	.then((alumno) => res.json(alumno).end())
 	.catch((err) => console.log(err));
};

export let update = (req: Request, res: Response) => {
 	
};

export let destroy = (req: Request, res: Response) => {
	let query = Alumno.remove({ boleta : req.params.boleta });

 	query.exec()
 	.then((alumno) => res.json({ status: "OK"}).end())
 	.catch((err) => console.log(err));
};

export let search = (req: Request, res: Response) => {
	
};

export let login = (req: Request, res: Response) => {
	let boleta = req.body.boleta;
	let password = req.body.password;

	let query = Alumno.findOne().and([{ boleta: boleta }, { password: password }]);

	query.exec()
 	.then((alumno) => {
 		if(alumno) {
 			res.json({alumno: alumno, token: loginToken(alumno.toJSON()), status: "ok"}).end();
 		} else {
 			res.json({status: "error", errors: ['Los datos son incorrectos']}).end();
 		}
 	})
 	.catch((err) => console.log(err));
};

let loginToken = (alumno: any) => {
	return JsonWebToken.sign(alumno, process.env.JWT_SECRET, {expiresIn: 60 * 60 * 24 * 7});
}
