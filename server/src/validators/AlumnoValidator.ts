import { Request, Response, NextFunction } from "express";
const Joi =require('joi');

export let store = (req: Request, res: Response, next: NextFunction) => {
	let schema = {
		nombres: Joi.string().min(3),
		apellido_paterno: Joi.string().min(2),
		apellido_materno: Joi.string().min(1),
		email: Joi.string().email().min(1)
	}
	
	const { error } = Joi.validate(req.body, schema, {abortEarly: false});

	if(error) {
		res.status(400).send({
			error: error.details.map((err: any) => err.message)
    })

	} else next();
};

export let login = (req: Request, res: Response, next: NextFunction) => {
	let schema = {
		email: Joi.string().email().min(1)
	}
	
	const { error } = Joi.validate(req.body, schema, {abortEarly: false});

	if(error) {
		res.status(400).send({
			error: error.details.map((err: any) => err.message)
    })
	} else next();
}