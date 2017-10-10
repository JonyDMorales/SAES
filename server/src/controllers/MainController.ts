import { Request, Response } from "express";
import path = require("path");

export let index = (req: Request, res: Response) => {
	res.render('../src/views/index', { title: 'SAES', message: 'SAES' })
};