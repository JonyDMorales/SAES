const Faker = require('faker');
import { default as Alumno } from "../models/Alumno";
import { default as UnidadAprendizaje } from "../models/UnidadAprendizaje";
import { default as PlanEstudios } from "../models/PlanEstudios";
import { default as Escuela } from "../models/Escuela";
import { default as Profesor } from "../models/Profesor";
import { default as HorarioClase } from "../models/HorarioClase";

Faker.locale = "es";

export let alumno = (n: number) => {
	while(n--) {
		let email = Faker.internet.email().toLowerCase();
		let name = Faker.name.firstName();
		let _name = name.toLowerCase().replace('á','a').replace('é','e').replace('í','i').replace('ó','o').replace('ú','u').replace(' ','')
		let data = {
			nombres: name,
			apellido_paterno: Faker.name.lastName(),
			apellido_materno: Faker.name.lastName(),
			boleta: Faker.random.number({min: 2000000000, max: 2010000000}),
			password: Faker.internet.password(),
			email: _name + String(Faker.random.number({min: 100, max: 999})) + email.substring(email.indexOf('@'), email.length)
		}

		let alumno = new Alumno(data);

	  alumno.save()
	  .then(() => console.log("Alumno Factory => Data => Success"))
	  .catch((err) => console.log(err));
	}
}

export let alumnoWithTrayectory = (n: number) => {
	while(n--) {
		let email = Faker.internet.email().toLowerCase();
		let name = Faker.name.firstName();
		let _name = name.toLowerCase().replace('á','a').replace('é','e').replace('í','i').replace('ó','o').replace('ú','u').replace(' ','')
		let data = {
			nombres: name,
			apellido_paterno: Faker.name.lastName(),
			apellido_materno: Faker.name.lastName(),
			boleta: Faker.random.number({min: 2000000000, max: 2010000000}),
			password: Faker.internet.password(),
			email: _name + String(Faker.random.number({min: 100, max: 999})) + email.substring(email.indexOf('@'), email.length),

			promedio_general: parseFloat(String(Faker.random.number({min: 5, max: 9})) + '.' + String(Faker.random.number({min: 0, max: 9}))),
			numero_unidades_reprobadas: Faker.random.number({min: 0, max: 6})
		}

		let alumno = new Alumno(data);

	  alumno.save()
	  .then(() => console.log("Alumno Factory => Data => Success"))
	  .catch((err) => console.log(err));
	}
}

export let profesor = (n: number) => {
	while(n--) {
		let email = Faker.internet.email().toLowerCase();
		let name = Faker.name.firstName();
		let _name = name.toLowerCase().replace('á','a').replace('é','e').replace('í','i').replace('ó','o').replace('ú','u').replace(' ','')
		let data = {
			nombres: name,
			apellido_paterno: Faker.name.lastName(),
			apellido_materno: Faker.name.lastName(),
			id_escuela: "ESCOM",
			id: Faker.random.number({min: 2000000000, max: 2010000000}),
			password: Faker.internet.password(),
			email: _name + String(Faker.random.number({min: 100, max: 999})) + email.substring(email.indexOf('@'), email.length)
		}

		let profesor = new Profesor(data);

	  profesor.save()
	  .then(() => console.log("Profesor Factory => Data => Success"))
	  .catch((err) => console.log(err));
	}
}

export let planEstudios = (n: number) => {
	while(n--) {
		let data = {
			id: 1,
		  nombre: "ESCOM2009",
			version: 2,
			carrera: "Ing. Sistemas Computacionales",
			periodo_inicio: "09/1",
			periodo_fin: "20/1",
			total_creditos: 200,
			duracion_periodos: 12
		}

		let plan_estudios = new PlanEstudios(data);

	  plan_estudios.save()
	  .then(() => console.log("PlanEstudios Factory => Data => Success"))
	  .catch((err) => console.log(err));
	}
}

export let escuela = (n: number) => {
	while(n--) {
		let data = {
			id: "ESCOM",
		  nombre: "Escuela Superior de Cómputo"
		}

		let escuela = new Escuela(data);

	  escuela.save()
	  .then(() => console.log("Escuela Factory => Data => Success"))
	  .catch((err) => console.log(err));
	}
}

export let unidadAprendizaje = (n: number) => {
	while(n--) {
		let data = {
			id: 'ua_' + Faker.random.alphaNumeric(8),
		  id_plan_estudios: "pe_1", //get from other model
			nombre: Faker.commerce.department(),
			semestre: Faker.random.number({min: 1, max: 10}),
			creditos: parseFloat(String(Faker.random.number({min: 4, max: 5})) + '.' + String(Faker.random.number({min: 0, max: 9}))),
			optativa: Faker.random.boolean()
		}

		let unidadAprendizaje = new UnidadAprendizaje(data);

	  unidadAprendizaje.save()
	  .then(() => console.log("UnidadAprendizaje Factory => Data => Success"))
	  .catch((err) => console.log(err));
	}
}

