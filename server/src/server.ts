import * as express from "express";
import * as bodyParser from "body-parser";
import * as dotenv from "dotenv";
import * as mongoose from "mongoose";
import * as passport from "passport";
var cors = require('cors');

import * as MainController from "./controllers/MainController";
import * as AlumnoController from "./controllers/AlumnoController";
import * as UnidadAprendizajeController from "./controllers/UnidadAprendizajeController";
import * as HorarioClaseController from "./controllers/HorarioClaseController";
import * as PlanEstudiosController from "./controllers/PlanEstudiosController";
import * as CitaReinscripcionController from "./controllers/CitaReinscripcionController";
import * as AnalistaController from "./controllers/AnalistaController";
import * as ProfesorController from "./controllers/ProfesorController";

import * as Middleware from "./config";

dotenv.config({ path: ".env" });

(mongoose as any).Promise = global.Promise;

mongoose.connect(process.env.MONGOLAB_URI, { useMongoClient: true })
    .then(() => console.log("MongoDB is ready"))
    .catch(err => console.log("MongoDB connection error. Please make sure MongoDB is running."));

const app = express();

app.set("port", process.env.PORT || 8080);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.listen(app.get("port"), () => {
  console.log(("App is running at http://localhost:%d"), app.get("port"));
  console.log("Press ctrl-c to stop\n");
});

app.get("/", MainController.index);

app.get("/alumno", AlumnoController.index);
app.post("/alumno", AlumnoController.store);
app.get("/alumno/:boleta", AlumnoController.show);
app.delete("/alumno/:boleta", AlumnoController.destroy);
app.put("/alumno/:boleta", AlumnoController.update);
app.post("/alumno/login", AlumnoController.login);
app.get("/alumno/:boleta/kardex", AlumnoController.kardex);
app.get("/alumno/:boleta/horario", AlumnoController.bookmarks)
app.post("/alumno/:boleta/horario", AlumnoController.storeBookmark)

app.get("/analista", AnalistaController.index);
app.post("/analista", AnalistaController.store);
app.get("/analista/:id", AnalistaController.show);
app.delete("/analista/:id", AnalistaController.destroy);
app.put("/analista/:id", AnalistaController.update);
app.post("/analista/id", AnalistaController.login);

app.get("/profesor", ProfesorController.index);
app.post("/profesor", ProfesorController.store);
app.get("/profesor/:id", ProfesorController.show);
app.delete("/profesor/:id", ProfesorController.destroy);
app.put("/profesor/:id", ProfesorController.update);
app.post("/profesor/login", ProfesorController.login);

app.get("/unidad_aprendizaje", UnidadAprendizajeController.index);
app.post("/unidad_aprendizaje", UnidadAprendizajeController.store);
app.get("/unidad_aprendizaje/:id", UnidadAprendizajeController.show);
app.delete("/unidad_aprendizaje/:id", UnidadAprendizajeController.destroy);
app.put("/unidad_aprendizaje/:id", UnidadAprendizajeController.update);

app.get("/plan_estudios", PlanEstudiosController.index);
app.post("/plan_estudios", PlanEstudiosController.store);
app.get("/plan_estudios/:id", PlanEstudiosController.show);
app.delete("/plan_estudios/:id", PlanEstudiosController.destroy);
app.put("/plan_estudios/:id", PlanEstudiosController.update);

app.get("/horario_clases", Middleware.isAlumnoAuthenticated, HorarioClaseController.index);
//app.post("/horario_clases", horarioClaseController.store);
//app.get("/horario_clases/:id", horarioClaseController.show);
//app.delete("/horario_clases/:id", horarioClaseController.destroy);
//app.put("/horario_clases/:id", horarioClaseController.update);

app.post("/crear_horarios", HorarioClaseController.make);

app.post("/cita_reinscripcion", CitaReinscripcionController.store);
app.get("/cita_reinscripcion", CitaReinscripcionController.index);
app.get("/cita_reinscripcion/:boleta", CitaReinscripcionController.show);

module.exports = app;
