import * as mongoose from "mongoose";

const escuelaSchema = new mongoose.Schema({
  
	id: {type: String, unique: true},
	nombre: String

}, { timestamps: false });

const Escuela = mongoose.model("Escuela", escuelaSchema);
export default Escuela;