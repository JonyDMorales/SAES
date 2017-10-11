import { Request, Response, NextFunction } from "express";

import { default as CitaReinscripcion } from "../models/CitaReinscripcion";

export let store = (req: Request, res: Response) => {
  let startDate = req.body.inicio;
  let endDate = req.body.fin;

  //cita cada 5 min
  //cuantos alumnos
  //promedio
  //reprobadas

  //asigno inicio
  //asigno fin
};

export let index = (req: Request, res: Response) => {
 	let query = CitaReinscripcion.find();
 	
 	query.exec()
 	.then((citasReinscripcion) => res.json(citasReinscripcion).end())
 	.catch((err) => console.log(err));

};

export let show = (req: Request, res: Response) => {
 	
};

export let update = (req: Request, res: Response) => {
 	
};

export let destroy = (req: Request, res: Response) => {
	
};

export let search = (req: Request, res: Response) => {
	
};