export let horariosClase = () => {
	let horarios = [{
		"profesor": "ROJAS LUNA HECTOR",
		"id_unidad_aprendizaje": 1,
		"unidad_aprendizaje": "Análisis Vectorial",
		"grupo": "1CM1",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "12:00",
				"hora_fin": "13:30"
			},
			{
				"dia": "Martes",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "12:00",
				"hora_fin": "13:30"
			},
			{
				"dia": "Jueves",
				"hora_inicio": "12:00",
				"hora_fin": "13:30"
			},
			{
				"dia": "Viernes",
				"hora_inicio": "",
				"hora_fin": ""
			}
		]
	},
	{
		"profesor": "MANZANILLA GRANADOS HECTOR MANUEL",
		"id_unidad_aprendizaje": 2,
		"unidad_aprendizaje": "Cálculo",
		"grupo": "1CM1",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Martes",
				"hora_inicio": "7:00",
				"hora_fin": "8:30"
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "7:00",
				"hora_fin": "8:30"
			},
			{
				"dia": "Jueves",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Viernes",
				"hora_inicio": "7:00",
				"hora_fin": "8:30"
			}
		]
	},
	{
		"profesor": "MOSSO GARCIA IVAN GIOVANNY",
		"id_unidad_aprendizaje": 3,
		"unidad_aprendizaje": "Matemáticas Discretas",
		"grupo": "1CM1",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "8:30",
				"hora_fin": "10:00"
			},
			{
				"dia": "Martes",
				"hora_inicio": "12:00",
				"hora_fin": "13:30"
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "8:30",
				"hora_fin": "10:00"
			},
			{
				"dia": "Jueves",
				"hora_inicio": "8:30",
				"hora_fin": "10:00"
			},
			{
				"dia": "Viernes",
				"hora_inicio": "",
				"hora_fin": ""
			}
		]
	},
	{
		"profesor": "RUEDA MELENDEZ MARCO ANTONIO",
		"id_unidad_aprendizaje": 4,
		"unidad_aprendizaje": "Algoritmia y Programación Estructurada",
		"grupo": "1CM1",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "7:00",
				"hora_fin": "8:30"
			},
			{
				"dia": "Martes",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Jueves",
				"hora_inicio": "7:00",
				"hora_fin": "8:30"
			},
			{
				"dia": "Viernes",
				"hora_inicio": "8:30",
				"hora_fin": "10:00"
			}
		]
	},
	{
		"profesor": "OJEDA GUILLEN DIDIER",
		"id_unidad_aprendizaje": 5,
		"unidad_aprendizaje": "Física",
		"grupo": "1CM1",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "10:30",
				"hora_fin": "12:00"
			},
			{
				"dia": "Martes",
				"hora_inicio": "8:30",
				"hora_fin": "10:00"
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Jueves",
				"hora_inicio": "10:30",
				"hora_fin": "12:00"
			},
			{
				"dia": "Viernes",
				"hora_inicio": "",
				"hora_fin": ""
			}
		]
	},
	{
		"profesor": "SANCHEZ MORENO ADRIANA DE LA P",
		"id_unidad_aprendizaje": 6,
		"unidad_aprendizaje": "Ingeniería, Ética y Sociedad",
		"grupo": "1CM1",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Martes",
				"hora_inicio": "10:30",
				"hora_fin": "12:00"
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "10:30",
				"hora_fin": "12:00"
			},
			{
				"dia": "Jueves",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Viernes",
				"hora_inicio": "10:30",
				"hora_fin": "12:00"
			}
		]
	},

	{
		"profesor": "GONZALEZ TRUJILLO MIGUEL",
		"id_unidad_aprendizaje": 1,
		"unidad_aprendizaje": "Análisis Vectorial",
		"grupo": "1CM2",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "8:30",
				"hora_fin": "10:00"
			},
			{
				"dia": "Martes",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "8:30",
				"hora_fin": "10:00"
			},
			{
				"dia": "Jueves",
				"hora_inicio": "8:30",
				"hora_fin": "10:00"
			},
			{
				"dia": "Viernes",
				"hora_inicio": "",
				"hora_fin": ""
			}
		]
	},
	{
		"profesor": "VIVEROS VELA KARINA",
		"id_unidad_aprendizaje": 2,
		"unidad_aprendizaje": "Cálculo",
		"grupo": "1CM2",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "10:30",
				"hora_fin": "12:00"
			},
			{
				"dia": "Martes",
				"hora_inicio": "8:30",
				"hora_fin": "10:00"
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Jueves",
				"hora_inicio": "10:30",
				"hora_fin": "12:00"
			},
			{
				"dia": "Viernes",
				"hora_inicio": "",
				"hora_fin": ""
			}
		]
	},
	{
		"profesor": "DORANTES VILLA CLAUDIA JISELA",
		"id_unidad_aprendizaje": 3,
		"unidad_aprendizaje": "Matemáticas Discretas",
		"grupo": "1CM2",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "7:00",
				"hora_fin": "8:30"
			},
			{
				"dia": "Martes",
				"hora_inicio": "12:00",
				"hora_fin": "13:30"
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Jueves",
				"hora_inicio": "7:00",
				"hora_fin": "8:30"
			},
			{
				"dia": "Viernes",
				"hora_inicio": "8:30",
				"hora_fin": "10:00"
			}
		]
	},
	{
		"profesor": "JUAREZ MARTINEZ GENARO",
		"id_unidad_aprendizaje": 4,
		"unidad_aprendizaje": "Algoritmia y Programación Estructurada",
		"grupo": "1CM2",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Martes",
				"hora_inicio": "7:00",
				"hora_fin": "8:30"
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "7:00",
				"hora_fin": "8:30"
			},
			{
				"dia": "Jueves",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Viernes",
				"hora_inicio": "7:00",
				"hora_fin": "8:30"
			}
		]
	},
	{
		"profesor": "MUÑOZ SALAZAR LAURA",
		"id_unidad_aprendizaje": 5,
		"unidad_aprendizaje": "Física",
		"grupo": "1CM2",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Martes",
				"hora_inicio": "10:30",
				"hora_fin": "12:00"
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "10:30",
				"hora_fin": "12:00"
			},
			{
				"dia": "Jueves",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Viernes",
				"hora_inicio": "10:30",
				"hora_fin": "12:00"
			}
		]
	},
	{
		"profesor": "ARAGON GARCIA MARIBEL",
		"id_unidad_aprendizaje": 6,
		"unidad_aprendizaje": "Ingeniería, Ética y Sociedad",
		"grupo": "1CM2",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "12:00",
				"hora_fin": "13:30"
			},
			{
				"dia": "Martes",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "12:00",
				"hora_fin": "13:30"
			},
			{
				"dia": "Jueves",
				"hora_inicio": "12:00",
				"hora_fin": "13:30"
			},
			{
				"dia": "Viernes",
				"hora_inicio": "",
				"hora_fin": ""
			}
		]
	},

	{
		"profesor": "JIMENEZ VILLANUEVA MARTHA PATRICIA",
		"id_unidad_aprendizaje": 2,
		"unidad_aprendizaje": "Cálculo",
		"grupo": "1CM3",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Martes",
				"hora_inicio": "7:00",
				"hora_fin": "8:30"
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "7:00",
				"hora_fin": "8:30"
			},
			{
				"dia": "Jueves",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Viernes",
				"hora_inicio": "7:00",
				"hora_fin": "8:30"
			}
		]
	},
	{
		"profesor": "JIMENEZ CONTRERAS EDITH ADRIANA",
		"id_unidad_aprendizaje": 3,
		"unidad_aprendizaje": "Matemáticas Discretas",
		"grupo": "1CM3",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "12:00",
				"hora_fin": "13:30"
			},
			{
				"dia": "Martes",
				"hora_inicio": "12:00",
				"hora_fin": "13:30"
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "12:00",
				"hora_fin": "13:30"
			},
			{
				"dia": "Jueves",
				"hora_inicio": "12:00",
				"hora_fin": "13:30"
			},
			{
				"dia": "Viernes",
				"hora_inicio": "",
				"hora_fin": ""
			}
		]
	},
	{
		"profesor": "SUAREZ CASTAÑON MIGUEL SANTIAGO",
		"id_unidad_aprendizaje": 4,
		"unidad_aprendizaje": "Algoritmia y Programación Estructurada",
		"grupo": "1CM3",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "7:00",
				"hora_fin": "8:30"
			},
			{
				"dia": "Martes",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Jueves",
				"hora_inicio": "7:00",
				"hora_fin": "8:30"
			},
			{
				"dia": "Viernes",
				"hora_inicio": "8:30",
				"hora_fin": "10:00"
			}
		]
	},
	{
		"profesor": "GUZMAN AGUILAR FLORENCIO",
		"id_unidad_aprendizaje": 5,
		"unidad_aprendizaje": "Física",
		"grupo": "1CM3",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "10:30",
				"hora_fin": "12:00"
			},
			{
				"dia": "Martes",
				"hora_inicio": "8:30",
				"hora_fin": "10:00"
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Jueves",
				"hora_inicio": "10:30",
				"hora_fin": "12:00"
			},
			{
				"dia": "Viernes",
				"hora_inicio": "",
				"hora_fin": ""
			}
		]
	},
	{
		"profesor": "MARTINEZ ACOSTA LILIAN",
		"id_unidad_aprendizaje": 6,
		"unidad_aprendizaje": "Ingeniería, Ética y Sociedad",
		"grupo": "1CM3",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Martes",
				"hora_inicio": "10:30",
				"hora_fin": "12:00"
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "10:30",
				"hora_fin": "12:00"
			},
			{
				"dia": "Jueves",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Viernes",
				"hora_inicio": "10:30",
				"hora_fin": "12:00"
			}
		]
	},
	{
		"profesor": "FERRER TENORIO JORGE",
		"id_unidad_aprendizaje": 11,
		"unidad_aprendizaje": "Comunicación Oral y Escrita",
		"grupo": "1CM3",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "8:30",
				"hora_fin": "10:00"
			},
			{
				"dia": "Martes",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "8:30",
				"hora_fin": "10:00"
			},
			{
				"dia": "Jueves",
				"hora_inicio": "8:30",
				"hora_fin": "10:00"
			},
			{
				"dia": "Viernes",
				"hora_inicio": "",
				"hora_fin": ""
			}
		]
	},

	{
		"profesor": "VIVEROS VELA KARINA",
		"id_unidad_aprendizaje": 2,
		"unidad_aprendizaje": "Cálculo",
		"grupo": "1CM4",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "8:30",
				"hora_fin": "10:00"
			},
			{
				"dia": "Martes",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "8:30",
				"hora_fin": "10:00"
			},
			{
				"dia": "Jueves",
				"hora_inicio": "8:30",
				"hora_fin": "10:00"
			},
			{
				"dia": "Viernes",
				"hora_inicio": "",
				"hora_fin": ""
			}
		]
	},
	{
		"profesor": "REYES BERMEJO TLATOANI DE JESUS",
		"id_unidad_aprendizaje": 3,
		"unidad_aprendizaje": "Matemáticas Discretas",
		"grupo": "1CM4",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "7:00",
				"hora_fin": "8:30"
			},
			{
				"dia": "Martes",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Jueves",
				"hora_inicio": "7:00",
				"hora_fin": "8:30"
			},
			{
				"dia": "Viernes",
				"hora_inicio": "12:00",
				"hora_fin": "13:30"
			}
		]
	},
	{
		"profesor": "SUAREZ CASTAÑON MIGUEL SANTIAGO",
		"id_unidad_aprendizaje": 4,
		"unidad_aprendizaje": "Algoritmia y Programación Estructurada",
		"grupo": "1CM4",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Martes",
				"hora_inicio": "7:00",
				"hora_fin": "8:30"
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "7:00",
				"hora_fin": "8:30"
			},
			{
				"dia": "Jueves",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Viernes",
				"hora_inicio": "7:00",
				"hora_fin": "8:30"
			}
		]
	},
	{
		"profesor": "HERRERA YAÑEZ CRISPIN",
		"id_unidad_aprendizaje": 5,
		"unidad_aprendizaje": "Física",
		"grupo": "1CM4",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Martes",
				"hora_inicio": "10:30",
				"hora_fin": "12:00"
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "10:30",
				"hora_fin": "12:00"
			},
			{
				"dia": "Jueves",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Viernes",
				"hora_inicio": "10:30",
				"hora_fin": "12:00"
			}
		]
	},
	{
		"profesor": "SANCHEZ MORENO ADRIANA DE LA P",
		"id_unidad_aprendizaje": 6,
		"unidad_aprendizaje": "Ingeniería, Ética y Sociedad",
		"grupo": "1CM4",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "12:00",
				"hora_fin": "13:30"
			},
			{
				"dia": "Martes",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "12:00",
				"hora_fin": "13:30"
			},
			{
				"dia": "Jueves",
				"hora_inicio": "12:00",
				"hora_fin": "13:30"
			},
			{
				"dia": "Viernes",
				"hora_inicio": "",
				"hora_fin": ""
			}
		]
	},
	{
		"profesor": "ARAGON GARCIA MARIBEL",
		"id_unidad_aprendizaje": 11,
		"unidad_aprendizaje": "Comunicación Oral y Escrita",
		"grupo": "1CM4",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "10:30",
				"hora_fin": "12:00"
			},
			{
				"dia": "Martes",
				"hora_inicio": "8:30",
				"hora_fin": "10:00"
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Jueves",
				"hora_inicio": "10:30",
				"hora_fin": "12:00"
			},
			{
				"dia": "Viernes",
				"hora_inicio": "",
				"hora_fin": ""
			}
		]
	},

	{
		"profesor": "GONZALEZ TRUJILLO MIGUEL",
		"id_unidad_aprendizaje": 2,
		"unidad_aprendizaje": "Cálculo",
		"grupo": "1CM5",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "10:30",
				"hora_fin": "12:00"
			},
			{
				"dia": "Martes",
				"hora_inicio": "8:30",
				"hora_fin": "10:00"
			},
			{
				"dia": "Miércole",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Jueves",
				"hora_inicio": "10:30",
				"hora_fin": "12:00"
			},
			{
				"dia": "Viernes",
				"hora_inicio": "",
				"hora_fin": ""
			}
		]
	},
	{
		"profesor": "JIMENEZ CONTRERAS EDITH ADRIANA",
		"id_unidad_aprendizaje": 3,
		"unidad_aprendizaje": "Matemáticas Discretas",
		"grupo": "1CM5",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Martes",
				"hora_inicio": "7:00",
				"hora_fin": "8:30"
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "7:00",
				"hora_fin": "8:30"
			},
			{
				"dia": "Jueves",
				"hora_inicio": "13:30",
				"hora_fin": "15:00"
			},
			{
				"dia": "Viernes",
				"hora_inicio": "7:00",
				"hora_fin": "8:30"
			}
		]
	},
	{
		"profesor": "DAVALOS LOPEZ JOSE CARLOS",
		"id_unidad_aprendizaje": 4,
		"unidad_aprendizaje": "Algoritmia y Programación Estructurada",
		"grupo": "1CM5",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "8:30",
				"hora_fin": "10:00"
			},
			{
				"dia": "Martes",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "8:30",
				"hora_fin": "10:00"
			},
			{
				"dia": "Jueves",
				"hora_inicio": "8:30",
				"hora_fin": "10:00"
			},
			{
				"dia": "Viernes",
				"hora_inicio": "",
				"hora_fin": ""
			}
		]
	},
	{
		"profesor": "MUÑOZ SALAZAR LAURA",
		"id_unidad_aprendizaje": 5,
		"unidad_aprendizaje": "Física",
		"grupo": "1CM5",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "12:00",
				"hora_fin": "13:30"
			},
			{
				"dia": "Martes",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "12:00",
				"hora_fin": "13:30"
			},
			{
				"dia": "Jueves",
				"hora_inicio": "12:00",
				"hora_fin": "13:30"
			},
			{
				"dia": "Viernes",
				"hora_inicio": "",
				"hora_fin": ""
			}
		]
	},
	{
		"profesor": "VERA HERNANDEZ GUMERSINDO",
		"id_unidad_aprendizaje": 6,
		"unidad_aprendizaje": "Ingeniería, Ética y Sociedad",
		"grupo": "1CM5",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "7:00",
				"hora_fin": "8:30"
			},
			{
				"dia": "Martes",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Jueves",
				"hora_inicio": "7:00",
				"hora_fin": "8:30"
			},
			{
				"dia": "Viernes",
				"hora_inicio": "8:30",
				"hora_fin": "10:00"
			}
		]
	},
	{
		"profesor": "TELLEZ REYES MARIA DEL SOCORRO",
		"id_unidad_aprendizaje": 11,
		"unidad_aprendizaje": "Comunicación Oral y Escrita",
		"grupo": "1CM5",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Martes",
				"hora_inicio": "10:30",
				"hora_fin": "12:00"
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "10:30",
				"hora_fin": "12:00"
			},
			{
				"dia": "Jueves",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Viernes",
				"hora_inicio": "10:30",
				"hora_fin": "12:00"
			}
		]
	},
	{
		"profesor": "JIMENEZ VILLANUEVA MARTHA PATRICIA",
		"id_unidad_aprendizaje": 2,
		"unidad_aprendizaje": "Cálculo",
		"grupo": "1CM6",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "7:00",
				"hora_fin": "8:30"
			},
			{
				"dia": "Martes",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Jueves",
				"hora_inicio": "7:00",
				"hora_fin": "8:30"
			},
			{
				"dia": "Viernes",
				"hora_inicio": "8:30",
				"hora_fin": "10:00"
			}
		]
	},
	{
		"profesor": "REYES BERMEJO TLATOANI DE JESUS",
		"id_unidad_aprendizaje": 3,
		"unidad_aprendizaje": "Matemáticas Discretas",
		"grupo": "1CM6",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "8:30",
				"hora_fin": "10:00"
			},
			{
				"dia": "Martes",
				"hora_inicio": "12:00",
				"hora_fin": "13:30"
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "8:30",
				"hora_fin": "10:00"
			},
			{
				"dia": "Jueves",
				"hora_inicio": "8:30",
				"hora_fin": "10:00"
			},
			{
				"dia": "Viernes",
				"hora_inicio": "",
				"hora_fin": ""
			}
		]
	},
	{
		"profesor": "DAVALOS LOPEZ JOSE CARLOS",
		"id_unidad_aprendizaje": 4,
		"unidad_aprendizaje": "Algoritmia y Programación Estructurada",
		"grupo": "1CM6",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "10:30",
				"hora_fin": "12:00"
			},
			{
				"dia": "Martes",
				"hora_inicio": "8:30",
				"hora_fin": "10:00"
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Jueves",
				"hora_inicio": "10:30",
				"hora_fin": "12:00"
			},
			{
				"dia": "Viernes",
				"hora_inicio": "",
				"hora_fin": ""
			}
		]
	},
	{
		"profesor": "GUZMAN AGUILAR FLORENCIO",
		"id_unidad_aprendizaje": 5,
		"unidad_aprendizaje": "Física",
		"grupo": "1CM6",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Martes",
				"hora_inicio": "10:30",
				"hora_fin": "12:00"
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "10:30",
				"hora_fin": "12:00"
			},
			{
				"dia": "Jueves",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Viernes",
				"hora_inicio": "10:30",
				"hora_fin": "12:00"
			}
		]
	},
	{
		"profesor": "CELIS DOMINGUEZ ADRIANA BERENICE",
		"id_unidad_aprendizaje": 6,
		"unidad_aprendizaje": "Ingeniería, Ética y Sociedad",
		"grupo": "1CM6",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Martes",
				"hora_inicio": "7:00",
				"hora_fin": "8:30"
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "7:00",
				"hora_fin": "8:30"
			},
			{
				"dia": "Jueves",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Viernes",
				"hora_inicio": "7:00",
				"hora_fin": "8:30"
			}
		]
	},
	{
		"profesor": "PEREZ VERA SANDRA MERCEDES",
		"id_unidad_aprendizaje": 11,
		"unidad_aprendizaje": "Comunicación Oral y Escrita",
		"grupo": "1CM6",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "12:00",
				"hora_fin": "13:30"
			},
			{
				"dia": "Martes",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Jueves",
				"hora_inicio": "12:00",
				"hora_fin": "13:30"
			},
			{
				"dia": "Viernes",
				"hora_inicio": "12:00",
				"hora_fin": "13:30"
			}
		]
	},
	{
		"profesor": "JIMENEZ VILLANUEVA MARTHA PATRICIA",
		"id_unidad_aprendizaje": 2,
		"unidad_aprendizaje": "Cálculo",
		"grupo": "1CM7",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Martes",
				"hora_inicio": "7:00",
				"hora_fin": "8:30"
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "7:00",
				"hora_fin": "8:30"
			},
			{
				"dia": "Jueves",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Viernes",
				"hora_inicio": "7:00",
				"hora_fin": "8:30"
			}
		]
	},
	{
		"profesor": "SANCHEZ PALACIOS MARIA SUSANA",
		"id_unidad_aprendizaje": 3,
		"unidad_aprendizaje": "Matemáticas Discretas",
		"grupo": "1CM7",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "10:30",
				"hora_fin": "12:00"
			},
			{
				"dia": "Martes",
				"hora_inicio": "8:30",
				"hora_fin": "10:00"
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Jueves",
				"hora_inicio": "10:30",
				"hora_fin": "12:00"
			},
			{
				"dia": "Viernes",
				"hora_inicio": "12:00",
				"hora_fin": "13:30"
			}
		]
	},
	{
		"profesor": "DE LUNA CABALLERO ROBERTO",
		"id_unidad_aprendizaje": 4,
		"unidad_aprendizaje": "Algoritmia y Programación Estructurada",
		"grupo": "1CM7",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Martes",
				"hora_inicio": "10:30",
				"hora_fin": "12:00"
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "10:30",
				"hora_fin": "12:00"
			},
			{
				"dia": "Jueves",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Viernes",
				"hora_inicio": "10:30",
				"hora_fin": "12:00"
			}
		]
	},
	{
		"profesor": "OJEDA GUILLEN DIDIER",
		"id_unidad_aprendizaje": 5,
		"unidad_aprendizaje": "Física",
		"grupo": "1CM7",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "12:00",
				"hora_fin": "13:30"
			},
			{
				"dia": "Martes",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "12:00",
				"hora_fin": "13:30"
			},
			{
				"dia": "Jueves",
				"hora_inicio": "12:00",
				"hora_fin": "13:30"
			},
			{
				"dia": "Viernes",
				"hora_inicio": "",
				"hora_fin": ""
			}
		]
	},
	{
		"profesor": "VERA HERNANDEZ GUMERSINDO",
		"id_unidad_aprendizaje": 6,
		"unidad_aprendizaje": "Ingeniería, Ética y Sociedad",
		"grupo": "1CM7",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "8:30",
				"hora_fin": "10:00"
			},
			{
				"dia": "Martes",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "8:30",
				"hora_fin": "10:00"
			},
			{
				"dia": "Jueves",
				"hora_inicio": "8:30",
				"hora_fin": "10:00"
			},
			{
				"dia": "Viernes",
				"hora_inicio": "",
				"hora_fin": ""
			}
		]
	},
	{
		"profesor": "TELLEZ REYES MARIA DEL SOCORRO",
		"id_unidad_aprendizaje": 11,
		"unidad_aprendizaje": "Comunicación Oral y Escrita",
		"grupo": "1CM7",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "7:00",
				"hora_fin": "8:30"
			},
			{
				"dia": "Martes",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Jueves",
				"hora_inicio": "7:00",
				"hora_fin": "8:30"
			},
			{
				"dia": "Viernes",
				"hora_inicio": "8:30",
				"hora_fin": "10:00"
			}
		]
	},
	{
		"profesor": "JIMENEZ VILLANUEVA MARTHA PATRICIA",
		"id_unidad_aprendizaje": 2,
		"unidad_aprendizaje": "Cálculo",
		"grupo": "1CM8",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "7:00",
				"hora_fin": "8:30"
			},
			{
				"dia": "Martes",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Jueves",
				"hora_inicio": "7:00",
				"hora_fin": "8:30"
			},
			{
				"dia": "Viernes",
				"hora_inicio": "8:30",
				"hora_fin": "10:00"
			}
		]
	},
	{
		"profesor": "GONZALEZ CISNEROS ALEJANDRO",
		"id_unidad_aprendizaje": 3,
		"unidad_aprendizaje": "Matemáticas Discretas",
		"grupo": "1CM8",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "13:30",
				"hora_fin": "15:00"
			},
			{
				"dia": "Martes",
				"hora_inicio": "10:30",
				"hora_fin": "12:00"
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "10:30",
				"hora_fin": "12:00"
			},
			{
				"dia": "Jueves",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Viernes",
				"hora_inicio": "10:30",
				"hora_fin": "12:00"
			}
		]
	},
	{
		"profesor": "DAVALOS LOPEZ JOSE CARLOS",
		"id_unidad_aprendizaje": 4,
		"unidad_aprendizaje": "Algoritmia y Programación Estructurada",
		"grupo": "1CM8",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "12:00",
				"hora_fin": "13:30"
			},
			{
				"dia": "Martes",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "12:00",
				"hora_fin": "13:30"
			},
			{
				"dia": "Jueves",
				"hora_inicio": "12:00",
				"hora_fin": "13:30"
			},
			{
				"dia": "Viernes",
				"hora_inicio": "",
				"hora_fin": ""
			}
		]
	},
	{
		"profesor": "MORALES GONZALEZ ANGEL",
		"id_unidad_aprendizaje": 5,
		"unidad_aprendizaje": "Física",
		"grupo": "1CM8",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "8:30",
				"hora_fin": "10:00"
			},
			{
				"dia": "Martes",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "8:30",
				"hora_fin": "10:00"
			},
			{
				"dia": "Jueves",
				"hora_inicio": "8:30",
				"hora_fin": "10:00"
			},
			{
				"dia": "Viernes",
				"hora_inicio": "",
				"hora_fin": ""
			}
		]
	},
	{
		"profesor": "VERA HERNANDEZ GUMERSINDO",
		"id_unidad_aprendizaje": 6,
		"unidad_aprendizaje": "Ingeniería, Ética y Sociedad",
		"grupo": "1CM8",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "10:30",
				"hora_fin": "12:00"
			},
			{
				"dia": "Martes",
				"hora_inicio": "8:30",
				"hora_fin": "10:00"
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Jueves",
				"hora_inicio": "10:30",
				"hora_fin": "12:00"
			},
			{
				"dia": "Viernes",
				"hora_inicio": "",
				"hora_fin": ""
			}
		]
	},
	{
		"profesor": "PEREZ VERA SANDRA MERCEDES",
		"id_unidad_aprendizaje": 11,
		"unidad_aprendizaje": "Comunicación Oral y Escrita",
		"grupo": "1CM8",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Martes",
				"hora_inicio": "7:00",
				"hora_fin": "8:30"
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "7:00",
				"hora_fin": "8:30"
			},
			{
				"dia": "Jueves",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Viernes",
				"hora_inicio": "7:00",
				"hora_fin": "8:30"
			}
		]
	},
	{
		"profesor": "ORTUÑO ARAUJO JESUS",
		"id_unidad_aprendizaje": 1,
		"unidad_aprendizaje": "Análisis Vectorial",
		"grupo": "1CV1",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "20:00",
				"hora_fin": "21:30"
			},
			{
				"dia": "Martes",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "20:00",
				"hora_fin": "21:30"
			},
			{
				"dia": "Jueves",
				"hora_inicio": "20:00",
				"hora_fin": "21:30"
			},
			{
				"dia": "Viernes",
				"hora_inicio": "",
				"hora_fin": ""
			}
		]
	},
	{
		"profesor": "JURADO JIMENEZ ROBERTO",
		"id_unidad_aprendizaje": 2,
		"unidad_aprendizaje": "Cálculo",
		"grupo": "1CV1",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "16:30",
				"hora_fin": "18:00"
			},
			{
				"dia": "Martes",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "16:30",
				"hora_fin": "18:00"
			},
			{
				"dia": "Jueves",
				"hora_inicio": "16:30",
				"hora_fin": "18:00"
			},
			{
				"dia": "Viernes",
				"hora_inicio": "",
				"hora_fin": ""
			}
		]
	},
	{
		"profesor": "KOLESNIKOVA OLGA",
		"id_unidad_aprendizaje": 3,
		"unidad_aprendizaje": "Matemáticas Discretas",
		"grupo": "1CV1",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "13:30",
				"hora_fin": "15:00"
			},
			{
				"dia": "Martes",
				"hora_inicio": "15:00",
				"hora_fin": "16:30"
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "15:00",
				"hora_fin": "16:30"
			},
			{
				"dia": "Jueves",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Viernes",
				"hora_inicio": "15:00",
				"hora_fin": "16:30"
			}
		]
	},
	{
		"profesor": "RESENDIZ MUÑOZ ROCIO",
		"id_unidad_aprendizaje": 4,
		"unidad_aprendizaje": "Algoritmia y Programación Estructurada",
		"grupo": "1CV1",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "15:00",
				"hora_fin": "16:30"
			},
			{
				"dia": "Martes",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Jueves",
				"hora_inicio": "15:00",
				"hora_fin": "16:30"
			},
			{
				"dia": "Viernes",
				"hora_inicio": "16:30",
				"hora_fin": "18:00"
			}
		]
	},
	{
		"profesor": "SALAZAR RAMIREZ MANUEL",
		"id_unidad_aprendizaje": 5,
		"unidad_aprendizaje": "Física",
		"grupo": "1CV1",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "18:30",
				"hora_fin": "20:00"
			},
			{
				"dia": "Martes",
				"hora_inicio": "16:30",
				"hora_fin": "18:00"
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Jueves",
				"hora_inicio": "18:30",
				"hora_fin": "20:00"
			},
			{
				"dia": "Viernes",
				"hora_inicio": "",
				"hora_fin": ""
			}
		]
	},
	{
		"profesor": "CRUZ LAZARO ING. APOLINAR FRANCISCO",
		"id_unidad_aprendizaje": 6,
		"unidad_aprendizaje": "Ingeniería, Ética y Sociedad",
		"grupo": "1CV1",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Martes",
				"hora_inicio": "18:30",
				"hora_fin": "20:00"
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "18:30",
				"hora_fin": "20:00"
			},
			{
				"dia": "Jueves",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Viernes",
				"hora_inicio": "18:30",
				"hora_fin": "20:00"
			}
		]
	},
	{
		"profesor": "ORTUÑO ARAUJO JESUS",
		"id_unidad_aprendizaje": 1,
		"unidad_aprendizaje": "Análisis Vectorial",
		"grupo": "1CV2",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Martes",
				"hora_inicio": "18:30",
				"hora_fin": "20:00"
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "18:30",
				"hora_fin": "20:00"
			},
			{
				"dia": "Jueves",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Viernes",
				"hora_inicio": "18:30",
				"hora_fin": "20:00"
			}
		]
	},
	{
		"profesor": "JURADO JIMENEZ ROBERTO",
		"id_unidad_aprendizaje": 2,
		"unidad_aprendizaje": "Cálculo",
		"grupo": "1CV2",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "18:30",
				"hora_fin": "20:00"
			},
			{
				"dia": "Martes",
				"hora_inicio": "16:30",
				"hora_fin": "18:00"
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Jueves",
				"hora_inicio": "18:30",
				"hora_fin": "20:00"
			},
			{
				"dia": "Viernes",
				"hora_inicio": "",
				"hora_fin": ""
			}
		]
	},
	{
		"profesor": "KOLESNIKOVA OLGA",
		"id_unidad_aprendizaje": 3,
		"unidad_aprendizaje": "Matemáticas Discretas",
		"grupo": "1CV2",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "15:00",
				"hora_fin": "16:30"
			},
			{
				"dia": "Martes",
				"hora_inicio": "13:30",
				"hora_fin": "15:00"
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Jueves",
				"hora_inicio": "15:00",
				"hora_fin": "16:30"
			},
			{
				"dia": "Viernes",
				"hora_inicio": "16:30",
				"hora_fin": "18:00"
			}
		]
	},
	{
		"profesor": "RESENDIZ MUÑOZ ROCIO",
		"id_unidad_aprendizaje": 4,
		"unidad_aprendizaje": "Algoritmia y Programación Estructurada",
		"grupo": "1CV2",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Martes",
				"hora_inicio": "15:00",
				"hora_fin": "16:30"
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "15:00",
				"hora_fin": "16:30"
			},
			{
				"dia": "Jueves",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Viernes",
				"hora_inicio": "15:00",
				"hora_fin": "16:30"
			}
		]
	},
	{
		"profesor": "ESQUIVEL CENTENO JOSE ARMANDO",
		"id_unidad_aprendizaje": 5,
		"unidad_aprendizaje": "Física",
		"grupo": "1CV2",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "16:30",
				"hora_fin": "18:00"
			},
			{
				"dia": "Martes",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "16:30",
				"hora_fin": "18:00"
			},
			{
				"dia": "Jueves",
				"hora_inicio": "16:30",
				"hora_fin": "18:00"
			},
			{
				"dia": "Viernes",
				"hora_inicio": "",
				"hora_fin": ""
			}
		]
	},
	{
		"profesor": "CELIS DOMINGUEZ ADRIANA BERENICE",
		"id_unidad_aprendizaje": 6,
		"unidad_aprendizaje": "Ingeniería, Ética y Sociedad",
		"grupo": "1CV2",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "20:00",
				"hora_fin": "21:30"
			},
			{
				"dia": "Martes",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "20:00",
				"hora_fin": "21:30"
			},
			{
				"dia": "Jueves",
				"hora_inicio": "20:00",
				"hora_fin": "21:30"
			},
			{
				"dia": "Viernes",
				"hora_inicio": "",
				"hora_fin": ""
			}
		]
	},
	{
		"profesor": "GUTIERREZ MEJIA DARWIN",
		"id_unidad_aprendizaje": 2,
		"unidad_aprendizaje": "Cálculo",
		"grupo": "1CV3",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Martes",
				"hora_inicio": "15:00",
				"hora_fin": "16:30"
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "15:00",
				"hora_fin": "16:30"
			},
			{
				"dia": "Jueves",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Viernes",
				"hora_inicio": "15:00",
				"hora_fin": "16:30"
			}
		]
	},
	{
		"profesor": "GONZALEZ CISNEROS ALEJANDRO",
		"id_unidad_aprendizaje": 3,
		"unidad_aprendizaje": "Matemáticas Discretas",
		"grupo": "1CV3",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "20:00",
				"hora_fin": "21:30"
			},
			{
				"dia": "Martes",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "20:00",
				"hora_fin": "21:30"
			},
			{
				"dia": "Jueves",
				"hora_inicio": "20:00",
				"hora_fin": "21:30"
			},
			{
				"dia": "Viernes",
				"hora_inicio": "20:00",
				"hora_fin": "21:30"
			}
		]
	},
	{
		"profesor": "PALMA OROZCO ROSAURA",
		"id_unidad_aprendizaje": 4,
		"unidad_aprendizaje": "Algoritmia y Programación Estructurada",
		"grupo": "1CV3",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "15:00",
				"hora_fin": "16:30"
			},
			{
				"dia": "Martes",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Jueves",
				"hora_inicio": "15:00",
				"hora_fin": "16:30"
			},
			{
				"dia": "Viernes",
				"hora_inicio": "16:30",
				"hora_fin": "18:00"
			}
		]
	},
	{
		"profesor": "ESQUIVEL CENTENO JOSE ARMANDO",
		"id_unidad_aprendizaje": 5,
		"unidad_aprendizaje": "Física",
		"grupo": "1CV3",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "18:30",
				"hora_fin": "20:00"
			},
			{
				"dia": "Martes",
				"hora_inicio": "16:30",
				"hora_fin": "18:00"
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Jueves",
				"hora_inicio": "18:30",
				"hora_fin": "20:00"
			},
			{
				"dia": "Viernes",
				"hora_inicio": "",
				"hora_fin": ""
			}
		]
	},
	{
		"profesor": "CELIS DOMINGUEZ ADRIANA BERENICE",
		"id_unidad_aprendizaje": 6,
		"unidad_aprendizaje": "Ingeniería, Ética y Sociedad",
		"grupo": "1CV3",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Martes",
				"hora_inicio": "18:30",
				"hora_fin": "20:00"
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "18:30",
				"hora_fin": "20:00"
			},
			{
				"dia": "Jueves",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Viernes",
				"hora_inicio": "18:30",
				"hora_fin": "20:00"
			}
		]
	},
	{
		"profesor": "GONZALEZ ALBARRAN GISELA",
		"id_unidad_aprendizaje": 11,
		"unidad_aprendizaje": "Comunicación Oral y Escrita",
		"grupo": "1CV3",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "16:30",
				"hora_fin": "18:00"
			},
			{
				"dia": "Martes",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "16:30",
				"hora_fin": "18:00"
			},
			{
				"dia": "Jueves",
				"hora_inicio": "16:30",
				"hora_fin": "18:00"
			},
			{
				"dia": "Viernes",
				"hora_inicio": "",
				"hora_fin": ""
			}
		]
	},
	{
		"profesor": "GUTIERREZ MEJIA DARWIN",
		"id_unidad_aprendizaje": 2,
		"unidad_aprendizaje": "Cálculo",
		"grupo": "1CV4",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "16:30",
				"hora_fin": "18:00"
			},
			{
				"dia": "Martes",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "16:30",
				"hora_fin": "18:00"
			},
			{
				"dia": "Jueves",
				"hora_inicio": "16:30",
				"hora_fin": "18:00"
			},
			{
				"dia": "Viernes",
				"hora_inicio": "",
				"hora_fin": ""
			}
		]
	},
	{
		"profesor": "GONZALEZ CISNEROS ALEJANDRO",
		"id_unidad_aprendizaje": 3,
		"unidad_aprendizaje": "Matemáticas Discretas",
		"grupo": "1CV4",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Martes",
				"hora_inicio": "18:30",
				"hora_fin": "20:00"
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "18:30",
				"hora_fin": "20:00"
			},
			{
				"dia": "Jueves",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Viernes",
				"hora_inicio": "18:30",
				"hora_fin": "20:00"
			}
		]
	},
	{
		"profesor": "PALMA OROZCO ROSAURA",
		"id_unidad_aprendizaje": 4,
		"unidad_aprendizaje": "Algoritmia y Programación Estructurada",
		"grupo": "1CV4",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Martes",
				"hora_inicio": "15:00",
				"hora_fin": "16:30"
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "15:00",
				"hora_fin": "16:30"
			},
			{
				"dia": "Jueves",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Viernes",
				"hora_inicio": "15:00",
				"hora_fin": "16:30"
			}
		]
	},
	{
		"profesor": "ESQUIVEL CENTENO JOSE ARMANDO",
		"id_unidad_aprendizaje": 5,
		"unidad_aprendizaje": "Física",
		"grupo": "1CV4",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "15:00",
				"hora_fin": "16:30"
			},
			{
				"dia": "Martes",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Jueves",
				"hora_inicio": "15:00",
				"hora_fin": "16:30"
			},
			{
				"dia": "Viernes",
				"hora_inicio": "16:30",
				"hora_fin": "18:00"
			}
		]
	},
	{
		"profesor": "WINFIELD REYES ANA MARIA",
		"id_unidad_aprendizaje": 6,
		"unidad_aprendizaje": "Ingeniería, Ética y Sociedad",
		"grupo": "1CV4",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "18:30",
				"hora_fin": "20:00"
			},
			{
				"dia": "Martes",
				"hora_inicio": "16:30",
				"hora_fin": "18:00"
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Jueves",
				"hora_inicio": "18:30",
				"hora_fin": "20:00"
			},
			{
				"dia": "Viernes",
				"hora_inicio": "",
				"hora_fin": ""
			}
		]
	},
	{
		"profesor": "VILLEGAS NAVARRETE SONIA",
		"id_unidad_aprendizaje": 11,
		"unidad_aprendizaje": "Comunicación Oral y Escrita",
		"grupo": "1CV4",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "20:00",
				"hora_fin": "21:30"
			},
			{
				"dia": "Martes",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "20:00",
				"hora_fin": "21:30"
			},
			{
				"dia": "Jueves",
				"hora_inicio": "20:00",
				"hora_fin": "21:30"
			},
			{
				"dia": "Viernes",
				"hora_inicio": "",
				"hora_fin": ""
			}
		]
	},
	{
		"profesor": "BARRON FERNANDEZ RICARDO",
		"id_unidad_aprendizaje": 2,
		"unidad_aprendizaje": "Cálculo",
		"grupo": "1CV5",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "18:30",
				"hora_fin": "20:00"
			},
			{
				"dia": "Martes",
				"hora_inicio": "16:30",
				"hora_fin": "18:00"
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Jueves",
				"hora_inicio": "18:30",
				"hora_fin": "20:00"
			},
			{
				"dia": "Viernes",
				"hora_inicio": "",
				"hora_fin": ""
			}
		]
	},
	{
		"profesor": "VIVEROS VELA M. EN C. KARINA",
		"id_unidad_aprendizaje": 3,
		"unidad_aprendizaje": "Matemáticas Discretas",
		"grupo": "1CV5",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "13:30",
				"hora_fin": "15:00"
			},
			{
				"dia": "Martes",
				"hora_inicio": "13:30",
				"hora_fin": "15:00"
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "13:30",
				"hora_fin": "15:00"
			},
			{
				"dia": "Jueves",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Viernes",
				"hora_inicio": "13:30",
				"hora_fin": "15:00"
			}
		]
	},
	{
		"profesor": "MOSCOSO MALAGON YOSAFAT",
		"id_unidad_aprendizaje": 4,
		"unidad_aprendizaje": "Algoritmia y Programación Estructurada",
		"grupo": "1CV5",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "16:30",
				"hora_fin": "18:00"
			},
			{
				"dia": "Martes",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "16:30",
				"hora_fin": "18:00"
			},
			{
				"dia": "Jueves",
				"hora_inicio": "16:30",
				"hora_fin": "18:00"
			},
			{
				"dia": "Viernes",
				"hora_inicio": "",
				"hora_fin": ""
			}
		]
	},
	{
		"profesor": "JUAREZ LEON CARLOS",
		"id_unidad_aprendizaje": 5,
		"unidad_aprendizaje": "Física",
		"grupo": "1CV5",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Martes",
				"hora_inicio": "15:00",
				"hora_fin": "16:30"
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "15:00",
				"hora_fin": "16:30"
			},
			{
				"dia": "Jueves",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Viernes",
				"hora_inicio": "15:00",
				"hora_fin": "16:30"
			}
		]
	},
	{
		"profesor": "WINFIELD REYES ANA MARIA",
		"id_unidad_aprendizaje": 6,
		"unidad_aprendizaje": "Ingeniería, Ética y Sociedad",
		"grupo": "1CV5",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "15:00",
				"hora_fin": "16:30"
			},
			{
				"dia": "Martes",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Jueves",
				"hora_inicio": "15:00",
				"hora_fin": "16:30"
			},
			{
				"dia": "Viernes",
				"hora_inicio": "16:30",
				"hora_fin": "18:00"
			}
		]
	},
	{
		"profesor": "LAZCANO XOXOTLA LAURA",
		"id_unidad_aprendizaje": 11,
		"unidad_aprendizaje": "Comunicación Oral y Escrita",
		"grupo": "1CV5",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Martes",
				"hora_inicio": "18:30",
				"hora_fin": "20:00"
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "18:30",
				"hora_fin": "20:00"
			},
			{
				"dia": "Jueves",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Viernes",
				"hora_inicio": "18:30",
				"hora_fin": "20:00"
			}
		]
	},
	{
		"profesor": "JUAREZ LEON CARLOS",
		"id_unidad_aprendizaje": 2,
		"unidad_aprendizaje": "Cálculo",
		"grupo": "1CV6",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Martes",
				"hora_inicio": "18:30",
				"hora_fin": "20:00"
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "18:30",
				"hora_fin": "20:00"
			},
			{
				"dia": "Jueves",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Viernes",
				"hora_inicio": "18:30",
				"hora_fin": "20:00"
			}
		]
	},
	{
		"profesor": "KOLESNIKOVA OLGA",
		"id_unidad_aprendizaje": 3,
		"unidad_aprendizaje": "Matemáticas Discretas",
		"grupo": "1CV6",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "16:30",
				"hora_fin": "18:00"
			},
			{
				"dia": "Martes",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "16:30",
				"hora_fin": "18:00"
			},
			{
				"dia": "Jueves",
				"hora_inicio": "16:30",
				"hora_fin": "18:00"
			},
			{
				"dia": "Viernes",
				"hora_inicio": "13:30",
				"hora_fin": "15:00"
			}
		]
	},
	{
		"profesor": "RAMIREZ ROMERO TONAHTIU ARTURO",
		"id_unidad_aprendizaje": 4,
		"unidad_aprendizaje": "Algoritmia y Programación Estructurada",
		"grupo": "1CV6",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "18:30",
				"hora_fin": "20:00"
			},
			{
				"dia": "Martes",
				"hora_inicio": "16:30",
				"hora_fin": "18:00"
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Jueves",
				"hora_inicio": "18:30",
				"hora_fin": "20:00"
			},
			{
				"dia": "Viernes",
				"hora_inicio": "",
				"hora_fin": ""
			}
		]
	},
	{
		"profesor": "DIAZ HUERTA CLAUDIA CELIA",
		"id_unidad_aprendizaje": 5,
		"unidad_aprendizaje": "Física",
		"grupo": "1CV6",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "15:00",
				"hora_fin": "16:30"
			},
			{
				"dia": "Martes",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Jueves",
				"hora_inicio": "15:00",
				"hora_fin": "16:30"
			},
			{
				"dia": "Viernes",
				"hora_inicio": "16:30",
				"hora_fin": "18:00"
			}
		]
	},
	{
		"profesor": "MARTINEZ ACOSTA LILIAN",
		"id_unidad_aprendizaje": 6,
		"unidad_aprendizaje": "Ingeniería, Ética y Sociedad",
		"grupo": "1CV6",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Martes",
				"hora_inicio": "15:00",
				"hora_fin": "16:30"
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "15:00",
				"hora_fin": "16:30"
			},
			{
				"dia": "Jueves",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Viernes",
				"hora_inicio": "15:00",
				"hora_fin": "16:30"
			}
		]
	},
	{
		"profesor": "CABRERA CHAVEZ GLORIA LOURDES",
		"id_unidad_aprendizaje": 11,
		"unidad_aprendizaje": "Comunicación Oral y Escrita",
		"grupo": "1CV6",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "20:00",
				"hora_fin": "21:30"
			},
			{
				"dia": "Martes",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "20:00",
				"hora_fin": "21:30"
			},
			{
				"dia": "Jueves",
				"hora_inicio": "20:00",
				"hora_fin": "21:30"
			},
			{
				"dia": "Viernes",
				"hora_inicio": "",
				"hora_fin": ""
			}
		]
	},
	{
		"profesor": "JUAREZ LEON CARLOS",
		"id_unidad_aprendizaje": 2,
		"unidad_aprendizaje": "Cálculo",
		"grupo": "1CV7",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "20:00",
				"hora_fin": "21:30"
			},
			{
				"dia": "Martes",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "20:00",
				"hora_fin": "21:30"
			},
			{
				"dia": "Jueves",
				"hora_inicio": "20:00",
				"hora_fin": "21:30"
			},
			{
				"dia": "Viernes",
				"hora_inicio": "",
				"hora_fin": ""
			}
		]
	},
	{
		"profesor": "DORANTES VILLA CLAUDIA JISELA",
		"id_unidad_aprendizaje": 3,
		"unidad_aprendizaje": "Matemáticas Discretas",
		"grupo": "1CV7",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "18:30",
				"hora_fin": "20:00"
			},
			{
				"dia": "Martes",
				"hora_inicio": "16:30",
				"hora_fin": "18:00"
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Jueves",
				"hora_inicio": "18:30",
				"hora_fin": "20:00"
			},
			{
				"dia": "Viernes",
				"hora_inicio": "13:30",
				"hora_fin": "15:00"
			}
		]
	},
	{
		"profesor": "MOSCOSO MALAGON YOSAFAT",
		"id_unidad_aprendizaje": 4,
		"unidad_aprendizaje": "Algoritmia y Programación Estructurada",
		"grupo": "1CV7",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Martes",
				"hora_inicio": "18:30",
				"hora_fin": "20:00"
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "18:30",
				"hora_fin": "20:00"
			},
			{
				"dia": "Jueves",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Viernes",
				"hora_inicio": "18:30",
				"hora_fin": "20:00"
			}
		]
	},
	{
		"profesor": "RANGEL GUZMAN ALFREDO",
		"id_unidad_aprendizaje": 5,
		"unidad_aprendizaje": "Física",
		"grupo": "1CV7",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Martes",
				"hora_inicio": "15:00",
				"hora_fin": "16:30"
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "15:00",
				"hora_fin": "16:30"
			},
			{
				"dia": "Jueves",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Viernes",
				"hora_inicio": "15:00",
				"hora_fin": "16:30"
			}
		]
	},
	{
		"profesor": "YLLANES MEJIA BERNARDO",
		"id_unidad_aprendizaje": 6,
		"unidad_aprendizaje": "Ingeniería, Ética y Sociedad",
		"grupo": "1CV7",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "16:30",
				"hora_fin": "18:00"
			},
			{
				"dia": "Martes",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "16:30",
				"hora_fin": "18:00"
			},
			{
				"dia": "Jueves",
				"hora_inicio": "16:30",
				"hora_fin": "18:00"
			},
			{
				"dia": "Viernes",
				"hora_inicio": "",
				"hora_fin": ""
			}
		]
	},
	{
		"profesor": "CABRERA CHAVEZ GLORIA LOURDES",
		"id_unidad_aprendizaje": 11,
		"unidad_aprendizaje": "Comunicación Oral y Escrita",
		"grupo": "1CV7",
		"horarios": [
			{
				"dia": "Lunes",
				"hora_inicio": "15:00",
				"hora_fin": "16:30"
			},
			{
				"dia": "Martes",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Miércoles",
				"hora_inicio": "",
				"hora_fin": ""
			},
			{
				"dia": "Jueves",
				"hora_inicio": "15:00",
				"hora_fin": "16:30"
			},
			{
				"dia": "Viernes",
				"hora_inicio": "16:30",
				"hora_fin": "18:00"
			}
		]
		}];

		for (var i = horarios.length - 1; i >= 0; i--) {

			var prof = horarios[i].profesor.split(' ');
			var name = '';
			prof.forEach((p: any) => {
				if(p.length > 1) {
					let q = p[0]
					name += (q + p.substring(1,p.length).toLowerCase() + ' ')
				} else {
					name += (p + ' ');
				}
			})
			
			let horario = {
				id: i,
				profesor: name.trim(),
				id_unidad_aprendizaje: horarios[i].id_unidad_aprendizaje,
				unidad_aprendizaje: horarios[i].unidad_aprendizaje,
				grupo: horarios[i].grupo,
				lugares_disponibles: 33,
				alumnos_inscritos: 0,
				horarios: horarios[i].horarios
			}

			let horarioClase = new HorarioClase(horario);

		  horarioClase.save()
		  .then(() => console.log("HorarioClase Factory => Data => Success"))
		  .catch((err) => console.log(err));
		}
	}

	export let unidadesAprendizajeEscom = () => {
		let isc_escom = [
			{
			  "id": 1,
			  "id_plan_estudios": 1,
				"nombre": "Análisis Vectorial",
				"semestre": 1,
				"creditos": 4.39,
				"optativa": false
			},
			{
			  "id": 2,
			  "id_plan_estudios": 1,
				"nombre": "Cálculo",
				"semestre": 1,
				"creditos": 4.45,
				"optativa": false
			},		
			{
			  "id": 3,
			  "id_plan_estudios": 1,
				"nombre": "Matemáticas Discretas",
				"semestre": 1,
				"creditos": 5.85,
				"optativa": false
			},
			{
			  "id": 4,
			  "id_plan_estudios": 1,
				"nombre": "Algoritmia y Programación Estructurada",
				"semestre": 1,
				"creditos": 4.45,
				"optativa": false
			},
			{
			  "id": 5,
			  "id_plan_estudios": 1,
				"nombre": "Física",
				"semestre": 1,
				"creditos": 4.39,
				"optativa": false
			},
			{
			  "id": 6,
			  "id_plan_estudios": 1,
				"nombre": "Ingeniería Ética y Sociedad",
				"semestre": 1,
				"creditos": 4.39,
				"optativa": false
			},
			{
			  "id": 7,
			  "id_plan_estudios": 1,
				"nombre": "Ecuaciones Diferenciales",
				"semestre": 2,
				"creditos": 4.39,
				"optativa": false
			},
			{
			  "id": 8,
			  "id_plan_estudios": 1,
				"nombre": "Álgebra Lineal",
				"semestre": 2,
				"creditos": 4.39,
				"optativa": false
			},
			{
			  "id": 9,
			  "id_plan_estudios": 1,
				"nombre": "Cálculo Aplicado",
				"semestre": 2,
				"creditos": 4.44,
				"optativa": false
			},
			{
			  "id": 10,
			  "id_plan_estudios": 1,
				"nombre": "Estructuras de Datos",
				"semestre": 2,
				"creditos": 4.39,
				"optativa": false
			},
			{
			  "id": 11,
			  "id_plan_estudios": 1,
				"nombre": "Comunicación Oral y Escrita",
				"semestre": 2,
				"creditos": 4.39,
				"optativa": false
			},
			{
			  "id": 12,
			  "id_plan_estudios": 1,
				"nombre": "Análisis Fundamental de Circuitos",
				"semestre": 2,
				"creditos": 4.33,
				"optativa": false
			},
			{
			  "id": 13,
			  "id_plan_estudios": 1,
				"nombre": "Matemáticas Avanzadas para la Ingeniería",
				"semestre": 3,
				"creditos": 4.45,
				"optativa": false
			},
			{
			  "id": 14,	  
			  "id_plan_estudios": 1,
				"nombre": "Fundamentos Económicos",
				"semestre": 3,
				"creditos": 4.33,
				"optativa": false
			},
			{
			  "id": 15,
			  "id_plan_estudios": 1,
				"nombre": "Fundamentos de Diseño Digital",
				"semestre": 3,
				"creditos": 4.48,
				"optativa": false
			},
			{
			  "id": 16,	  
			  "id_plan_estudios": 1,
				"nombre": "Teoría Computacional",
				"semestre": 3,
				"creditos": 4.36,
				"optativa": false
			},
			{
			  "id": 17,  
			  "id_plan_estudios": 1,
				"nombre": "Bases de Datos",
				"semestre": 3,
				"creditos": 4.44,
				"optativa": false
			},
			{
			  "id": 18,
			  "id_plan_estudios": 1,
				"nombre": "Programación Orientada a Objectos",
				"semestre": 3,
				"creditos": 4.44,
				"optativa": false
			},
			{
			  "id": 19,
			  "id_plan_estudios": 1,
				"nombre": "Electrónica Analógica",
				"semestre": 3,
				"creditos": 4.35,
				"optativa": false
			},
			{
			  "id": 20,
			  "id_plan_estudios": 1,
				"nombre": "Redes de Cómputadoras",
				"semestre": 4,
				"creditos": 4.46,
				"optativa": false
			},
			{
			  "id": 21,
			  "id_plan_estudios": 1,
				"nombre": "Diseño de Sistemas Digitales",
				"semestre": 4,
				"creditos": 4.50,
				"optativa": false
			},
			{
			  "id": 22,
			  "id_plan_estudios": 1,
				"nombre": "Probabilidad y Estadística",
				"semestre": 4,
				"creditos": 4.39,
				"optativa": false
			},
			{
			  "id": 23,
			  "id_plan_estudios": 1,
				"nombre": "Sistemas Operativos",
				"semestre": 4,
				"creditos": 4.39,
				"optativa": false
			},
			{
			  "id": 24,
			  "id_plan_estudios": 1,
				"nombre": "Análisis y Diseño Orientado a Objectos",
				"semestre": 4,
				"creditos": 4.39,
				"optativa": false
			},
			{
			  "id": 25,
			  "id_plan_estudios": 1,
				"nombre": "Tecnologías Web",
				"semestre": 4,
				"creditos": 4.49,
				"optativa": false
			},
			{
			  "id": 26,
			  "id_plan_estudios": 1,
				"nombre": "Administración Financiera",
				"semestre": 4,
				"creditos": 4.36,
				"optativa": false
			},
			{
			  "id": 27,
			  "id_plan_estudios": 1,
				"nombre": "Arquitectura de Computadoras",
				"semestre": 5,
				"creditos": 4.39,
				"optativa": false
			},
			{
			  "id": 28,
			  "id_plan_estudios": 1,
				"nombre": "Optativa A",
				"semestre": 5,
				"creditos": 4.39,
				"optativa": true
			},
			{
			  "id": 29,
			  "id_plan_estudios": 1,
				"nombre": "Análisis de Algoritmos",
				"semestre": 5,
				"creditos": 4.39,
				"optativa": false
			},
			{
			  "id": 30,
			  "id_plan_estudios": 1,
				"nombre": "Optativa B",
				"semestre": 5,
				"creditos": 4.39,
				"optativa": true
			},
			{
			  "id": 31,
			  "id_plan_estudios": 1,
				"nombre": "Ingeniería de Software",
				"semestre": 5,
				"creditos": 4.39,
				"optativa": false
			},
			{
			  "id": 32,
			  "id_plan_estudios": 1,
				"nombre": "Administración de Proyectos",
				"semestre": 5,
				"creditos": 4.39,
				"optativa": false
			},
			{
			  "id": 33,
			  "id_plan_estudios": 1,
				"nombre": "Instrumentación",
				"semestre": 5,
				"creditos": 4.39,
				"optativa": false
			},
			{
			  "id": 34,
			  "id_plan_estudios": 1,
				"nombre": "Teoría de Comunicaciones y Señales",
				"semestre": 6,
				"creditos": 4.39,
				"optativa": false
			},
			{
			  "id": 35,
			  "id_plan_estudios": 1,
				"nombre": "Aplicaciones para Comunicaciones en Red",
				"semestre": 6,
				"creditos": 4.39,
				"optativa": false
			},
			{
			  "id": 36,
			  "id_plan_estudios": 1,
				"nombre": "Métodos Cuantitativos para la Toma de Decisiones",
				"semestre": 6,
				"creditos": 4.39,
				"optativa": false
			},
			{
			  "id": 37,
			  "id_plan_estudios": 1,
				"nombre": "Introducción a los Microcontroladores",
				"semestre": 6,
				"creditos": 4.39,
				"optativa": false
			},
			{
			  "id": 38,
			  "id_plan_estudios": 1,
				"nombre": "Compiladores",
				"semestre": 6,
				"creditos": 4.39,
				"optativa": false
			},
			{
			  "id": 39,
			  "id_plan_estudios": 1,
				"nombre": "Optativa C",
				"semestre": 6,
				"creditos": 4.39,
				"optativa": false
			},
			{
			  "id": 40,
			  "id_plan_estudios": 1,
				"nombre": "Optativa D",
				"semestre": 6,
				"creditos": 4.39,
				"optativa": false
			},
			{
			  "id": 41,
			  "id_plan_estudios": 1,
				"nombre": "Desarrollo de Sistemas Distribuidos",
				"semestre": 7,
				"creditos": 4.39,
				"optativa": false
			},
			{
			  "id": 42,
			  "id_plan_estudios": 1,
				"nombre": "Administración de Servicios en Red",
				"semestre": 7,
				"creditos": 4.39,
				"optativa": false
			},
			{
			  "id": 43,
			  "id_plan_estudios": 1,
				"nombre": "Gestión Empresarial",
				"semestre": 7,
				"creditos": 4.39,
				"optativa": false
			},
			{
			  "id": 44,
			  "id_plan_estudios": 1,
				"nombre": "Liderazgo",
				"semestre": 7,
				"creditos": 4.39,
				"optativa": false
			}];

	isc_escom.forEach((ua) => {
		let unidadAprendizaje = new UnidadAprendizaje(ua);

	  unidadAprendizaje.save()
	  .then(() => console.log("UnidadAprendizaje Factory => Data => Success"))
	  .catch((err) => console.log(err));
	})
}