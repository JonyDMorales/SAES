import * as passport from "passport";
import * as passportJWT from "passport-jwt";

import { Request, Response, NextFunction } from "express";
import * as AlumnoDataSource from "./datasources/AlumnoDataSource";

const JWTStrategy = passportJWT.Strategy;
const ExtractJwt = passportJWT.ExtractJwt;

passport.use(
  new JWTStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
  }, async function (jwtPayload: any, done: any) {
  	try {
			let alumno = await AlumnoDataSource.getAlumnoByBoleta(jwtPayload.boleta);
			if (!alumno) {
        return done(new Error(), false)
      }
      return done(null, alumno)
		} catch(e) {
			return done(new Error(), false)
		} 
  })
)

export let isAlumnoAuthenticated = (req: Request, res: Response, next: NextFunction) => {
	passport.authenticate('jwt', function (err: Error, alumno: any) {
    if (err || !alumno) {
      res.status(403).send({
        error: 'Accesso NO Autorizado'
      })
    } else {
      req.user = alumno
      next()
    }
  })(req, res, next)
}