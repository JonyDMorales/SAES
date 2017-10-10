import { Request, Response, NextFunction } from "express";

import { default as PlanEstudios } from "../models/PlanEstudios";

export let store = (req: Request, res: Response) => {
  let planEstudios = new PlanEstudios(req.body);

  planEstudios.save()
  .then(() => res.json({ status: "OK"}).end())
  .catch((err) => console.log(err));
  
};

export let index = (req: Request, res: Response) => {
 	let query = PlanEstudios.find();
 	
 	query.exec()
 	.then((planesEstudio) => res.json(planesEstudio).end())
 	.catch((err) => console.log(err));

};

export let show = (req: Request, res: Response) => {
 	let query = PlanEstudios.findOne({ boleta: req.params.boleta });

 	query.exec()
 	.then((planEstudios) => res.json(planEstudios).end())
 	.catch((err) => console.log(err));
};

export let update = (req: Request, res: Response) => {
 	
};

export let destroy = (req: Request, res: Response) => {
	let query = PlanEstudios.remove({ boleta : req.params.boleta });

 	query.exec()
 	.then((planEstudios) => res.json({ status: "OK"}).end())
 	.catch((err) => console.log(err));
};

export let search = (req: Request, res: Response) => {
	
};