import * as express from "express";
import * as bodyParser from "body-parser";
import * as dotenv from "dotenv";
import * as mongoose from "mongoose";
var cors = require('cors');

import * as mainController from "./controllers/MainController";
import * as alumnoController from "./controllers/AlumnoController";

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
app.get("/alumnos", alumnoController.index);
app.post("/alumnos", alumnoController.store);

module.exports = app;
