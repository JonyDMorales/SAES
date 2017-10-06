import { Request, Response, NextFunction } from "express";

import { default as Alumno } from "../models/Alumno";

export let store = (req: Request, res: Response) => {
  res.sendStatus(200).end();

  let alumno = new Alumno(req.body.alumno);

  alumno.save()
  .then(() => console.log("SAVED!!!"))
  .catch((err) => console.log(err));

};

export let index = (req: Request, res: Response) => {
 	let query = Alumno.find();
 	
 	query.exec()
 	.then((alumnos) => {
 		res.json({'alumnos' : alumnos}).end();
 	})
 	.catch((err) => console.log(err));

};