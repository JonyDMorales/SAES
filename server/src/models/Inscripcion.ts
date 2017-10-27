import * as mongoose from "mongoose";

const inscripcionSchema = new mongoose.Schema({
  boleta_alumno: { type: Number, unique: true },
  horario: [],
  periodo: String
  
}, { timestamps: false });

const Inscripcion = mongoose.model("Inscripcion", inscripcionSchema);
export default Inscripcion;