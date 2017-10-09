import { Request, Response, NextFunction } from "express";

import { default as UnidadAprendizaje } from "../models/UnidadAprendizaje";

export let store = (req: Request, res: Response) => {
  let unidadAprendizaje = new UnidadAprendizaje(req.body);

  unidadAprendizaje.save()
  .then(() => res.json({ status: "OK"}).end())
  .catch((err) => console.log(err));
  
};

export let index = (req: Request, res: Response) => {
 	let query = UnidadAprendizaje.find();
 	
 	query.exec()
 	.then((unidadesAprendizaje) => res.json(unidadesAprendizaje).end())
 	.catch((err) => console.log(err));

};

export let show = (req: Request, res: Response) => {
 	let query = UnidadAprendizaje.findOne({ id: req.params.id });

 	query.exec()
 	.then((unidadAprendizaje) => res.json(unidadAprendizaje).end())
 	.catch((err) => console.log(err));
};

export let update = (req: Request, res: Response) => {
 	
};

export let destroy = (req: Request, res: Response) => {
	let query = UnidadAprendizaje.remove({ id : req.params.id });

 	query.exec()
 	.then((unidadAprendizaje) => res.json({ status: "OK"}).end())
 	.catch((err) => console.log(err));
};

export let search = (req: Request, res: Response) => {
	
};