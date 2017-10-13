import * as mongoose from "mongoose";

const analistaSchema = new mongoose.Schema({
  nombres: String,
	apellido_paterno: String,
	apellido_materno: String,
	id: {type: Number, unique: true},
	password: String,
	email: {type: String, unique: true}

}, { timestamps: false });

const Analista = mongoose.model("Analista", analistaSchema);
export default Analista;