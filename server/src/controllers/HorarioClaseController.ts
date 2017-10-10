import { Request, Response, NextFunction } from "express";

import { default as HorarioClase } from "../models/HorarioClase";

export let store = (req: Request, res: Response) => {
  let horarioClase = new HorarioClase(req.body);

  horarioClase.save()
  .then(() => res.json({ status: "OK"}).end())
  .catch((err) => console.log(err));
  
};

export let index = (req: Request, res: Response) => {
 	let query = HorarioClase.find();
 	
 	query.exec()
 	.then((horariosClase) => res.json(horariosClase).end())
 	.catch((err) => console.log(err));

};

export let show = (req: Request, res: Response) => {
 	let query = HorarioClase.findOne({ boleta: req.params.boleta });

 	query.exec()
 	.then((horarioClase) => res.json(horarioClase).end())
 	.catch((err) => console.log(err));
};

export let update = (req: Request, res: Response) => {
 	
};

export let destroy = (req: Request, res: Response) => {
	let query = HorarioClase.remove({ boleta : req.params.boleta });

 	query.exec()
 	.then((horarioClase) => res.json({ status: "OK"}).end())
 	.catch((err) => console.log(err));
};

export let search = (req: Request, res: Response) => {
	
};