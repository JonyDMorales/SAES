import * as AlumnoDataSource from "../datasources/AlumnoDataSource";
import * as HorarioClasesDataSource from "../datasources/HorarioClasesDataSource";
import * as Bluebird from "bluebird";

export let execute = async (boleta: number) => {
    try {
        let result: any = await AlumnoDataSource.getBookmarks(boleta); 
        
        let bookmarks = await Bluebird.map(result.horarios_guardados, async (bookmark: any) => {
            let horario = await Bluebird.map(bookmark.horario, async (id: number) => {
                let cSchedule = await HorarioClasesDataSource.getHorarioById(id);
                return cSchedule;
            })
            return {
                nombre: bookmark.nombre,
                id: bookmark.id,
                horario: horario
            }
        })
        return bookmarks;
    } catch (err) {
        return { status: 'error', errors: err}
    }
}