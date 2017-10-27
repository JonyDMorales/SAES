import * as InscripcionDataSource from "../datasources/InscripcionDataSource";
import * as HorarioClasesDataSource from "../datasources/HorarioClasesDataSource";
import * as Bluebird from "bluebird";

export let execute = async (boleta: number) => {
    try {
        let result: any = await InscripcionDataSource.getInscripcionByBoleta(boleta); 
        let schedule = await Bluebird.map(result.horario, async (id: any) => {
            let cSchedule = await HorarioClasesDataSource.getHorarioById(id);
            return cSchedule;
        })
        return schedule;
    } catch (err) {
        return { status: 'error', errors: err}
    }
}