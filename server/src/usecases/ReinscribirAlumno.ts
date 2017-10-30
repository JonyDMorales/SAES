import * as Bluebird from "bluebird";
import * as InscripcionDataSource from "../datasources/InscripcionDataSource";
import * as HorarioClasesDataSource from "../datasources/HorarioClasesDataSource";

export let execute = async (schedule: any) => {
    try {
        let inscripcion: any = await InscripcionDataSource.saveInscripcion(schedule);
        let occupability = await Bluebird.map(inscripcion.horario, async (id: any) => {
            let cSchedule: any = await HorarioClasesDataSource.updateOccupability(id);
            return {
                id: cSchedule.id,
                lugares: cSchedule.lugares_disponibles,
                inscritos: cSchedule.alumnos_inscritos + 1
            }
        })
        return occupability;
    } catch (err) {
        return { status: 'error', errors: err}
    }
}