import * as AlumnoDataSource from "../datasources/AlumnoDataSource";
import * as UnidadAprendizajeDataSource from "../datasources/UnidadAprendizajeDataSource";
import * as Bluebird from "bluebird";
const Bucket = require('buckets-js');

var unidadesAprendizaje: any;

export let execute = async (boleta: number) => {
    try {
        let alumno: any = await AlumnoDataSource.getAlumnoByBoleta(boleta);
        unidadesAprendizaje = await UnidadAprendizajeDataSource.getAllUnidadesAprendizaje();

        // console.log(JSON.stringify(alumno, null, 2))
        // console.log(JSON.stringify(unidadesAprendizaje, null, 2))

        var items = new Bucket.Dictionary();
        var periods = new Bucket.Set();

        alumno.unidades_cursadas.forEach((ua: any) => {
            periods.add(ua.periodo)
            if (items.get(ua.unidad_aprendizaje)) {
                items.get(ua.unidad_aprendizaje).push(ua)
            } else {
                items.set(ua.unidad_aprendizaje, [ua])
            }
        });

        var kardex: any[] = [];
        var credits: number = 0;
        var idx: number = 0;
        var idsCursadas: number[] = [];
        
        items.keys().forEach((item: string) => {
            kardex.push({
                id: item,
                history: items.get(item).sort((a: any, b: any) => {
                    var periodA = a.periodo.split('/')
                    var periodB = b.periodo.split('/')
                    return (parseInt(periodA[0]) - parseInt(periodB[0]))
                })
            })
            credits += getCredits(kardex[idx].history[kardex[idx].history.length - 1].id_unidad_aprendizaje)
            idx++;
        });

        // console.log(JSON.stringify(kardex, null, 2))

        return {
            error: false,
            nombre: alumno.nombre,
            email: alumno.email,
            password: alumno.password,
            boleta: alumno.boleta,
            creditos_obtenidos: credits,
            periodos_cursados: periods.toArray().sort((a: string , b: string) => {
                var periodA = a.split('/')
                var periodB = b.split('/')
                return (parseInt(periodA[0]) - parseInt(periodB[0]))
            }),
            periodos: 12,
            creditos_totales: 239.2,
            carrera: 'Ing. Sistemas Computacionales',
            kardex: kardex,
            promedio: (kardex.reduce((sum: number, ua: any) => sum + ua.history[ua.history.length - 1].calificacion, 0) / kardex.length).toFixed(2),
            num_reprobadas: kardex.filter((ua) => ua.history[ua.history.length - 1].calificacion < 6).length
        };
    } catch (err) {
        return { error: true}
    }
}

let getCredits = (id: number) => {
    var lower = 0
    var upper = unidadesAprendizaje.length - 1
    var middle
    while (lower <= upper) {
      middle = Math.floor((lower + upper) / 2)
      if (id === unidadesAprendizaje[middle].id) return unidadesAprendizaje[middle].creditos
      if (id > unidadesAprendizaje[middle].id) lower = middle + 1
      else upper = middle - 1
    }
}