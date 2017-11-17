import * as Bluebird from "bluebird";
import * as InscripcionDataSource from "../datasources/InscripcionDataSource";
import * as HorarioClasesDataSource from "../datasources/HorarioClasesDataSource";

export let execute = async (schedule: any, update_occupability: boolean) => {
    try {
        let inscripcion: any = await InscripcionDataSource.saveInscripcion(schedule);
        if (update_occupability) {
            let occupability = await Bluebird.map(inscripcion.horario, async (id: any) => {
                let cSchedule: any = await HorarioClasesDataSource.updateOccupability(id, 1);
                return {
                    id: cSchedule.id,
                    lugares: cSchedule.lugares_disponibles,
                    inscritos: cSchedule.alumnos_inscritos + 1
                }
            })
            return occupability;
        } else {
            return {}
        }
    } catch (err) {
        return { status: 'error', errors: err}
    }
}