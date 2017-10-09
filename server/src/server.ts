import * as express from "express";
import * as bodyParser from "body-parser";
import * as dotenv from "dotenv";
import * as mongoose from "mongoose";
var cors = require('cors');

import * as mainController from "./controllers/MainController";
import * as alumnoController from "./controllers/AlumnoController";
import * as unidadAprendizajeController from "./controllers/UnidadAprendizajeController";

import * as alumnoValidator from "./validators/AlumnoValidator";

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
app.post("/alumno", alumnoValidator.register, alumnoController.store);
app.get("/alumno/:boleta", alumnoController.show);
app.delete("/alumno/:boleta", alumnoController.destroy);
app.put("/alumno/:boleta", alumnoController.update);

app.get("/unidad_aprendizaje", unidadAprendizajeController.index);
app.post("/unidad_aprendizaje", unidadAprendizajeController.store);
app.get("/unidad_aprendizaje/:id", unidadAprendizajeController.show);
app.delete("/unidad_aprendizaje/:id", unidadAprendizajeController.destroy);
app.put("/unidad_aprendizaje/:id", unidadAprendizajeController.update);

module.exports = app;
