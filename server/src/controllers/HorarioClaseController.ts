import { Request, Response, NextFunction } from "express";

import { default as HorarioClase } from "../models/HorarioClase";
import * as GenerarHorariosAlumno from "../usecases/GenerarHorariosAlumno";

const HashMap = require('hashmap');

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

export let make = async (req: Request, res: Response) => {
	res.json({ status: "OK"}).end();


	let clases = [
		{
			profesor: "Alberto",
			unidad_aprendizaje: "Matemáticas",
			grupo: "2CM1",
			horarios: 
			[
				{
					dia: "Lunes",
					hora_inicio: 8,
					hora_fin: 9
				},
				{
					dia: "Martes",
					hora_inicio: 8,
					hora_fin: 9
				},
				{
					dia: "Viernes",
					hora_inicio: 7,
					hora_fin: 8
				}
			]
		},
		{
			profesor: "Daniel",
			unidad_aprendizaje: "Matemáticas",
			grupo: "2CM11",
			horarios: 
			[
				{
					dia: "Lunes",
					hora_inicio: 8,
					hora_fin: 9
				},
				{
					dia: "Martes",
					hora_inicio: 8,
					hora_fin: 9
				},
				{
					dia: "Viernes",
					hora_inicio: 7,
					hora_fin: 8
				}
			]
		},
		{
			profesor: "Alberto",
			unidad_aprendizaje: "Matemáticas",
			grupo: "2CM2",
			horarios: 
			[
				{
					dia: "Lunes",
					hora_inicio: 9,
					hora_fin: 10
				},
				{
					dia: "Miercoles",
					hora_inicio: 9,
					hora_fin: 10
				},
				{
					dia: "Jueves",
					hora_inicio: 8,
					hora_fin: 9
				}
			]
		},
		{
			profesor: "Carlos",
			unidad_aprendizaje: "Química",
			grupo: "2CM2",
			horarios: 
			[
				{
					dia: "Lunes",
					hora_inicio: 8,
					hora_fin: 9
				},
				{
					dia: "Martes",
					hora_inicio: 8,
					hora_fin: 9
				},
				{
					dia: "Viernes",
					hora_inicio: 7,
					hora_fin: 8
				}
			]
		},
		{
			profesor: "Daniel",
			unidad_aprendizaje: "Química",
			grupo: "2CM11",
			horarios: 
			[
				{
					dia: "Lunes",
					hora_inicio: 7,
					hora_fin: 8
				},
				{
					dia: "Martes",
					hora_inicio: 7,
					hora_fin: 8
				},
				{
					dia: "Viernes",
					hora_inicio: 7,
					hora_fin: 8
				}
			]
		},
		{
			profesor: "Lidia",
			unidad_aprendizaje: "Física",
			grupo: "2CM1",
			horarios: 
			[
				{
					dia: "Lunes",
					hora_inicio: 9,
					hora_fin: 10
				},
				{
					dia: "Martes",
					hora_inicio: 8,
					hora_fin: 9
				},
				{
					dia: "Viernes",
					hora_inicio: 7,
					hora_fin: 8
				}
			]
		},
		{
			profesor: "Lidia",
			unidad_aprendizaje: "Física",
			grupo: "2CM11",
			horarios: 
			[
				{
					dia: "Lunes",
					hora_inicio: 10,
					hora_fin: 12
				},
				{
					dia: "Martes",
					hora_inicio: 8,
					hora_fin: 9
				},
				{
					dia: "Viernes",
					hora_inicio: 7,
					hora_fin: 8
				}
			]
		},
		{
			profesor: "Erick",
			unidad_aprendizaje: "Historia",
			grupo: "2CM10",
			horarios: 
			[
				{
					dia: "Lunes",
					hora_inicio: 7,
					hora_fin: 8
				},
				{
					dia: "Martes",
					hora_inicio: 8,
					hora_fin: 9
				},
				{
					dia: "Viernes",
					hora_inicio: 7,
					hora_fin: 8
				}
			]
		},
		{
			profesor: "Pablo",
			unidad_aprendizaje: "Historia",
			grupo: "2CM3",
			horarios: 
			[
				{
					dia: "Lunes",
					hora_inicio: 11,
					hora_fin: 13
				},
				{
					dia: "Martes",
					hora_inicio: 8,
					hora_fin: 9
				},
				{
					dia: "Viernes",
					hora_inicio: 7,
					hora_fin: 8
				}
			]
		},
		{
			profesor: "José",
			unidad_aprendizaje: "Programación",
			grupo: "2CM4",
			horarios: 
			[
				{
					dia: "Lunes",
					hora_inicio: 13,
					hora_fin: 14
				},
				{
					dia: "Martes",
					hora_inicio: 8,
					hora_fin: 9
				},
				{
					dia: "Viernes",
					hora_inicio: 7,
					hora_fin: 8
				}
			]
		}
	]

	let _  = await GenerarHorariosAlumno.execute(clases);

};
