import * as mongoose from "mongoose";

const analistaSchema = new mongoose.Schema({
  nombre: String,
	id: {type: Number, unique: true},
	password: String,
	email: {type: String, unique: true}

}, { timestamps: false });

const Analista = mongoose.model("Analista", analistaSchema);
export default Analista;