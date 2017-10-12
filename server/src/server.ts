import * as express from "express";
import * as bodyParser from "body-parser";
import * as dotenv from "dotenv";
import * as mongoose from "mongoose";
var cors = require('cors');

import * as mainController from "./controllers/MainController";
import * as alumnoController from "./controllers/AlumnoController";
import * as unidadAprendizajeController from "./controllers/UnidadAprendizajeController";
import * as horarioClaseController from "./controllers/HorarioClaseController";
import * as planEstudiosController from "./controllers/PlanEstudiosController";
import * as citaReinscripcionController from "./controllers/CitaReinscripcionController";

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

app.get("/", mainController.index);

app.get("/alumno", alumnoController.index);
app.post("/alumno", alumnoController.store);
app.get("/alumno/:boleta", alumnoController.show);
app.delete("/alumno/:boleta", alumnoController.destroy);
app.put("/alumno/:boleta", alumnoController.update);
app.post("/alumno/login", alumnoController.login);

app.get("/unidad_aprendizaje", unidadAprendizajeController.index);
app.post("/unidad_aprendizaje", unidadAprendizajeController.store);
app.get("/unidad_aprendizaje/:id", unidadAprendizajeController.show);
app.delete("/unidad_aprendizaje/:id", unidadAprendizajeController.destroy);
app.put("/unidad_aprendizaje/:id", unidadAprendizajeController.update);

app.get("/plan_estudios", planEstudiosController.index);
app.post("/plan_estudios", planEstudiosController.store);
app.get("/plan_estudios/:id", planEstudiosController.show);
app.delete("/plan_estudios/:id", planEstudiosController.destroy);
app.put("/plan_estudios/:id", planEstudiosController.update);

app.get("/horario_clases", horarioClaseController.index);
app.post("/horario_clases", horarioClaseController.store);
app.get("/horario_clases/:id", horarioClaseController.show);
app.delete("/horario_clases/:id", horarioClaseController.destroy);
app.put("/horario_clases/:id", horarioClaseController.update);

app.post("/crear_horarios", horarioClaseController.make);

app.post("/cita_reinscripcion", citaReinscripcionController.store);
app.get("/cita_reinscripcion/:boleta", citaReinscripcionController.show);

module.exports = app;
