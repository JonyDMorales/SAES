import { Request, Response, NextFunction } from "express";

import { default as Alumno } from "../models/Alumno";

export let store = (req: Request, res: Response) => {
  res.sendStatus(200).end();

  let alumno = new Alumno(req.body);

  alumno.save()
  .then(() => console.log("SAVED!!!"))
  .catch((err) => console.log(err));
  
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