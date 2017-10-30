import { Request, Response, NextFunction } from "express";
import * as dotenv from "dotenv";
const JsonWebToken = require("jsonwebtoken");
const Nodemailer = require('nodemailer');

import * as AlumnoDataSource from "../datasources/AlumnoDataSource";
import * as GetBookmarks from "../usecases/GetBookmarks";


dotenv.config({ path: ".env" });

export let emailExists = async (req: Request, res: Response) => {
	try {
		let result = await AlumnoDataSource.checkEmail(req.params.email);
		if(result) {
			res.json({isTaken: true}).end()
		} else {
			res.json({isTaken: false}).end()
		}
	} catch(e) {
		res.json({ status: "error" }).end()
	}
};

export let store = async (req: Request, res: Response) => {
	try {
		let alumno = await AlumnoDataSource.saveAlumno(req.body);
		res.json(alumno).end()
	} catch(e) {
		res.json({ status: "error" }).end()
	}
};

export let index = async (req: Request, res: Response) => {
	try {
		let alumnos = await AlumnoDataSource.getAllAlumnos();
		res.json(alumnos).end()
	} catch(e) {
		res.json({ status: "error" }).end()
	}
};

export let show = async (req: Request, res: Response) => {
	try {
		let alumno = await AlumnoDataSource.getAlumnoByBoleta(req.params.boleta);
		res.json(alumno).end()
	} catch(e) {
		res.json({ status: "error" }).end()
	}
};

export let update = async (req: Request, res: Response) => {
 	try {
		let result = await AlumnoDataSource.modifyAlumno(req.params.boleta, req.body);
		res.json({ status: "ok" }).end()
	} catch(e) {
		res.json({ 
			status: "error",
			error: e
		}).end()
	}
};

export let kardex = async (req: Request, res: Response) => {
 	try {
		let kardexData = await AlumnoDataSource.getKardexData(req.params.boleta);
		res.json(kardexData).end()
	} catch(e) {
		res.json({ status: "error" }).end()
	}
};

export let destroy = async (req: Request, res: Response) => {
	try {
		let result = await AlumnoDataSource.deleteAlumnoByBoleta(req.params.boleta);
		res.json({ status: "OK"}).end()
	} catch(e) {
		res.json({ status: "error" }).end()
	}
};

export let search = (req: Request, res: Response) => {
	
};

export let login = async (req: Request, res: Response) => {
	try {
		let boleta = req.body.boleta;
		let password = req.body.password;
		
		let alumno = await AlumnoDataSource.getAlumnoForLogin(boleta, password);
		if(alumno) {
 			res.json({alumno: alumno, token: loginToken(alumno.toJSON()), status: "ok"}).end();
 		} else {
 			res.json({status: "error", errors: ['Los datos son incorrectos']}).end();
 		}
	} catch(e) {
		res.json({status: "error"}).end();
	}
};

export let storeBookmark = async (req: Request, res: Response) => {
	try {
		let _ = await AlumnoDataSource.addBookmark(req.params.boleta, req.body);
		res.json({ status: "ok" }).end()
	} catch(e) {
		res.json({ status: "error" }).end()
	}
};

export let bookmarks = async (req: Request, res: Response) => {
	let result = await GetBookmarks.execute(req.params.boleta);
	res.json(result).end()
};

export let checkCode = async (req: Request, res: Response) => {
	try {
		let result: any = await AlumnoDataSource.getCode(req.params.boleta);
		if (result.resetPasswordCode === parseInt(req.body.code)) {
			res.json({ error: false, msg: 'Código Correcto' }).end()
		} else {
			res.json({ error: true, msg: 'Código Incorrecto' }).end()
		}
	} catch(e) {
		res.json({ error: true, msg: 'Error del servidor' }).end()
	}
};

export let sendEmailPasswordReset = async (req: Request, res: Response) => {
	let code: number = Math.floor((Math.random() * 999999) + 100000);
	let result: any = await AlumnoDataSource.setPasswordCode(req.params.boleta, code);
	if(!result) {
		res.json({error: true, errors: ['Número de boleta incrorrecto']}).end()
	} else {
		res.json({error: false, msg: 'Hemos enviado el código a la dirección: ' + result.email}).end()
	}
	Nodemailer.createTestAccount((err: any, account: any) => {
		let transporter = Nodemailer.createTransport({
			host: 'smtp.gmail.com',
			port: 465,
			secure: true,
			auth: {
				user: 'saes.ipn.escom@gmail.com',
				pass: 'Sjt7gNkNECmr2lDM'
			}
		});
	
		let mailOptions = {
			from: '"SAES::ESCOM" <saes.ipn.escom@gmail.com>',
			to: result.email,
			subject: 'Restrablecer Contraseña SAES',
			text: '',
			html: '<h2>El código para restablecer la contraseña es: <b>' + String(code) + '</b></h2><br><span>Él código expira en 10 minutos.</span>'
		};
	
		transporter.sendMail(mailOptions, (error: any, info: any) => {
			if (error) {
				return console.log(error);
			}
		});
	});	
};

let loginToken = (alumno: any) => {
	return JsonWebToken.sign(alumno, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 24 * 7 });
}
