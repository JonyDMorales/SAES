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
	let horarios: any[] = [{
    "profesor": "MANZANILLA GRANADOS HECTOR MANUEL",
    "unidad_aprendizaje": "CALCULO",
    "grupo": "1CM1",
    "id_unidad_aprendizaje": 2,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Martes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Miércoles",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Jueves",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Viernes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      }
    ]
  },
  {
    "profesor": "MUÑOZ SALAZAR LAURA",
    "unidad_aprendizaje": "FISICA",
    "grupo": "1CM1",
    "id_unidad_aprendizaje": 5,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "10:30",
        "hora_fin": "12:00"
      },
      {
        "dia": "Martes",
        "hora_inicio": "08:30",
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
    "profesor": "ROJAS LUNA HECTOR",
    "unidad_aprendizaje": "ANALISIS VECTORIAL",
    "grupo": "1CM1",
    "id_unidad_aprendizaje": 1,
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
    "profesor": "RUEDA MELENDEZ MARCO ANTONIO",
    "unidad_aprendizaje": "ALGORITMIA Y PROGRAMACION ESTRUCTURADA",
    "grupo": "1CM1",
    "id_unidad_aprendizaje": 4,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
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
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Viernes",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      }
    ]
  },
  {
    "profesor": "SANCHEZ MORENO ADRIANA DE LA P",
    "unidad_aprendizaje": "INGENIERIA ETICA Y SOCIEDAD",
    "grupo": "1CM1",
    "id_unidad_aprendizaje": 6,
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
    "profesor": "MOSSO GARCIA M. EN C. IVAN GIOVANNY",
    "unidad_aprendizaje": "MATEMATICAS DISCRETAS",
    "grupo": "1CM1",
    "id_unidad_aprendizaje": 3,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      },
      {
        "dia": "Martes",
        "hora_inicio": "12:00",
        "hora_fin": "13:30"
      },
      {
        "dia": "Miércoles",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      },
      {
        "dia": "Jueves",
        "hora_inicio": "08:30",
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
    "profesor": "ALMAZAN FARFAN ROCIO",
    "unidad_aprendizaje": "ANALISIS FUNDAMENTAL DE CIRCUITOS",
    "grupo": "1CM10",
    "id_unidad_aprendizaje": 12,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      },
      {
        "dia": "Martes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Miércoles",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      },
      {
        "dia": "Jueves",
        "hora_inicio": "08:30",
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
    "profesor": "SANCHEZ VARGAS PERLA REBECA",
    "unidad_aprendizaje": "ALGEBRA LINEAL",
    "grupo": "1CM10",
    "id_unidad_aprendizaje": 8,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Martes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Miércoles",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Jueves",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Viernes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      }
    ]
  },
  {
    "profesor": "SANCHEZ VARGAS PERLA REBECA",
    "unidad_aprendizaje": "ECUACIONES DIFERENCIALES",
    "grupo": "1CM10",
    "id_unidad_aprendizaje": 7,
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
    "profesor": "SANCHEZ PALACIOS MARIA SUSANA",
    "unidad_aprendizaje": "CALCULO APLICADO",
    "grupo": "1CM10",
    "id_unidad_aprendizaje": 9,
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
    "profesor": "SAUCEDO DELGADO RAFAEL NORMAN",
    "unidad_aprendizaje": "ESTRUCTURAS DE DATOS",
    "grupo": "1CM10",
    "id_unidad_aprendizaje": 10,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
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
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Viernes",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      }
    ]
  },
  {
    "profesor": "SIN ASIGNAR",
    "unidad_aprendizaje": "ANALISIS VECTORIAL",
    "grupo": "1CM10",
    "id_unidad_aprendizaje": 1,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "10:30",
        "hora_fin": "12:00"
      },
      {
        "dia": "Martes",
        "hora_inicio": "08:30",
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
    "profesor": "ALMAZAN FARFAN ROCIO",
    "unidad_aprendizaje": "ANALISIS FUNDAMENTAL DE CIRCUITOS",
    "grupo": "1CM11",
    "id_unidad_aprendizaje": 12,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "10:30",
        "hora_fin": "12:00"
      },
      {
        "dia": "Martes",
        "hora_inicio": "08:30",
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
    "profesor": "CARBALLO JIMENEZ JUAN MANUEL",
    "unidad_aprendizaje": "ANALISIS VECTORIAL",
    "grupo": "1CM11",
    "id_unidad_aprendizaje": 1,
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
    "profesor": "CERVANTES ESPINOSA LUIS MOCTEZUMA",
    "unidad_aprendizaje": "ECUACIONES DIFERENCIALES",
    "grupo": "1CM11",
    "id_unidad_aprendizaje": 7,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
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
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Viernes",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      }
    ]
  },
  {
    "profesor": "RIOS DE LA TORRE IGNACIO",
    "unidad_aprendizaje": "ALGEBRA LINEAL",
    "grupo": "1CM11",
    "id_unidad_aprendizaje": 8,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      },
      {
        "dia": "Martes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Miércoles",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      },
      {
        "dia": "Jueves",
        "hora_inicio": "08:30",
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
    "unidad_aprendizaje": "ESTRUCTURAS DE DATOS",
    "grupo": "1CM11",
    "id_unidad_aprendizaje": 10,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Martes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Miércoles",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Jueves",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Viernes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      }
    ]
  },
  {
    "profesor": "RUIZ LEDESMA ELENA FABIOLA",
    "unidad_aprendizaje": "CALCULO APLICADO",
    "grupo": "1CM11",
    "id_unidad_aprendizaje": 9,
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
    "profesor": "ALMAZAN FARFAN ROCIO",
    "unidad_aprendizaje": "ANALISIS FUNDAMENTAL DE CIRCUITOS",
    "grupo": "1CM12",
    "id_unidad_aprendizaje": 12,
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
    "profesor": "CARBALLO JIMENEZ JUAN MANUEL",
    "unidad_aprendizaje": "ANALISIS VECTORIAL",
    "grupo": "1CM12",
    "id_unidad_aprendizaje": 1,
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
    "profesor": "CERVANTES ESPINOSA LUIS MOCTEZUMA",
    "unidad_aprendizaje": "ECUACIONES DIFERENCIALES",
    "grupo": "1CM12",
    "id_unidad_aprendizaje": 7,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Martes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Miércoles",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Jueves",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Viernes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      }
    ]
  },
  {
    "profesor": "FRANCO MARTINEZ EDGARDO ADRIAN",
    "unidad_aprendizaje": "ESTRUCTURAS DE DATOS",
    "grupo": "1CM12",
    "id_unidad_aprendizaje": 10,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      },
      {
        "dia": "Martes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Miércoles",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      },
      {
        "dia": "Jueves",
        "hora_inicio": "08:30",
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
    "profesor": "MANZANILLA GRANADOS HECTOR MANUEL",
    "unidad_aprendizaje": "CALCULO APLICADO",
    "grupo": "1CM12",
    "id_unidad_aprendizaje": 9,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
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
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Viernes",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      }
    ]
  },
  {
    "profesor": "REYES BERMEJO TLATOANI DE JESUS",
    "unidad_aprendizaje": "ALGEBRA LINEAL",
    "grupo": "1CM12",
    "id_unidad_aprendizaje": 8,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "10:30",
        "hora_fin": "12:00"
      },
      {
        "dia": "Martes",
        "hora_inicio": "08:30",
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
    "profesor": "VAZQUEZ ORTIZ MIJAIL",
    "unidad_aprendizaje": "ANALISIS FUNDAMENTAL DE CIRCUITOS",
    "grupo": "1CM13",
    "id_unidad_aprendizaje": 12,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Martes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Miércoles",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Jueves",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Viernes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      }
    ]
  },
  {
    "profesor": "FRANCO MARTINEZ EDGARDO ADRIAN",
    "unidad_aprendizaje": "ESTRUCTURAS DE DATOS",
    "grupo": "1CM13",
    "id_unidad_aprendizaje": 10,
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
    "profesor": "OJEDA GUILLEN DIDIER",
    "unidad_aprendizaje": "ANALISIS VECTORIAL",
    "grupo": "1CM13",
    "id_unidad_aprendizaje": 1,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      },
      {
        "dia": "Martes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Miércoles",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      },
      {
        "dia": "Jueves",
        "hora_inicio": "08:30",
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
    "profesor": "SILVA MARTINEZ JORGE JAVIER",
    "unidad_aprendizaje": "ECUACIONES DIFERENCIALES",
    "grupo": "1CM13",
    "id_unidad_aprendizaje": 7,
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
    "profesor": "TORRES MANRIQUEZ JUAN JOSE",
    "unidad_aprendizaje": "ALGEBRA LINEAL",
    "grupo": "1CM13",
    "id_unidad_aprendizaje": 8,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "10:30",
        "hora_fin": "12:00"
      },
      {
        "dia": "Martes",
        "hora_inicio": "08:30",
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
    "profesor": "CAÑEDO SUAREZ LETICIA",
    "unidad_aprendizaje": "CALCULO",
    "grupo": "1CM14",
    "id_unidad_aprendizaje": 2,
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
    "profesor": "FIGUEROA DEL PRADO FELIPE DE JESUS",
    "unidad_aprendizaje": "ANALISIS FUNDAMENTAL DE CIRCUITOS",
    "grupo": "1CM14",
    "id_unidad_aprendizaje": 12,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      },
      {
        "dia": "Martes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Miércoles",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      },
      {
        "dia": "Jueves",
        "hora_inicio": "08:30",
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
    "profesor": "GONZALEZ CISNEROS ALEJANDRO",
    "unidad_aprendizaje": "MATEMATICAS DISCRETAS",
    "grupo": "1CM14",
    "id_unidad_aprendizaje": 3,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Martes",
        "hora_inicio": "12:00",
        "hora_fin": "13:30"
      },
      {
        "dia": "Miércoles",
        "hora_inicio": "13:30",
        "hora_fin": "15:00"
      },
      {
        "dia": "Jueves",
        "hora_inicio": "13:30",
        "hora_fin": "15:00"
      },
      {
        "dia": "Viernes",
        "hora_inicio": "12:00",
        "hora_fin": "13:30"
      }
    ]
  },
  {
    "profesor": "ROJAS LUNA HECTOR",
    "unidad_aprendizaje": "CALCULO APLICADO",
    "grupo": "1CM14",
    "id_unidad_aprendizaje": 9,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "10:30",
        "hora_fin": "12:00"
      },
      {
        "dia": "Martes",
        "hora_inicio": "08:30",
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
    "profesor": "SILVA MARTINEZ JORGE JAVIER",
    "unidad_aprendizaje": "ECUACIONES DIFERENCIALES",
    "grupo": "1CM14",
    "id_unidad_aprendizaje": 7,
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
    "unidad_aprendizaje": "INGENIERIA ETICA Y SOCIEDAD",
    "grupo": "1CM2",
    "id_unidad_aprendizaje": 6,
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
    "profesor": "DORANTES VILLA CLAUDIA JISELA",
    "unidad_aprendizaje": "MATEMATICAS DISCRETAS",
    "grupo": "1CM2",
    "id_unidad_aprendizaje": 3,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
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
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Viernes",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      }
    ]
  },
  {
    "profesor": "GONZALEZ TRUJILLO MIGUEL",
    "unidad_aprendizaje": "ANALISIS VECTORIAL",
    "grupo": "1CM2",
    "id_unidad_aprendizaje": 1,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      },
      {
        "dia": "Martes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Miércoles",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      },
      {
        "dia": "Jueves",
        "hora_inicio": "08:30",
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
    "profesor": "JUAREZ MARTINEZ GENARO",
    "unidad_aprendizaje": "ALGORITMIA Y PROGRAMACION ESTRUCTURADA",
    "grupo": "1CM2",
    "id_unidad_aprendizaje": 4,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "13:30",
        "hora_fin": "15:00"
      },
      {
        "dia": "Martes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Miércoles",
        "hora_inicio": "13:30",
        "hora_fin": "15:00"
      },
      {
        "dia": "Jueves",
        "hora_inicio": "13:30",
        "hora_fin": "15:00"
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
    "unidad_aprendizaje": "FISICA",
    "grupo": "1CM2",
    "id_unidad_aprendizaje": 5,
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
    "profesor": "VIVEROS VELA M. EN C. KARINA",
    "unidad_aprendizaje": "CALCULO",
    "grupo": "1CM2",
    "id_unidad_aprendizaje": 2,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "10:30",
        "hora_fin": "12:00"
      },
      {
        "dia": "Martes",
        "hora_inicio": "08:30",
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
    "profesor": "FERRER TENORIO JORGE",
    "unidad_aprendizaje": "COMUNICACION ORAL Y ESCRITA",
    "grupo": "1CM3",
    "id_unidad_aprendizaje": 11,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      },
      {
        "dia": "Martes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Miércoles",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      },
      {
        "dia": "Jueves",
        "hora_inicio": "08:30",
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
    "profesor": "GUZMAN AGUILAR FLORENCIO",
    "unidad_aprendizaje": "FISICA",
    "grupo": "1CM3",
    "id_unidad_aprendizaje": 5,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "10:30",
        "hora_fin": "12:00"
      },
      {
        "dia": "Martes",
        "hora_inicio": "08:30",
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
    "profesor": "JIMENEZ CONTRERAS EDITH ADRIANA",
    "unidad_aprendizaje": "MATEMATICAS DISCRETAS",
    "grupo": "1CM3",
    "id_unidad_aprendizaje": 3,
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
    "profesor": "JIMENEZ VILLANUEVA MARTHA PATRICIA",
    "unidad_aprendizaje": "CALCULO",
    "grupo": "1CM3",
    "id_unidad_aprendizaje": 2,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Martes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Miércoles",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Jueves",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Viernes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      }
    ]
  },
  {
    "profesor": "MARTINEZ ACOSTA LILIAN",
    "unidad_aprendizaje": "INGENIERIA ETICA Y SOCIEDAD",
    "grupo": "1CM3",
    "id_unidad_aprendizaje": 6,
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
    "profesor": "SUAREZ CASTAÑON MIGUEL SANTIAG",
    "unidad_aprendizaje": "ALGORITMIA Y PROGRAMACION ESTRUCTURADA",
    "grupo": "1CM3",
    "id_unidad_aprendizaje": 4,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
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
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Viernes",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      }
    ]
  },
  {
    "profesor": "ARAGON GARCIA MARIBEL",
    "unidad_aprendizaje": "COMUNICACION ORAL Y ESCRITA",
    "grupo": "1CM4",
    "id_unidad_aprendizaje": 11,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "10:30",
        "hora_fin": "12:00"
      },
      {
        "dia": "Martes",
        "hora_inicio": "08:30",
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
    "profesor": "HERRERA YAÑEZ CRISPIN",
    "unidad_aprendizaje": "FISICA",
    "grupo": "1CM4",
    "id_unidad_aprendizaje": 5,
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
    "profesor": "REYES BERMEJO TLATOANI DE JESUS",
    "unidad_aprendizaje": "MATEMATICAS DISCRETAS",
    "grupo": "1CM4",
    "id_unidad_aprendizaje": 3,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
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
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Viernes",
        "hora_inicio": "12:00",
        "hora_fin": "13:30"
      }
    ]
  },
  {
    "profesor": "SANCHEZ MORENO ADRIANA DE LA P",
    "unidad_aprendizaje": "INGENIERIA ETICA Y SOCIEDAD",
    "grupo": "1CM4",
    "id_unidad_aprendizaje": 6,
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
    "profesor": "SUAREZ CASTAÑON MIGUEL SANTIAG",
    "unidad_aprendizaje": "ALGORITMIA Y PROGRAMACION ESTRUCTURADA",
    "grupo": "1CM4",
    "id_unidad_aprendizaje": 4,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Martes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Miércoles",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Jueves",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Viernes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      }
    ]
  },
  {
    "profesor": "VIVEROS VELA M. EN C. KARINA",
    "unidad_aprendizaje": "CALCULO",
    "grupo": "1CM4",
    "id_unidad_aprendizaje": 2,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      },
      {
        "dia": "Martes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Miércoles",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      },
      {
        "dia": "Jueves",
        "hora_inicio": "08:30",
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
    "unidad_aprendizaje": "ALGORITMIA Y PROGRAMACION ESTRUCTURADA",
    "grupo": "1CM5",
    "id_unidad_aprendizaje": 4,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      },
      {
        "dia": "Martes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Miércoles",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      },
      {
        "dia": "Jueves",
        "hora_inicio": "08:30",
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
    "profesor": "GONZALEZ TRUJILLO MIGUEL",
    "unidad_aprendizaje": "CALCULO",
    "grupo": "1CM5",
    "id_unidad_aprendizaje": 2,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "10:30",
        "hora_fin": "12:00"
      },
      {
        "dia": "Martes",
        "hora_inicio": "08:30",
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
    "profesor": "MUÑOZ SALAZAR LAURA",
    "unidad_aprendizaje": "FISICA",
    "grupo": "1CM5",
    "id_unidad_aprendizaje": 5,
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
    "profesor": "TELLEZ REYES MARIA DEL SOCORRO",
    "unidad_aprendizaje": "COMUNICACION ORAL Y ESCRITA",
    "grupo": "1CM5",
    "id_unidad_aprendizaje": 11,
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
    "profesor": "SIN ASIGNAR",
    "unidad_aprendizaje": "MATEMATICAS DISCRETAS",
    "grupo": "1CM5",
    "id_unidad_aprendizaje": 3,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Martes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Miércoles",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Jueves",
        "hora_inicio": "13:30",
        "hora_fin": "15:00"
      },
      {
        "dia": "Viernes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      }
    ]
  },
  {
    "profesor": "VERA HERNANDEZ GUMERSINDO",
    "unidad_aprendizaje": "INGENIERIA ETICA Y SOCIEDAD",
    "grupo": "1CM5",
    "id_unidad_aprendizaje": 6,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
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
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Viernes",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      }
    ]
  },
  {
    "profesor": "CELIS DOMINGUEZ ADRIANA BERENICE",
    "unidad_aprendizaje": "INGENIERIA ETICA Y SOCIEDAD",
    "grupo": "1CM6",
    "id_unidad_aprendizaje": 6,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Martes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Miércoles",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Jueves",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Viernes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      }
    ]
  },
  {
    "profesor": "DAVALOS LOPEZ JOSE CARLOS",
    "unidad_aprendizaje": "ALGORITMIA Y PROGRAMACION ESTRUCTURADA",
    "grupo": "1CM6",
    "id_unidad_aprendizaje": 4,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "10:30",
        "hora_fin": "12:00"
      },
      {
        "dia": "Martes",
        "hora_inicio": "08:30",
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
    "unidad_aprendizaje": "FISICA",
    "grupo": "1CM6",
    "id_unidad_aprendizaje": 5,
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
    "unidad_aprendizaje": "CALCULO",
    "grupo": "1CM6",
    "id_unidad_aprendizaje": 2,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
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
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Viernes",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      }
    ]
  },
  {
    "profesor": "PEREZ VERA SANDRA MERCEDES",
    "unidad_aprendizaje": "COMUNICACION ORAL Y ESCRITA",
    "grupo": "1CM6",
    "id_unidad_aprendizaje": 11,
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
    "profesor": "REYES BERMEJO TLATOANI DE JESUS",
    "unidad_aprendizaje": "MATEMATICAS DISCRETAS",
    "grupo": "1CM6",
    "id_unidad_aprendizaje": 3,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      },
      {
        "dia": "Martes",
        "hora_inicio": "12:00",
        "hora_fin": "13:30"
      },
      {
        "dia": "Miércoles",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      },
      {
        "dia": "Jueves",
        "hora_inicio": "08:30",
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
    "profesor": "DE LUNA CABALLERO ROBERTO",
    "unidad_aprendizaje": "ALGORITMIA Y PROGRAMACION ESTRUCTURADA",
    "grupo": "1CM7",
    "id_unidad_aprendizaje": 4,
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
    "unidad_aprendizaje": "FISICA",
    "grupo": "1CM7",
    "id_unidad_aprendizaje": 5,
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
    "profesor": "SANCHEZ PALACIOS MARIA SUSANA",
    "unidad_aprendizaje": "MATEMATICAS DISCRETAS",
    "grupo": "1CM7",
    "id_unidad_aprendizaje": 3,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "10:30",
        "hora_fin": "12:00"
      },
      {
        "dia": "Martes",
        "hora_inicio": "08:30",
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
    "profesor": "SIN ASIGNAR",
    "unidad_aprendizaje": "CALCULO",
    "grupo": "1CM7",
    "id_unidad_aprendizaje": 2,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Martes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Miércoles",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Jueves",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Viernes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      }
    ]
  },
  {
    "profesor": "TELLEZ REYES MARIA DEL SOCORRO",
    "unidad_aprendizaje": "COMUNICACION ORAL Y ESCRITA",
    "grupo": "1CM7",
    "id_unidad_aprendizaje": 11,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
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
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Viernes",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      }
    ]
  },
  {
    "profesor": "VERA HERNANDEZ GUMERSINDO",
    "unidad_aprendizaje": "INGENIERIA ETICA Y SOCIEDAD",
    "grupo": "1CM7",
    "id_unidad_aprendizaje": 6,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      },
      {
        "dia": "Martes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Miércoles",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      },
      {
        "dia": "Jueves",
        "hora_inicio": "08:30",
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
    "unidad_aprendizaje": "ALGORITMIA Y PROGRAMACION ESTRUCTURADA",
    "grupo": "1CM8",
    "id_unidad_aprendizaje": 4,
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
    "profesor": "GONZALEZ CISNEROS ALEJANDRO",
    "unidad_aprendizaje": "MATEMATICAS DISCRETAS",
    "grupo": "1CM8",
    "id_unidad_aprendizaje": 3,
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
    "profesor": "MORALES GONZALEZ ANGEL",
    "unidad_aprendizaje": "FISICA",
    "grupo": "1CM8",
    "id_unidad_aprendizaje": 5,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      },
      {
        "dia": "Martes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Miércoles",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      },
      {
        "dia": "Jueves",
        "hora_inicio": "08:30",
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
    "profesor": "PEREZ VERA SANDRA MERCEDES",
    "unidad_aprendizaje": "COMUNICACION ORAL Y ESCRITA",
    "grupo": "1CM8",
    "id_unidad_aprendizaje": 11,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Martes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Miércoles",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Jueves",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Viernes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      }
    ]
  },
  {
    "profesor": "SIN ASIGNAR",
    "unidad_aprendizaje": "CALCULO",
    "grupo": "1CM8",
    "id_unidad_aprendizaje": 2,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
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
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Viernes",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      }
    ]
  },
  {
    "profesor": "VERA HERNANDEZ GUMERSINDO",
    "unidad_aprendizaje": "INGENIERIA ETICA Y SOCIEDAD",
    "grupo": "1CM8",
    "id_unidad_aprendizaje": 6,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "10:30",
        "hora_fin": "12:00"
      },
      {
        "dia": "Martes",
        "hora_inicio": "08:30",
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
    "profesor": "DURÀN CAMARILLO EDMUNDO RENÈ",
    "unidad_aprendizaje": "ANALISIS FUNDAMENTAL DE CIRCUITOS",
    "grupo": "1CM9",
    "id_unidad_aprendizaje": 12,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Martes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Miércoles",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Jueves",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Viernes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      }
    ]
  },
  {
    "profesor": "FLORES MENDOZA YAXKIN",
    "unidad_aprendizaje": "ESTRUCTURAS DE DATOS",
    "grupo": "1CM9",
    "id_unidad_aprendizaje": 10,
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
    "profesor": "SANCHEZ VARGAS PERLA REBECA",
    "unidad_aprendizaje": "ALGEBRA LINEAL",
    "grupo": "1CM9",
    "id_unidad_aprendizaje": 8,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
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
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Viernes",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      }
    ]
  },
  {
    "profesor": "SANCHEZ VARGAS PERLA REBECA",
    "unidad_aprendizaje": "ECUACIONES DIFERENCIALES",
    "grupo": "1CM9",
    "id_unidad_aprendizaje": 7,
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
    "profesor": "OLVERA ALDANA MIGUEL",
    "unidad_aprendizaje": "ANALISIS VECTORIAL",
    "grupo": "1CM9",
    "id_unidad_aprendizaje": 1,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      },
      {
        "dia": "Martes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Miércoles",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      },
      {
        "dia": "Jueves",
        "hora_inicio": "08:30",
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
    "profesor": "RUIZ LEDESMA ELENA FABIOLA",
    "unidad_aprendizaje": "CALCULO APLICADO",
    "grupo": "1CM9",
    "id_unidad_aprendizaje": 9,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "10:30",
        "hora_fin": "12:00"
      },
      {
        "dia": "Martes",
        "hora_inicio": "08:30",
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
    "profesor": "CRUZ LAZARO ING. APOLINAR FRANCISCO",
    "unidad_aprendizaje": "INGENIERIA ETICA Y SOCIEDAD",
    "grupo": "1CV1",
    "id_unidad_aprendizaje": 6,
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
    "unidad_aprendizaje": "CALCULO",
    "grupo": "1CV1",
    "id_unidad_aprendizaje": 2,
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
    "unidad_aprendizaje": "MATEMATICAS DISCRETAS",
    "grupo": "1CV1",
    "id_unidad_aprendizaje": 3,
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
    "profesor": "ORTUÑO ARAUJO JESUS",
    "unidad_aprendizaje": "ANALISIS VECTORIAL",
    "grupo": "1CV1",
    "id_unidad_aprendizaje": 1,
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
    "profesor": "ROSAS TRIGUEROS JORGE LUIS",
    "unidad_aprendizaje": "ALGORITMIA Y PROGRAMACION ESTRUCTURADA",
    "grupo": "1CV1",
    "id_unidad_aprendizaje": 4,
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
    "unidad_aprendizaje": "FISICA",
    "grupo": "1CV1",
    "id_unidad_aprendizaje": 5,
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
    "profesor": "CRUZ GARCIA DANIEL",
    "unidad_aprendizaje": "ESTRUCTURAS DE DATOS",
    "grupo": "1CV10",
    "id_unidad_aprendizaje": 10,
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
    "profesor": "JIMENEZ CONTRERAS EDITH ADRIANA",
    "unidad_aprendizaje": "ALGEBRA LINEAL",
    "grupo": "1CV10",
    "id_unidad_aprendizaje": 8,
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
    "profesor": "MARTINEZ NUÑO JESUS ALFREDO",
    "unidad_aprendizaje": "ANALISIS VECTORIAL",
    "grupo": "1CV10",
    "id_unidad_aprendizaje": 1,
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
    "profesor": "SANTILLAN LUNA RAUL",
    "unidad_aprendizaje": "ANALISIS FUNDAMENTAL DE CIRCUITOS",
    "grupo": "1CV10",
    "id_unidad_aprendizaje": 12,
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
    "profesor": "SILVA MARTINEZ JORGE JAVIER",
    "unidad_aprendizaje": "ECUACIONES DIFERENCIALES",
    "grupo": "1CV10",
    "id_unidad_aprendizaje": 7,
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
    "profesor": "MONTIEL SANCHEZ ANGEL SALVADOR",
    "unidad_aprendizaje": "CALCULO APLICADO",
    "grupo": "1CV11",
    "id_unidad_aprendizaje": 9,
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
    "profesor": "MOSCOSO MALAGON YOSAFAT",
    "unidad_aprendizaje": "ESTRUCTURAS DE DATOS",
    "grupo": "1CV11",
    "id_unidad_aprendizaje": 10,
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
    "profesor": "ORTUÑO ARAUJO JESUS",
    "unidad_aprendizaje": "ANALISIS VECTORIAL",
    "grupo": "1CV11",
    "id_unidad_aprendizaje": 1,
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
    "profesor": "RANGEL GUZMAN ALFREDO",
    "unidad_aprendizaje": "ECUACIONES DIFERENCIALES",
    "grupo": "1CV11",
    "id_unidad_aprendizaje": 7,
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
    "profesor": "ROMERO HERRERA RODOLFO",
    "unidad_aprendizaje": "ANALISIS FUNDAMENTAL DE CIRCUITOS",
    "grupo": "1CV11",
    "id_unidad_aprendizaje": 12,
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
    "profesor": "JURADO JIMENEZ ROBERTO",
    "unidad_aprendizaje": "CALCULO",
    "grupo": "1CV12",
    "id_unidad_aprendizaje": 2,
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
    "unidad_aprendizaje": "FISICA",
    "grupo": "1CV12",
    "id_unidad_aprendizaje": 5,
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
    "profesor": "FLORES CARAPIA ROLANDO",
    "unidad_aprendizaje": "ALGORITMIA Y PROGRAMACION ESTRUCTURADA",
    "grupo": "1CV12",
    "id_unidad_aprendizaje": 4,
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
    "profesor": "RAMIREZ ROMERO TONAHTIU ARTURO",
    "unidad_aprendizaje": "ESTRUCTURAS DE DATOS",
    "grupo": "1CV13",
    "id_unidad_aprendizaje": 10,
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
    "profesor": "RANGEL GUZMAN ALFREDO",
    "unidad_aprendizaje": "ECUACIONES DIFERENCIALES",
    "grupo": "1CV13",
    "id_unidad_aprendizaje": 7,
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
    "profesor": "SANTILLAN LUNA RAUL",
    "unidad_aprendizaje": "ANALISIS FUNDAMENTAL DE CIRCUITOS",
    "grupo": "1CV13",
    "id_unidad_aprendizaje": 12,
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
    "profesor": "TIRADO LULE JUDITH MARGARITA",
    "unidad_aprendizaje": "ALGEBRA LINEAL",
    "grupo": "1CV13",
    "id_unidad_aprendizaje": 8,
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
    "unidad_aprendizaje": "FISICA",
    "grupo": "1CV2",
    "id_unidad_aprendizaje": 5,
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
    "profesor": "MARTINEZ ACOSTA LILIAN",
    "unidad_aprendizaje": "INGENIERIA ETICA Y SOCIEDAD",
    "grupo": "1CV2",
    "id_unidad_aprendizaje": 6,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "13:30",
        "hora_fin": "15:00"
      },
      {
        "dia": "Martes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Miércoles",
        "hora_inicio": "13:30",
        "hora_fin": "15:00"
      },
      {
        "dia": "Jueves",
        "hora_inicio": "13:30",
        "hora_fin": "15:00"
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
    "unidad_aprendizaje": "CALCULO",
    "grupo": "1CV2",
    "id_unidad_aprendizaje": 2,
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
    "unidad_aprendizaje": "MATEMATICAS DISCRETAS",
    "grupo": "1CV2",
    "id_unidad_aprendizaje": 3,
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
    "profesor": "ORTUÑO ARAUJO JESUS",
    "unidad_aprendizaje": "ANALISIS VECTORIAL",
    "grupo": "1CV2",
    "id_unidad_aprendizaje": 1,
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
    "profesor": "FLORES CARAPIA ROLANDO",
    "unidad_aprendizaje": "ALGORITMIA Y PROGRAMACION ESTRUCTURADA",
    "grupo": "1CV2",
    "id_unidad_aprendizaje": 4,
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
    "profesor": "SIN ASIGNAR",
    "unidad_aprendizaje": "MATEMATICAS DISCRETAS",
    "grupo": "1CV3",
    "id_unidad_aprendizaje": 3,
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
    "profesor": "ESQUIVEL CENTENO JOSE ARMANDO",
    "unidad_aprendizaje": "FISICA",
    "grupo": "1CV3",
    "id_unidad_aprendizaje": 5,
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
    "profesor": "GONZALEZ ALBARRAN GISELA",
    "unidad_aprendizaje": "COMUNICACION ORAL Y ESCRITA",
    "grupo": "1CV3",
    "id_unidad_aprendizaje": 11,
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
    "unidad_aprendizaje": "CALCULO",
    "grupo": "1CV3",
    "id_unidad_aprendizaje": 2,
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
    "profesor": "CELIS DOMINGUEZ ADRIANA BERENICE",
    "unidad_aprendizaje": "INGENIERIA ETICA Y SOCIEDAD",
    "grupo": "1CV3",
    "id_unidad_aprendizaje": 6,
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
    "profesor": "ROMERO HERRERA RODOLFO",
    "unidad_aprendizaje": "ALGORITMIA Y PROGRAMACION ESTRUCTURADA",
    "grupo": "1CV3",
    "id_unidad_aprendizaje": 4,
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
    "profesor": "SIN ASIGNAR",
    "unidad_aprendizaje": "MATEMATICAS DISCRETAS",
    "grupo": "1CV4",
    "id_unidad_aprendizaje": 3,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Martes",
        "hora_inicio": "18:30",
        "hora_fin": "21:30"
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
    "profesor": "GUTIERREZ MEJIA DARWIN",
    "unidad_aprendizaje": "CALCULO",
    "grupo": "1CV4",
    "id_unidad_aprendizaje": 2,
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
    "profesor": "NAVA LARA JOEL",
    "unidad_aprendizaje": "FISICA",
    "grupo": "1CV4",
    "id_unidad_aprendizaje": 5,
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
    "profesor": "PALMA OROZCO ROSAURA",
    "unidad_aprendizaje": "ALGORITMIA Y PROGRAMACION ESTRUCTURADA",
    "grupo": "1CV4",
    "id_unidad_aprendizaje": 4,
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
    "profesor": "VILLEGAS NAVARRETE SONIA",
    "unidad_aprendizaje": "COMUNICACION ORAL Y ESCRITA",
    "grupo": "1CV4",
    "id_unidad_aprendizaje": 11,
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
    "profesor": "WINFIELD REYES ANA MARIA",
    "unidad_aprendizaje": "INGENIERIA ETICA Y SOCIEDAD",
    "grupo": "1CV4",
    "id_unidad_aprendizaje": 6,
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
    "profesor": "BARRON FERNANDEZ RICARDO",
    "unidad_aprendizaje": "CALCULO",
    "grupo": "1CV5",
    "id_unidad_aprendizaje": 2,
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
    "profesor": "JUAREZ LEON CARLOS",
    "unidad_aprendizaje": "FISICA",
    "grupo": "1CV5",
    "id_unidad_aprendizaje": 5,
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
    "profesor": "LAZCANO XOXOTLA LAURA",
    "unidad_aprendizaje": "COMUNICACION ORAL Y ESCRITA",
    "grupo": "1CV5",
    "id_unidad_aprendizaje": 11,
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
    "profesor": "MOSCOSO MALAGON YOSAFAT",
    "unidad_aprendizaje": "ALGORITMIA Y PROGRAMACION ESTRUCTURADA",
    "grupo": "1CV5",
    "id_unidad_aprendizaje": 4,
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
    "profesor": "VIVEROS VELA M. EN C. KARINA",
    "unidad_aprendizaje": "MATEMATICAS DISCRETAS",
    "grupo": "1CV5",
    "id_unidad_aprendizaje": 3,
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
    "profesor": "WINFIELD REYES ANA MARIA",
    "unidad_aprendizaje": "INGENIERIA ETICA Y SOCIEDAD",
    "grupo": "1CV5",
    "id_unidad_aprendizaje": 6,
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
    "profesor": "CABRERA CHAVEZ GLORIA LOURDES",
    "unidad_aprendizaje": "COMUNICACION ORAL Y ESCRITA",
    "grupo": "1CV6",
    "id_unidad_aprendizaje": 11,
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
    "profesor": "DIAZ HUERTA CLAUDIA CELIA",
    "unidad_aprendizaje": "FISICA",
    "grupo": "1CV6",
    "id_unidad_aprendizaje": 5,
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
    "profesor": "KOLESNIKOVA OLGA",
    "unidad_aprendizaje": "MATEMATICAS DISCRETAS",
    "grupo": "1CV6",
    "id_unidad_aprendizaje": 3,
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
    "profesor": "MARTINEZ ACOSTA LILIAN",
    "unidad_aprendizaje": "INGENIERIA ETICA Y SOCIEDAD",
    "grupo": "1CV6",
    "id_unidad_aprendizaje": 6,
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
    "profesor": "RAMIREZ ROMERO TONAHTIU ARTURO",
    "unidad_aprendizaje": "ALGORITMIA Y PROGRAMACION ESTRUCTURADA",
    "grupo": "1CV6",
    "id_unidad_aprendizaje": 4,
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
    "profesor": "JUAREZ LEON CARLOS",
    "unidad_aprendizaje": "CALCULO",
    "grupo": "1CV6",
    "id_unidad_aprendizaje": 2,
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
    "profesor": "DORANTES VILLA CLAUDIA JISELA",
    "unidad_aprendizaje": "MATEMATICAS DISCRETAS",
    "grupo": "1CV7",
    "id_unidad_aprendizaje": 3,
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
    "profesor": "GONZALEZ ALBARRAN GISELA",
    "unidad_aprendizaje": "COMUNICACION ORAL Y ESCRITA",
    "grupo": "1CV7",
    "id_unidad_aprendizaje": 11,
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
    "profesor": "NAVA LARA JOEL",
    "unidad_aprendizaje": "CALCULO",
    "grupo": "1CV7",
    "id_unidad_aprendizaje": 2,
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
    "profesor": "MOSCOSO MALAGON YOSAFAT",
    "unidad_aprendizaje": "ALGORITMIA Y PROGRAMACION ESTRUCTURADA",
    "grupo": "1CV7",
    "id_unidad_aprendizaje": 4,
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
    "unidad_aprendizaje": "FISICA",
    "grupo": "1CV7",
    "id_unidad_aprendizaje": 5,
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
    "unidad_aprendizaje": "INGENIERIA ETICA Y SOCIEDAD",
    "grupo": "1CV7",
    "id_unidad_aprendizaje": 6,
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
    "profesor": "LEON HERNANDEZ MIGUEL ABEL",
    "unidad_aprendizaje": "CALCULO APLICADO",
    "grupo": "1CV8",
    "id_unidad_aprendizaje": 9,
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
    "profesor": "ESQUIVEL CENTENO JOSE ARMANDO",
    "unidad_aprendizaje": "ECUACIONES DIFERENCIALES",
    "grupo": "1CV8",
    "id_unidad_aprendizaje": 7,
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
    "profesor": "LEON HERNANDEZ MIGUEL ABEL",
    "unidad_aprendizaje": "ANALISIS VECTORIAL",
    "grupo": "1CV8",
    "id_unidad_aprendizaje": 1,
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
    "profesor": "MARTINEZ GUERRERO JOSE ALFREDO",
    "unidad_aprendizaje": "ANALISIS FUNDAMENTAL DE CIRCUITOS",
    "grupo": "1CV8",
    "id_unidad_aprendizaje": 12,
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
    "profesor": "RAMIREZ ROMERO TONAHTIU ARTURO",
    "unidad_aprendizaje": "ESTRUCTURAS DE DATOS",
    "grupo": "1CV8",
    "id_unidad_aprendizaje": 10,
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
    "profesor": "TIRADO LULE JUDITH MARGARITA",
    "unidad_aprendizaje": "ALGEBRA LINEAL",
    "grupo": "1CV8",
    "id_unidad_aprendizaje": 8,
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
    "profesor": "DIAZ HUERTA CLAUDIA CELIA",
    "unidad_aprendizaje": "ECUACIONES DIFERENCIALES",
    "grupo": "1CV9",
    "id_unidad_aprendizaje": 7,
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
    "profesor": "HERNANDEZ OLVERA LUIS ENRIQUE",
    "unidad_aprendizaje": "ESTRUCTURAS DE DATOS",
    "grupo": "1CV9",
    "id_unidad_aprendizaje": 10,
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
    "profesor": "MARTINEZ GUERRERO JOSE ALFREDO",
    "unidad_aprendizaje": "ANALISIS FUNDAMENTAL DE CIRCUITOS",
    "grupo": "1CV9",
    "id_unidad_aprendizaje": 12,
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
    "profesor": "MARTINEZ NUÑO JESUS ALFREDO",
    "unidad_aprendizaje": "ANALISIS VECTORIAL",
    "grupo": "1CV9",
    "id_unidad_aprendizaje": 1,
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
    "profesor": "ORTUÑO ARAUJO JESUS",
    "unidad_aprendizaje": "ALGEBRA LINEAL",
    "grupo": "1CV9",
    "id_unidad_aprendizaje": 8,
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
    "profesor": "CANCINO CALDERON SERGIO",
    "unidad_aprendizaje": "ELECTRONICA ANALOGICA",
    "grupo": "2CM1",
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Martes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Miércoles",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Jueves",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Viernes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      }
    ]
  },
  {
    "profesor": "CORTEZ DUARTE NIDIA ASUNCIÓN",
    "unidad_aprendizaje": "FUNDAMENTOS DE DISEÑO DIGITAL",
    "grupo": "2CM1",
    "id_unidad_aprendizaje": 15,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      },
      {
        "dia": "Martes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Miércoles",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      },
      {
        "dia": "Jueves",
        "hora_inicio": "08:30",
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
    "profesor": "DIAZ SANTIAGO RICARDO FELIPE",
    "unidad_aprendizaje": "TEORIA COMPUTACIONAL",
    "grupo": "2CM1",
    "id_unidad_aprendizaje": 16,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Martes",
        "hora_inicio": "12:00",
        "hora_fin": "13:30"
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
        "hora_inicio": "12:00",
        "hora_fin": "13:30"
      }
    ]
  },
  {
    "profesor": "GARCIA SALES JUAN VICENTE",
    "unidad_aprendizaje": "PROGRAMACION ORIENTADA A OBJETOS",
    "grupo": "2CM1",
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
    "profesor": "OCOTITLA ROJAS NANCY",
    "unidad_aprendizaje": "BASES DE DATOS",
    "grupo": "2CM1",
    "id_unidad_aprendizaje": 17,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
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
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Viernes",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      }
    ]
  },
  {
    "profesor": "RIOS DE LA TORRE IGNACIO",
    "unidad_aprendizaje": "MATEMATICAS AVANZADAS PARA LA INGENIERIA",
    "grupo": "2CM1",
    "id_unidad_aprendizaje": 13,
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
    "profesor": "TORRES GONZALEZ ENRIQUE",
    "unidad_aprendizaje": "FUNDAMENTOS ECONOMICOS",
    "grupo": "2CM1",
    "id_unidad_aprendizaje": 14,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "10:30",
        "hora_fin": "12:00"
      },
      {
        "dia": "Martes",
        "hora_inicio": "08:30",
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
    "profesor": "CORDERO LOPEZ MARTHA ROSA",
    "unidad_aprendizaje": "ANALISIS Y DISEÑO ORIENTADO A OBJETOS",
    "grupo": "2CM10",
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
    "profesor": "CORTES GALICIA JORGE",
    "unidad_aprendizaje": "SISTEMAS OPERATIVOS",
    "grupo": "2CM10",
    "id_unidad_aprendizaje": 23,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Martes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Miércoles",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Jueves",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Viernes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      }
    ]
  },
  {
    "profesor": "CORTEZ DUARTE NIDIA ASUNCIÓN",
    "unidad_aprendizaje": "REDES DE COMPUTADORAS",
    "grupo": "2CM10",
    "id_unidad_aprendizaje": 20,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "10:30",
        "hora_fin": "12:00"
      },
      {
        "dia": "Martes",
        "hora_inicio": "08:30",
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
    "profesor": "SALINAS HERNANDEZ ENCARNACION",
    "unidad_aprendizaje": "PROBABILIDAD Y ESTADISTICA",
    "grupo": "2CM10",
    "id_unidad_aprendizaje": 22,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Martes",
        "hora_inicio": "12:00",
        "hora_fin": "13:30"
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
        "hora_inicio": "12:00",
        "hora_fin": "13:30"
      }
    ]
  },
  {
    "profesor": "HERNANDEZ JAIME JOSEFINA",
    "unidad_aprendizaje": "ADMINISTRACION FINANCIERA",
    "grupo": "2CM10",
    "id_unidad_aprendizaje": 26,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
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
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Viernes",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      }
    ]
  },
  {
    "profesor": "MONTES CASIANO HERMES FRANCISCO",
    "unidad_aprendizaje": "TECNOLOGIAS PARA LA WEB",
    "grupo": "2CM10",
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      },
      {
        "dia": "Martes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Miércoles",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      },
      {
        "dia": "Jueves",
        "hora_inicio": "08:30",
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
    "profesor": "PASTRANA FERNANDEZ CARLOS JESUS",
    "unidad_aprendizaje": "DISEÑO DE SISTEMAS DIGITALES",
    "grupo": "2CM10",
    "id_unidad_aprendizaje": 21,
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
    "profesor": "MENDEZ SEGUNDO LAURA",
    "unidad_aprendizaje": "ANALISIS Y DISEÑO ORIENTADO A OBJETOS",
    "grupo": "2CM11",
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
    "profesor": "RODRIGUEZ FLORES EDUARDO",
    "unidad_aprendizaje": "ADMINISTRACION FINANCIERA",
    "grupo": "2CM11",
    "id_unidad_aprendizaje": 26,
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
    "profesor": "MONTES CASIANO HERMES FRANCISCO",
    "unidad_aprendizaje": "TECNOLOGIAS PARA LA WEB",
    "grupo": "2CM11",
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "10:30",
        "hora_fin": "12:00"
      },
      {
        "dia": "Martes",
        "hora_inicio": "08:30",
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
    "profesor": "ORTEGA PACHECO JOSE DAVID",
    "unidad_aprendizaje": "SISTEMAS OPERATIVOS",
    "grupo": "2CM11",
    "id_unidad_aprendizaje": 23,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      },
      {
        "dia": "Martes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Miércoles",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      },
      {
        "dia": "Jueves",
        "hora_inicio": "08:30",
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
    "profesor": "PASTRANA FERNANDEZ CARLOS JESUS",
    "unidad_aprendizaje": "DISEÑO DE SISTEMAS DIGITALES",
    "grupo": "2CM11",
    "id_unidad_aprendizaje": 21,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Martes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Miércoles",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Jueves",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Viernes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      }
    ]
  },
  {
    "profesor": "SALINAS HERNANDEZ ENCARNACION",
    "unidad_aprendizaje": "PROBABILIDAD Y ESTADISTICA",
    "grupo": "2CM11",
    "id_unidad_aprendizaje": 22,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
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
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Viernes",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      }
    ]
  },
  {
    "profesor": "SANCHEZ QUINTANILLA GILBERTO",
    "unidad_aprendizaje": "REDES DE COMPUTADORAS",
    "grupo": "2CM11",
    "id_unidad_aprendizaje": 20,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Martes",
        "hora_inicio": "12:00",
        "hora_fin": "13:30"
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
        "hora_inicio": "12:00",
        "hora_fin": "13:30"
      }
    ]
  },
  {
    "profesor": "HERNANDEZ CONTRERAS EULER",
    "unidad_aprendizaje": "BASES DE DATOS",
    "grupo": "2CM12",
    "id_unidad_aprendizaje": 17,
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
    "profesor": "AGUILAR GARCIA RAFAEL",
    "unidad_aprendizaje": "TEORIA COMPUTACIONAL",
    "grupo": "2CM2",
    "id_unidad_aprendizaje": 16,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
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
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Viernes",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      }
    ]
  },
  {
    "profesor": "AGUILAR SANCHEZ FERNANDO",
    "unidad_aprendizaje": "FUNDAMENTOS DE DISEÑO DIGITAL",
    "grupo": "2CM2",
    "id_unidad_aprendizaje": 15,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "10:30",
        "hora_fin": "12:00"
      },
      {
        "dia": "Martes",
        "hora_inicio": "08:30",
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
    "profesor": "CANCINO CALDERON SERGIO",
    "unidad_aprendizaje": "ELECTRONICA ANALOGICA",
    "grupo": "2CM2",
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      },
      {
        "dia": "Martes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Miércoles",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      },
      {
        "dia": "Jueves",
        "hora_inicio": "08:30",
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
    "profesor": "CRUZ GARCIA DANIEL",
    "unidad_aprendizaje": "PROGRAMACION ORIENTADA A OBJETOS",
    "grupo": "2CM2",
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Martes",
        "hora_inicio": "12:00",
        "hora_fin": "13:30"
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
        "hora_inicio": "12:00",
        "hora_fin": "13:30"
      }
    ]
  },
  {
    "profesor": "HERRERA YAÑEZ CRISPIN",
    "unidad_aprendizaje": "MATEMATICAS AVANZADAS PARA LA INGENIERIA",
    "grupo": "2CM2",
    "id_unidad_aprendizaje": 13,
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
    "profesor": "OCOTITLA ROJAS NANCY",
    "unidad_aprendizaje": "BASES DE DATOS",
    "grupo": "2CM2",
    "id_unidad_aprendizaje": 17,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Martes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Miércoles",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Jueves",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Viernes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      }
    ]
  },
  {
    "profesor": "TORRES GONZALEZ ENRIQUE",
    "unidad_aprendizaje": "FUNDAMENTOS ECONOMICOS",
    "grupo": "2CM2",
    "id_unidad_aprendizaje": 14,
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
    "profesor": "AGUILAR GARCIA RAFAEL",
    "unidad_aprendizaje": "TEORIA COMPUTACIONAL",
    "grupo": "2CM3",
    "id_unidad_aprendizaje": 16,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Martes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Miércoles",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Jueves",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Viernes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      }
    ]
  },
  {
    "profesor": "AGUILAR SANCHEZ FERNANDO",
    "unidad_aprendizaje": "FUNDAMENTOS DE DISEÑO DIGITAL",
    "grupo": "2CM3",
    "id_unidad_aprendizaje": 15,
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
    "profesor": "MARTINEZ DIAZ JUAN CARLOS",
    "unidad_aprendizaje": "ELECTRONICA ANALOGICA",
    "grupo": "2CM3",
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "10:30",
        "hora_fin": "12:00"
      },
      {
        "dia": "Martes",
        "hora_inicio": "08:30",
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
    "profesor": "OCAMPO BOTELLO FABIOLA",
    "unidad_aprendizaje": "BASES DE DATOS",
    "grupo": "2CM3",
    "id_unidad_aprendizaje": 17,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      },
      {
        "dia": "Martes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Miércoles",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      },
      {
        "dia": "Jueves",
        "hora_inicio": "08:30",
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
    "profesor": "RAMIREZ TENORIO RAFAEL",
    "unidad_aprendizaje": "FUNDAMENTOS ECONOMICOS",
    "grupo": "2CM3",
    "id_unidad_aprendizaje": 14,
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
    "profesor": "RIOS DE LA TORRE IGNACIO",
    "unidad_aprendizaje": "MATEMATICAS AVANZADAS PARA LA INGENIERIA",
    "grupo": "2CM3",
    "id_unidad_aprendizaje": 13,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Martes",
        "hora_inicio": "12:00",
        "hora_fin": "13:30"
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
        "hora_inicio": "12:00",
        "hora_fin": "13:30"
      }
    ]
  },
  {
    "profesor": "TECLA PARRA ROBERTO",
    "unidad_aprendizaje": "PROGRAMACION ORIENTADA A OBJETOS",
    "grupo": "2CM3",
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
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
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Viernes",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      }
    ]
  },
  {
    "profesor": "DURÀN CAMARILLO EDMUNDO RENÈ",
    "unidad_aprendizaje": "ELECTRONICA ANALOGICA",
    "grupo": "2CM4",
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
    "profesor": "OCAMPO BOTELLO FABIOLA",
    "unidad_aprendizaje": "BASES DE DATOS",
    "grupo": "2CM4",
    "id_unidad_aprendizaje": 17,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "10:30",
        "hora_fin": "12:00"
      },
      {
        "dia": "Martes",
        "hora_inicio": "08:30",
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
    "profesor": "OLVERA ALDANA MIGUEL",
    "unidad_aprendizaje": "MATEMATICAS AVANZADAS PARA LA INGENIERIA",
    "grupo": "2CM4",
    "id_unidad_aprendizaje": 13,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
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
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Viernes",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      }
    ]
  },
  {
    "profesor": "PEREZ PEREZ JOSE JUAN",
    "unidad_aprendizaje": "FUNDAMENTOS DE DISEÑO DIGITAL",
    "grupo": "2CM4",
    "id_unidad_aprendizaje": 15,
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
    "profesor": "RAMIREZ TENORIO RAFAEL",
    "unidad_aprendizaje": "FUNDAMENTOS ECONOMICOS",
    "grupo": "2CM4",
    "id_unidad_aprendizaje": 14,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Martes",
        "hora_inicio": "12:00",
        "hora_fin": "13:30"
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
        "hora_inicio": "12:00",
        "hora_fin": "13:30"
      }
    ]
  },
  {
    "profesor": "SANCHEZ GARCIA LUZ MARIA",
    "unidad_aprendizaje": "TEORIA COMPUTACIONAL",
    "grupo": "2CM4",
    "id_unidad_aprendizaje": 16,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      },
      {
        "dia": "Martes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Miércoles",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      },
      {
        "dia": "Jueves",
        "hora_inicio": "08:30",
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
    "profesor": "TECLA PARRA ROBERTO",
    "unidad_aprendizaje": "PROGRAMACION ORIENTADA A OBJETOS",
    "grupo": "2CM4",
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Martes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Miércoles",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Jueves",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Viernes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      }
    ]
  },
  {
    "profesor": "DURÀN CAMARILLO EDMUNDO RENÈ",
    "unidad_aprendizaje": "ELECTRONICA ANALOGICA",
    "grupo": "2CM5",
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
    "profesor": "DE LUNA CABALLERO ROBERTO",
    "unidad_aprendizaje": "BASES DE DATOS",
    "grupo": "2CM5",
    "id_unidad_aprendizaje": 17,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "10:30",
        "hora_fin": "12:00"
      },
      {
        "dia": "Martes",
        "hora_inicio": "08:30",
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
    "profesor": "GALICIA MEJIA RUBEN",
    "unidad_aprendizaje": "FUNDAMENTOS DE DISEÑO DIGITAL",
    "grupo": "2CM5",
    "id_unidad_aprendizaje": 15,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Martes",
        "hora_inicio": "12:00",
        "hora_fin": "13:30"
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
        "hora_inicio": "12:00",
        "hora_fin": "13:30"
      }
    ]
  },
  {
    "profesor": "GARCIA SALES JUAN VICENTE",
    "unidad_aprendizaje": "PROGRAMACION ORIENTADA A OBJETOS",
    "grupo": "2CM5",
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      },
      {
        "dia": "Martes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Miércoles",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      },
      {
        "dia": "Jueves",
        "hora_inicio": "08:30",
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
    "profesor": "JUAREZ MARTINEZ GENARO",
    "unidad_aprendizaje": "TEORIA COMPUTACIONAL",
    "grupo": "2CM5",
    "id_unidad_aprendizaje": 16,
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
    "profesor": "OLVERA ALDANA MIGUEL",
    "unidad_aprendizaje": "MATEMATICAS AVANZADAS PARA LA INGENIERIA",
    "grupo": "2CM5",
    "id_unidad_aprendizaje": 13,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Martes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Miércoles",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Jueves",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Viernes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      }
    ]
  },
  {
    "profesor": "RAMIREZ TENORIO RAFAEL",
    "unidad_aprendizaje": "FUNDAMENTOS ECONOMICOS",
    "grupo": "2CM5",
    "id_unidad_aprendizaje": 14,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
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
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Viernes",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      }
    ]
  },
  {
    "profesor": "FLORES MENDOZA YAXKIN",
    "unidad_aprendizaje": "PROGRAMACION ORIENTADA A OBJETOS",
    "grupo": "2CM6",
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "10:30",
        "hora_fin": "12:00"
      },
      {
        "dia": "Martes",
        "hora_inicio": "08:30",
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
    "profesor": "SALINAS LUGO SERGIO",
    "unidad_aprendizaje": "BASES DE DATOS",
    "grupo": "2CM6",
    "id_unidad_aprendizaje": 17,
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
    "profesor": "TORRES MANRIQUEZ JUAN JOSE",
    "unidad_aprendizaje": "MATEMATICAS AVANZADAS PARA LA INGENIERIA",
    "grupo": "2CM6",
    "id_unidad_aprendizaje": 13,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      },
      {
        "dia": "Martes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Miércoles",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      },
      {
        "dia": "Jueves",
        "hora_inicio": "08:30",
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
    "profesor": "CEBALLOS SEBASTIAN RICARDO",
    "unidad_aprendizaje": "PROBABILIDAD Y ESTADISTICA",
    "grupo": "2CM7",
    "id_unidad_aprendizaje": 22,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "10:30",
        "hora_fin": "12:00"
      },
      {
        "dia": "Martes",
        "hora_inicio": "08:30",
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
    "profesor": "CIFUENTES ALVAREZ ALEJANDRO SIGFRIDO",
    "unidad_aprendizaje": "TECNOLOGIAS PARA LA WEB",
    "grupo": "2CM7",
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Martes",
        "hora_inicio": "12:00",
        "hora_fin": "13:30"
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
        "hora_inicio": "12:00",
        "hora_fin": "13:30"
      }
    ]
  },
  {
    "profesor": "CORTES GALICIA JORGE",
    "unidad_aprendizaje": "SISTEMAS OPERATIVOS",
    "grupo": "2CM7",
    "id_unidad_aprendizaje": 23,
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
    "profesor": "GUTIERREZ ALDANA EDUARDO",
    "unidad_aprendizaje": "REDES DE COMPUTADORAS",
    "grupo": "2CM7",
    "id_unidad_aprendizaje": 20,
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
    "profesor": "HERNANDEZ RUBIO ERIKA",
    "unidad_aprendizaje": "ANALISIS Y DISEÑO ORIENTADO A OBJETOS",
    "grupo": "2CM7",
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Martes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Miércoles",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Jueves",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Viernes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      }
    ]
  },
  {
    "profesor": "LOPEZ RODRIGUEZ CLAUDIA ALEJAN",
    "unidad_aprendizaje": "DISEÑO DE SISTEMAS DIGITALES",
    "grupo": "2CM7",
    "id_unidad_aprendizaje": 21,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      },
      {
        "dia": "Martes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Miércoles",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      },
      {
        "dia": "Jueves",
        "hora_inicio": "08:30",
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
    "profesor": "RODRIGUEZ FLORES EDUARDO",
    "unidad_aprendizaje": "ADMINISTRACION FINANCIERA",
    "grupo": "2CM7",
    "id_unidad_aprendizaje": 26,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
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
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Viernes",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      }
    ]
  },
  {
    "profesor": "CEBALLOS SEBASTIAN RICARDO",
    "unidad_aprendizaje": "PROBABILIDAD Y ESTADISTICA",
    "grupo": "2CM8",
    "id_unidad_aprendizaje": 22,
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
    "profesor": "DORANTES GONZALEZ MARCO ANTONIO",
    "unidad_aprendizaje": "ANALISIS Y DISEÑO ORIENTADO A OBJETOS",
    "grupo": "2CM8",
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      },
      {
        "dia": "Martes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Miércoles",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      },
      {
        "dia": "Jueves",
        "hora_inicio": "08:30",
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
    "profesor": "HERNANDEZ JAIME JOSEFINA",
    "unidad_aprendizaje": "ADMINISTRACION FINANCIERA",
    "grupo": "2CM8",
    "id_unidad_aprendizaje": 26,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Martes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Miércoles",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Jueves",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Viernes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      }
    ]
  },
  {
    "profesor": "LOPEZ RODRIGUEZ CLAUDIA ALEJAN",
    "unidad_aprendizaje": "DISEÑO DE SISTEMAS DIGITALES",
    "grupo": "2CM8",
    "id_unidad_aprendizaje": 21,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "10:30",
        "hora_fin": "12:00"
      },
      {
        "dia": "Martes",
        "hora_inicio": "08:30",
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
    "profesor": "MORENO CERVANTES AXEL ERNESTO",
    "unidad_aprendizaje": "REDES DE COMPUTADORAS",
    "grupo": "2CM8",
    "id_unidad_aprendizaje": 20,
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
    "profesor": "RIVERA DE LA ROSA MONICA",
    "unidad_aprendizaje": "TECNOLOGIAS PARA LA WEB",
    "grupo": "2CM8",
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
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
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Viernes",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      }
    ]
  },
  {
    "profesor": "AGUSTIN DOMINGUEZ VERONICA",
    "unidad_aprendizaje": "ADMINISTRACION FINANCIERA",
    "grupo": "2CM9",
    "id_unidad_aprendizaje": 26,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      },
      {
        "dia": "Martes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Miércoles",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      },
      {
        "dia": "Jueves",
        "hora_inicio": "08:30",
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
    "profesor": "CAÑEDO SUAREZ LETICIA",
    "unidad_aprendizaje": "PROBABILIDAD Y ESTADISTICA",
    "grupo": "2CM9",
    "id_unidad_aprendizaje": 22,
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
    "profesor": "CARRETO ARELLANO CHADWICK",
    "unidad_aprendizaje": "ANALISIS Y DISEÑO ORIENTADO A OBJETOS",
    "grupo": "2CM9",
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
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
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Viernes",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      }
    ]
  },
  {
    "profesor": "GALICIA MEJIA RUBEN",
    "unidad_aprendizaje": "DISEÑO DE SISTEMAS DIGITALES",
    "grupo": "2CM9",
    "id_unidad_aprendizaje": 21,
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
    "profesor": "MORENO CERVANTES AXEL ERNESTO",
    "unidad_aprendizaje": "REDES DE COMPUTADORAS",
    "grupo": "2CM9",
    "id_unidad_aprendizaje": 20,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Martes",
        "hora_inicio": "12:00",
        "hora_fin": "13:30"
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
        "hora_inicio": "12:00",
        "hora_fin": "13:30"
      }
    ]
  },
  {
    "profesor": "ORTEGA PACHECO JOSE DAVID",
    "unidad_aprendizaje": "SISTEMAS OPERATIVOS",
    "grupo": "2CM9",
    "id_unidad_aprendizaje": 23,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "10:30",
        "hora_fin": "12:00"
      },
      {
        "dia": "Martes",
        "hora_inicio": "08:30",
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
    "profesor": "RIVERA DE LA ROSA MONICA",
    "unidad_aprendizaje": "TECNOLOGIAS PARA LA WEB",
    "grupo": "2CM9",
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Martes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Miércoles",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Jueves",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Viernes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      }
    ]
  },
  {
    "profesor": "BARRANCO JIMENEZ MARCO ANTONIO",
    "unidad_aprendizaje": "MATEMATICAS AVANZADAS PARA LA INGENIERIA",
    "grupo": "2CV1",
    "id_unidad_aprendizaje": 13,
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
    "profesor": "DE LA O TORRES SAUL",
    "unidad_aprendizaje": "PROGRAMACION ORIENTADA A OBJETOS",
    "grupo": "2CV1",
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
    "profesor": "ESTRADA ELIZALDE SERAFIN",
    "unidad_aprendizaje": "FUNDAMENTOS ECONOMICOS",
    "grupo": "2CV1",
    "id_unidad_aprendizaje": 14,
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
    "profesor": "PAZ RODRIGUEZ HECTOR MANUEL",
    "unidad_aprendizaje": "ELECTRONICA ANALOGICA",
    "grupo": "2CV1",
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
    "profesor": "SANCHEZ GARCIA LUZ MARIA",
    "unidad_aprendizaje": "TEORIA COMPUTACIONAL",
    "grupo": "2CV1",
    "id_unidad_aprendizaje": 16,
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
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Jueves",
        "hora_inicio": "13:30",
        "hora_fin": "15:00"
      },
      {
        "dia": "Viernes",
        "hora_inicio": "",
        "hora_fin": ""
      }
    ]
  },
  {
    "profesor": "AGUSTIN DOMINGUEZ VERONICA",
    "unidad_aprendizaje": "ADMINISTRACION FINANCIERA",
    "grupo": "2CV10",
    "id_unidad_aprendizaje": 26,
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
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Jueves",
        "hora_inicio": "13:30",
        "hora_fin": "15:00"
      },
      {
        "dia": "Viernes",
        "hora_inicio": "",
        "hora_fin": ""
      }
    ]
  },
  {
    "profesor": "BAUTISTA ROSALES SANDRA IVETTE",
    "unidad_aprendizaje": "REDES DE COMPUTADORAS",
    "grupo": "2CV10",
    "id_unidad_aprendizaje": 20,
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
    "unidad_aprendizaje": "FUNDAMENTOS ECONOMICOS",
    "grupo": "2CV10",
    "id_unidad_aprendizaje": 14,
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
    "profesor": "MONTIEL SANCHEZ ANGEL SALVADOR",
    "unidad_aprendizaje": "PROBABILIDAD Y ESTADISTICA",
    "grupo": "2CV10",
    "id_unidad_aprendizaje": 22,
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
    "profesor": "MORALES CRUZ JUAN CARLOS",
    "unidad_aprendizaje": "FUNDAMENTOS DE DISEÑO DIGITAL",
    "grupo": "2CV10",
    "id_unidad_aprendizaje": 15,
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
    "profesor": "NAVA LARA JOEL",
    "unidad_aprendizaje": "MATEMATICAS AVANZADAS PARA LA INGENIERIA",
    "grupo": "2CV11",
    "id_unidad_aprendizaje": 13,
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
    "profesor": "CORDERO LOPEZ MARTHA ROSA",
    "unidad_aprendizaje": "ANALISIS Y DISEÑO ORIENTADO A OBJETOS",
    "grupo": "2CV11",
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
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Jueves",
        "hora_inicio": "13:30",
        "hora_fin": "15:00"
      },
      {
        "dia": "Viernes",
        "hora_inicio": "",
        "hora_fin": ""
      }
    ]
  },
  {
    "profesor": "MOLINA LOZANO HERON",
    "unidad_aprendizaje": "DISEÑO DE SISTEMAS DIGITALES",
    "grupo": "2CV11",
    "id_unidad_aprendizaje": 21,
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
    "profesor": "ESTRADA ELIZALDE SERAFIN",
    "unidad_aprendizaje": "FUNDAMENTOS ECONOMICOS",
    "grupo": "2CV2",
    "id_unidad_aprendizaje": 14,
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
    "profesor": "HERNANDEZ AGUILAR JOSE LUIS",
    "unidad_aprendizaje": "ELECTRONICA ANALOGICA",
    "grupo": "2CV2",
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
    "profesor": "LUNA BENOSO BENJAMIN",
    "unidad_aprendizaje": "TEORIA COMPUTACIONAL",
    "grupo": "2CV2",
    "id_unidad_aprendizaje": 16,
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
    "profesor": "SAUCEDO DELGADO RAFAEL NORMAN",
    "unidad_aprendizaje": "PROGRAMACION ORIENTADA A OBJETOS",
    "grupo": "2CV2",
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
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Jueves",
        "hora_inicio": "13:30",
        "hora_fin": "15:00"
      },
      {
        "dia": "Viernes",
        "hora_inicio": "",
        "hora_fin": ""
      }
    ]
  },
  {
    "profesor": "JIMENEZ RUIZ RENE BALTAZAR",
    "unidad_aprendizaje": "FUNDAMENTOS DE DISEÑO DIGITAL",
    "grupo": "2CV2",
    "id_unidad_aprendizaje": 15,
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
    "profesor": "CATALAN SALGADO EDGAR ARMANDO",
    "unidad_aprendizaje": "BASES DE DATOS",
    "grupo": "2CV3",
    "id_unidad_aprendizaje": 17,
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
    "profesor": "CERVANTES DE ANDA ISMAEL",
    "unidad_aprendizaje": "ELECTRONICA ANALOGICA",
    "grupo": "2CV3",
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
    "profesor": "CRUZ GARCIA DANIEL",
    "unidad_aprendizaje": "PROGRAMACION ORIENTADA A OBJETOS",
    "grupo": "2CV3",
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
    "profesor": "HERRERA YAÑEZ CRISPIN",
    "unidad_aprendizaje": "MATEMATICAS AVANZADAS PARA LA INGENIERIA",
    "grupo": "2CV3",
    "id_unidad_aprendizaje": 13,
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
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Jueves",
        "hora_inicio": "13:30",
        "hora_fin": "15:00"
      },
      {
        "dia": "Viernes",
        "hora_inicio": "",
        "hora_fin": ""
      }
    ]
  },
  {
    "profesor": "LOPEZ LEIVA LUIS OCTAVIO",
    "unidad_aprendizaje": "FUNDAMENTOS DE DISEÑO DIGITAL",
    "grupo": "2CV3",
    "id_unidad_aprendizaje": 15,
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
    "profesor": "OLIVARES CEJA JESUS MANUEL",
    "unidad_aprendizaje": "TEORIA COMPUTACIONAL",
    "grupo": "2CV3",
    "id_unidad_aprendizaje": 16,
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
    "profesor": "BARRANCO JIMENEZ MARCO ANTONIO",
    "unidad_aprendizaje": "MATEMATICAS AVANZADAS PARA LA INGENIERIA",
    "grupo": "2CV4",
    "id_unidad_aprendizaje": 13,
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
    "profesor": "CATALAN SALGADO EDGAR ARMANDO",
    "unidad_aprendizaje": "BASES DE DATOS",
    "grupo": "2CV4",
    "id_unidad_aprendizaje": 17,
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
    "profesor": "FLORES MENDOZA YAXKIN",
    "unidad_aprendizaje": "PROGRAMACION ORIENTADA A OBJETOS",
    "grupo": "2CV4",
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
    "profesor": "LOPEZ LEIVA LUIS OCTAVIO",
    "unidad_aprendizaje": "FUNDAMENTOS DE DISEÑO DIGITAL",
    "grupo": "2CV4",
    "id_unidad_aprendizaje": 15,
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
    "profesor": "ROSAS TRIGUEROS JORGE LUIS",
    "unidad_aprendizaje": "TEORIA COMPUTACIONAL",
    "grupo": "2CV4",
    "id_unidad_aprendizaje": 16,
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
    "profesor": "VILLEGAS NAVARRETE SONIA",
    "unidad_aprendizaje": "FUNDAMENTOS ECONOMICOS",
    "grupo": "2CV4",
    "id_unidad_aprendizaje": 14,
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
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Jueves",
        "hora_inicio": "13:30",
        "hora_fin": "15:00"
      },
      {
        "dia": "Viernes",
        "hora_inicio": "",
        "hora_fin": ""
      }
    ]
  },
  {
    "profesor": "BARRANCO JIMENEZ MARCO ANTONIO",
    "unidad_aprendizaje": "MATEMATICAS AVANZADAS PARA LA INGENIERIA",
    "grupo": "2CV5",
    "id_unidad_aprendizaje": 13,
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
    "unidad_aprendizaje": "FUNDAMENTOS ECONOMICOS",
    "grupo": "2CV5",
    "id_unidad_aprendizaje": 14,
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
    "profesor": "CHAVARRIA BAEZ LORENA",
    "unidad_aprendizaje": "BASES DE DATOS",
    "grupo": "2CV5",
    "id_unidad_aprendizaje": 17,
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
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Jueves",
        "hora_inicio": "13:30",
        "hora_fin": "15:00"
      },
      {
        "dia": "Viernes",
        "hora_inicio": "",
        "hora_fin": ""
      }
    ]
  },
  {
    "profesor": "DE LA O TORRES SAUL",
    "unidad_aprendizaje": "PROGRAMACION ORIENTADA A OBJETOS",
    "grupo": "2CV5",
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
    "profesor": "MANDUJANO JOSE ROBERTO",
    "unidad_aprendizaje": "PROBABILIDAD Y ESTADISTICA",
    "grupo": "2CV6",
    "id_unidad_aprendizaje": 22,
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
    "profesor": "BAUTISTA ROSALES SANDRA IVETTE",
    "unidad_aprendizaje": "REDES DE COMPUTADORAS",
    "grupo": "2CV6",
    "id_unidad_aprendizaje": 20,
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
    "profesor": "HERNÀNDEZ CRUZ MACARIO",
    "unidad_aprendizaje": "TECNOLOGIAS PARA LA WEB",
    "grupo": "2CV6",
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
    "profesor": "JIMENEZ BENITEZ JOSE ALFREDO",
    "unidad_aprendizaje": "SISTEMAS OPERATIVOS",
    "grupo": "2CV6",
    "id_unidad_aprendizaje": 23,
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
    "profesor": "JIMENEZ RUIZ RENE BALTAZAR",
    "unidad_aprendizaje": "DISEÑO DE SISTEMAS DIGITALES",
    "grupo": "2CV6",
    "id_unidad_aprendizaje": 21,
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
    "profesor": "YLLANES MEJIA BERNARDO",
    "unidad_aprendizaje": "ADMINISTRACION FINANCIERA",
    "grupo": "2CV6",
    "id_unidad_aprendizaje": 26,
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
    "profesor": "MANDUJANO JOSE ROBERTO",
    "unidad_aprendizaje": "PROBABILIDAD Y ESTADISTICA",
    "grupo": "2CV7",
    "id_unidad_aprendizaje": 22,
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
    "profesor": "ALCARAZ TORRES JUAN JESUS",
    "unidad_aprendizaje": "REDES DE COMPUTADORAS",
    "grupo": "2CV7",
    "id_unidad_aprendizaje": 20,
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
    "profesor": "ARAUJO DIAZ DAVID",
    "unidad_aprendizaje": "SISTEMAS OPERATIVOS",
    "grupo": "2CV7",
    "id_unidad_aprendizaje": 23,
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
    "profesor": "GALIÑANES RODRIGUEZ MARIA GABRIELA",
    "unidad_aprendizaje": "ADMINISTRACION FINANCIERA",
    "grupo": "2CV7",
    "id_unidad_aprendizaje": 26,
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
    "profesor": "MELARA ABARCA REYNA ELIA",
    "unidad_aprendizaje": "ANALISIS Y DISEÑO ORIENTADO A OBJETOS",
    "grupo": "2CV7",
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
    "profesor": "MORALES CRUZ JUAN CARLOS",
    "unidad_aprendizaje": "DISEÑO DE SISTEMAS DIGITALES",
    "grupo": "2CV7",
    "id_unidad_aprendizaje": 21,
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
    "profesor": "PEREDO VALDERRAMA RUBEN",
    "unidad_aprendizaje": "TECNOLOGIAS PARA LA WEB",
    "grupo": "2CV7",
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
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Jueves",
        "hora_inicio": "13:30",
        "hora_fin": "15:00"
      },
      {
        "dia": "Viernes",
        "hora_inicio": "",
        "hora_fin": ""
      }
    ]
  },
  {
    "profesor": "HENESTROSA CARRASCO LETICIA",
    "unidad_aprendizaje": "REDES DE COMPUTADORAS",
    "grupo": "2CV8",
    "id_unidad_aprendizaje": 20,
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
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Jueves",
        "hora_inicio": "13:30",
        "hora_fin": "15:00"
      },
      {
        "dia": "Viernes",
        "hora_inicio": "",
        "hora_fin": ""
      }
    ]
  },
  {
    "profesor": "JIMENEZ GALAN YASMIN IVETTE",
    "unidad_aprendizaje": "ADMINISTRACION FINANCIERA",
    "grupo": "2CV8",
    "id_unidad_aprendizaje": 26,
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
    "profesor": "LOPEZ RUIZ GABRIELA DE JESUS",
    "unidad_aprendizaje": "TECNOLOGIAS PARA LA WEB",
    "grupo": "2CV8",
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
    "profesor": "MELARA ABARCA REYNA ELIA",
    "unidad_aprendizaje": "ANALISIS Y DISEÑO ORIENTADO A OBJETOS",
    "grupo": "2CV8",
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
    "profesor": "RANGEL GONZALEZ JOSUE",
    "unidad_aprendizaje": "SISTEMAS OPERATIVOS",
    "grupo": "2CV8",
    "id_unidad_aprendizaje": 23,
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
    "profesor": "TIRADO LULE JUDITH MARGARITA",
    "unidad_aprendizaje": "PROBABILIDAD Y ESTADISTICA",
    "grupo": "2CV8",
    "id_unidad_aprendizaje": 22,
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
    "profesor": "MELARA ABARCA REYNA ELIA",
    "unidad_aprendizaje": "ANALISIS Y DISEÑO ORIENTADO A OBJETOS",
    "grupo": "2CV9",
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
    "profesor": "MONTIEL SANCHEZ ANGEL SALVADOR",
    "unidad_aprendizaje": "PROBABILIDAD Y ESTADISTICA",
    "grupo": "2CV9",
    "id_unidad_aprendizaje": 22,
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
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Jueves",
        "hora_inicio": "13:30",
        "hora_fin": "15:00"
      },
      {
        "dia": "Viernes",
        "hora_inicio": "",
        "hora_fin": ""
      }
    ]
  },
  {
    "profesor": "ORTIZ RAMIREZ JOSE ANTONIO",
    "unidad_aprendizaje": "TECNOLOGIAS PARA LA WEB",
    "grupo": "2CV9",
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
    "profesor": "RANGEL GONZALEZ JOSUE",
    "unidad_aprendizaje": "SISTEMAS OPERATIVOS",
    "grupo": "2CV9",
    "id_unidad_aprendizaje": 23,
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
    "profesor": "YLLANES MEJIA BERNARDO",
    "unidad_aprendizaje": "ADMINISTRACION FINANCIERA",
    "grupo": "2CV9",
    "id_unidad_aprendizaje": 26,
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
    "profesor": "AGUSTIN DOMINGUEZ VERONICA",
    "unidad_aprendizaje": "ADMINISTRACION DE PROYECTOS",
    "grupo": "3CM1",
    "id_unidad_aprendizaje": 32,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Martes",
        "hora_inicio": "12:00",
        "hora_fin": "13:30"
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
        "hora_inicio": "12:00",
        "hora_fin": "13:30"
      }
    ]
  },
  {
    "profesor": "CASTILLO CABRERA GELACIO",
    "unidad_aprendizaje": "ARQUITECTURA DE COMPUTADORAS",
    "grupo": "3CM1",
    "id_unidad_aprendizaje": 27,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      },
      {
        "dia": "Martes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Miércoles",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      },
      {
        "dia": "Jueves",
        "hora_inicio": "08:30",
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
    "profesor": "CHAVARRIA BAEZ LORENA",
    "unidad_aprendizaje": "DATA BASE SELECTED TOPICS",
    "grupo": "3CM1",
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
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
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Viernes",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      }
    ]
  },
  {
    "profesor": "GARCIA MENDOZA CONSUELO VARINIA",
    "unidad_aprendizaje": "ANALISIS DE ALGORITMOS",
    "grupo": "3CM1",
    "id_unidad_aprendizaje": 29,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Martes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Miércoles",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Jueves",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Viernes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      }
    ]
  },
  {
    "profesor": "HERNANDEZ RUBIO ERIKA",
    "unidad_aprendizaje": "DATA MINING",
    "grupo": "3CM1",
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
    "profesor": "MALDONADO CASTILLO M. EN C. IDALIA",
    "unidad_aprendizaje": "INGENIERIA DE SOFTWARE",
    "grupo": "3CM1",
    "id_unidad_aprendizaje": 31,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "10:30",
        "hora_fin": "12:00"
      },
      {
        "dia": "Martes",
        "hora_inicio": "08:30",
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
    "profesor": "MARTINEZ DIAZ JUAN CARLOS",
    "unidad_aprendizaje": "INSTRUMENTACION",
    "grupo": "3CM1",
    "id_unidad_aprendizaje": 33,
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
    "profesor": "MOSSO GARCIA M. EN C. IVAN GIOVANNY",
    "unidad_aprendizaje": "ARTIFICIAL INTELLIGENCE",
    "grupo": "3CM10",
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "",
        "hora_fin": ""
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
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Viernes",
        "hora_inicio": "",
        "hora_fin": ""
      }
    ]
  },
  {
    "profesor": "MOSSO GARCIA M. EN C. IVAN GIOVANNY",
    "unidad_aprendizaje": "APPLICATION DEVELOPMENT FOR MOBILE DEVICES",
    "grupo": "3CM10",
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "",
        "hora_fin": ""
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
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Viernes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      }
    ]
  },
  {
    "profesor": "MOSSO GARCIA M. EN C. IVAN GIOVANNY",
    "unidad_aprendizaje": "COMPUTING SELECTED TOPICS",
    "grupo": "3CM10",
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Martes",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      },
      {
        "dia": "Miércoles",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Jueves",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Viernes",
        "hora_inicio": "",
        "hora_fin": ""
      }
    ]
  },
  {
    "profesor": "MOSSO GARCIA M. EN C. IVAN GIOVANNY",
    "unidad_aprendizaje": "IMAGE ANALYSIS",
    "grupo": "3CM10",
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Martes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Miércoles",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Jueves",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Viernes",
        "hora_inicio": "",
        "hora_fin": ""
      }
    ]
  },
  {
    "profesor": "MOSSO GARCIA M. EN C. IVAN GIOVANNY",
    "unidad_aprendizaje": "WEB SECURITY",
    "grupo": "3CM10",
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
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
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Viernes",
        "hora_inicio": "",
        "hora_fin": ""
      }
    ]
  },
  {
    "profesor": "MOSSO GARCIA M. EN C. IVAN GIOVANNY",
    "unidad_aprendizaje": "PARALLEL AND CONCURRENT PROGRAMMING",
    "grupo": "3CM10",
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Martes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Miércoles",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Jueves",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Viernes",
        "hora_inicio": "",
        "hora_fin": ""
      }
    ]
  },
  {
    "profesor": "MOSSO GARCIA M. EN C. IVAN GIOVANNY",
    "unidad_aprendizaje": "DIGITAL CONTROL",
    "grupo": "3CM10",
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
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
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Viernes",
        "hora_inicio": "",
        "hora_fin": ""
      }
    ]
  },
  {
    "profesor": "CASTILLO CABRERA GELACIO",
    "unidad_aprendizaje": "ARQUITECTURA DE COMPUTADORAS",
    "grupo": "3CM2",
    "id_unidad_aprendizaje": 27,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "10:30",
        "hora_fin": "12:00"
      },
      {
        "dia": "Martes",
        "hora_inicio": "08:30",
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
    "profesor": "GARCIA MENDOZA CONSUELO VARINIA",
    "unidad_aprendizaje": "ANALISIS DE ALGORITMOS",
    "grupo": "3CM2",
    "id_unidad_aprendizaje": 29,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      },
      {
        "dia": "Martes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Miércoles",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      },
      {
        "dia": "Jueves",
        "hora_inicio": "08:30",
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
    "profesor": "LOPEZ RABADAN JOSE JAIME",
    "unidad_aprendizaje": "INGENIERIA DE SOFTWARE",
    "grupo": "3CM2",
    "id_unidad_aprendizaje": 31,
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
    "profesor": "MORENO ARMENDARIZ MARCO ANTONIO",
    "unidad_aprendizaje": "NEURAL NETWORKS",
    "grupo": "3CM2",
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Martes",
        "hora_inicio": "12:00",
        "hora_fin": "13:30"
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
        "hora_inicio": "12:00",
        "hora_fin": "13:30"
      }
    ]
  },
  {
    "profesor": "ORTEGA GONZALEZ RUBEN",
    "unidad_aprendizaje": "INSTRUMENTACION",
    "grupo": "3CM2",
    "id_unidad_aprendizaje": 33,
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
    "profesor": "RODRIGUEZ FLORES EDUARDO",
    "unidad_aprendizaje": "ADMINISTRACION DE PROYECTOS",
    "grupo": "3CM2",
    "id_unidad_aprendizaje": 32,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Martes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Miércoles",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Jueves",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Viernes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      }
    ]
  },
  {
    "profesor": "SALINAS LUGO SERGIO",
    "unidad_aprendizaje": "DISTRIBUTED DATA BASE",
    "grupo": "3CM2",
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
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
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Viernes",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      }
    ]
  },
  {
    "profesor": "GUTIERREZ ALDANA ALFONSO",
    "unidad_aprendizaje": "INSTRUMENTACION",
    "grupo": "3CM3",
    "id_unidad_aprendizaje": 33,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Martes",
        "hora_inicio": "12:00",
        "hora_fin": "13:30"
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
        "hora_inicio": "12:00",
        "hora_fin": "13:30"
      }
    ]
  },
  {
    "profesor": "CASTILLO CABRERA GELACIO",
    "unidad_aprendizaje": "ARQUITECTURA DE COMPUTADORAS",
    "grupo": "3CM3",
    "id_unidad_aprendizaje": 27,
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
    "profesor": "CIFUENTES ALVAREZ ALEJANDRO SIGFRIDO",
    "unidad_aprendizaje": "WEB SECURITY",
    "grupo": "3CM3",
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Martes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Miércoles",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Jueves",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Viernes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      }
    ]
  },
  {
    "profesor": "DORANTES GONZALEZ MARCO ANTONIO",
    "unidad_aprendizaje": "INGENIERIA DE SOFTWARE",
    "grupo": "3CM3",
    "id_unidad_aprendizaje": 31,
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
    "profesor": "FRANCO MARTINEZ EDGARDO ADRIAN",
    "unidad_aprendizaje": "ANALISIS DE ALGORITMOS",
    "grupo": "3CM3",
    "id_unidad_aprendizaje": 29,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "10:30",
        "hora_fin": "12:00"
      },
      {
        "dia": "Martes",
        "hora_inicio": "08:30",
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
    "profesor": "SANCHEZ CRUZ VIRGINIA",
    "unidad_aprendizaje": "ADMINISTRACION DE PROYECTOS",
    "grupo": "3CM3",
    "id_unidad_aprendizaje": 32,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      },
      {
        "dia": "Martes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Miércoles",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      },
      {
        "dia": "Jueves",
        "hora_inicio": "08:30",
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
    "profesor": "AGUSTIN DOMINGUEZ VERONICA",
    "unidad_aprendizaje": "ADMINISTRACION DE PROYECTOS",
    "grupo": "3CM4",
    "id_unidad_aprendizaje": 32,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "10:30",
        "hora_fin": "12:00"
      },
      {
        "dia": "Martes",
        "hora_inicio": "08:30",
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
    "profesor": "CIFUENTES ALVAREZ ALEJANDRO SIGFRIDO",
    "unidad_aprendizaje": "APPLICATION DEVELOPMENT FOR MOBILE DEVICES",
    "grupo": "3CM4",
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
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
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Viernes",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      }
    ]
  },
  {
    "profesor": "GARCIA ORTEGA VICTOR HUGO",
    "unidad_aprendizaje": "ARQUITECTURA DE COMPUTADORAS",
    "grupo": "3CM4",
    "id_unidad_aprendizaje": 27,
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
    "profesor": "MARTINEZ DIAZ JUAN CARLOS",
    "unidad_aprendizaje": "INSTRUMENTACION",
    "grupo": "3CM4",
    "id_unidad_aprendizaje": 33,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      },
      {
        "dia": "Martes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Miércoles",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      },
      {
        "dia": "Jueves",
        "hora_inicio": "08:30",
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
    "profesor": "MENDEZ SEGUNDO LAURA",
    "unidad_aprendizaje": "INGENIERIA DE SOFTWARE",
    "grupo": "3CM4",
    "id_unidad_aprendizaje": 31,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Martes",
        "hora_inicio": "12:00",
        "hora_fin": "13:30"
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
        "hora_inicio": "12:00",
        "hora_fin": "13:30"
      }
    ]
  },
  {
    "profesor": "PEREDO VALDERRAMA RUBEN",
    "unidad_aprendizaje": "WEB APPLICATION DEVELOPMENT",
    "grupo": "3CM4",
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Martes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Miércoles",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Jueves",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Viernes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      }
    ]
  },
  {
    "profesor": "SANCHEZ GARCIA LUZ MARIA",
    "unidad_aprendizaje": "ANALISIS DE ALGORITMOS",
    "grupo": "3CM4",
    "id_unidad_aprendizaje": 29,
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
    "profesor": "CASTILLO MARRUFO JUAN ANTONIO",
    "unidad_aprendizaje": "METODOS CUANTITATIVOS PARA LA TOMA DE DECISIONES",
    "grupo": "3CM5",
    "id_unidad_aprendizaje": 36,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "10:30",
        "hora_fin": "12:00"
      },
      {
        "dia": "Martes",
        "hora_inicio": "08:30",
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
    "profesor": "CORTEZ DUARTE NIDIA ASUNCIÓN",
    "unidad_aprendizaje": "CRYPTOGRAPHY",
    "grupo": "3CM5",
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
    "profesor": "CRUZ MEZA MARIA ELENA",
    "unidad_aprendizaje": "IMAGE ANALYSIS",
    "grupo": "3CM5",
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
    "profesor": "MORENO CERVANTES AXEL ERNESTO",
    "unidad_aprendizaje": "APLICACIONES PARA COMUNICACIONES DE RED",
    "grupo": "3CM5",
    "id_unidad_aprendizaje": 35,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
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
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Viernes",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      }
    ]
  },
  {
    "profesor": "FERNANDEZ VAZQUEZ ALFONSO",
    "unidad_aprendizaje": "TEORIA DE COMUNICACIONES Y SEÑALES",
    "grupo": "3CM5",
    "id_unidad_aprendizaje": 34,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Martes",
        "hora_inicio": "12:00",
        "hora_fin": "13:30"
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
        "hora_inicio": "12:00",
        "hora_fin": "13:30"
      }
    ]
  },
  {
    "profesor": "PEREZ PEREZ JOSE JUAN",
    "unidad_aprendizaje": "INTRODUCCION A LOS MICROCONTROLADORES",
    "grupo": "3CM5",
    "id_unidad_aprendizaje": 37,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      },
      {
        "dia": "Martes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Miércoles",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      },
      {
        "dia": "Jueves",
        "hora_inicio": "08:30",
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
    "profesor": "SAUCEDO DELGADO RAFAEL NORMAN",
    "unidad_aprendizaje": "COMPILADORES",
    "grupo": "3CM5",
    "id_unidad_aprendizaje": 38,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Martes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Miércoles",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Jueves",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Viernes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      }
    ]
  },
  {
    "profesor": "GUTIERREZ ALDANA EDUARDO",
    "unidad_aprendizaje": "TEORIA DE COMUNICACIONES Y SEÑALES",
    "grupo": "3CM6",
    "id_unidad_aprendizaje": 34,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
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
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Viernes",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      }
    ]
  },
  {
    "profesor": "JUAREZ MARTINEZ GENARO",
    "unidad_aprendizaje": "COMPUTING SELECTED TOPICS",
    "grupo": "3CM6",
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
    "profesor": "LOPEZ ROJAS ARIEL",
    "unidad_aprendizaje": "METODOS CUANTITATIVOS PARA LA TOMA DE DECISIONES",
    "grupo": "3CM6",
    "id_unidad_aprendizaje": 36,
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
    "profesor": "MORALES GUITRON SANDRA LUZ",
    "unidad_aprendizaje": "GENETIC ALGORITHMS",
    "grupo": "3CM6",
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Martes",
        "hora_inicio": "12:00",
        "hora_fin": "13:30"
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
        "hora_inicio": "12:00",
        "hora_fin": "13:30"
      }
    ]
  },
  {
    "profesor": "MORENO CERVANTES AXEL ERNESTO",
    "unidad_aprendizaje": "APLICACIONES PARA COMUNICACIONES DE RED",
    "grupo": "3CM6",
    "id_unidad_aprendizaje": 35,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Martes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Miércoles",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Jueves",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Viernes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      }
    ]
  },
  {
    "profesor": "PEREZ PEREZ JOSE JUAN",
    "unidad_aprendizaje": "INTRODUCCION A LOS MICROCONTROLADORES",
    "grupo": "3CM6",
    "id_unidad_aprendizaje": 37,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "10:30",
        "hora_fin": "12:00"
      },
      {
        "dia": "Martes",
        "hora_inicio": "08:30",
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
    "profesor": "SAUCEDO DELGADO RAFAEL NORMAN",
    "unidad_aprendizaje": "COMPILADORES",
    "grupo": "3CM6",
    "id_unidad_aprendizaje": 38,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      },
      {
        "dia": "Martes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Miércoles",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      },
      {
        "dia": "Jueves",
        "hora_inicio": "08:30",
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
    "profesor": "GUTIERREZ ALDANA EDUARDO",
    "unidad_aprendizaje": "TEORIA DE COMUNICACIONES Y SEÑALES",
    "grupo": "3CM7",
    "id_unidad_aprendizaje": 34,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Martes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Miércoles",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Jueves",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Viernes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      }
    ]
  },
  {
    "profesor": "GUZMAN FLORES JESSIE PAULINA",
    "unidad_aprendizaje": "IT GOVERNANCE",
    "grupo": "3CM7",
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Martes",
        "hora_inicio": "12:00",
        "hora_fin": "13:30"
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
        "hora_inicio": "12:00",
        "hora_fin": "13:30"
      }
    ]
  },
  {
    "profesor": "MARTINEZ PERALES JOSE CRUZ",
    "unidad_aprendizaje": "METODOS CUANTITATIVOS PARA LA TOMA DE DECISIONES",
    "grupo": "3CM7",
    "id_unidad_aprendizaje": 36,
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
    "unidad_aprendizaje": "ECONOMIC ENGINEERING",
    "grupo": "3CM7",
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
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
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Viernes",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      }
    ]
  },
  {
    "profesor": "PEREZ PEREZ JOSE JUAN",
    "unidad_aprendizaje": "INTRODUCCION A LOS MICROCONTROLADORES",
    "grupo": "3CM7",
    "id_unidad_aprendizaje": 37,
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
    "profesor": "SANCHEZ QUINTANILLA GILBERTO",
    "unidad_aprendizaje": "APLICACIONES PARA COMUNICACIONES DE RED",
    "grupo": "3CM7",
    "id_unidad_aprendizaje": 35,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      },
      {
        "dia": "Martes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Miércoles",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      },
      {
        "dia": "Jueves",
        "hora_inicio": "08:30",
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
    "profesor": "TECLA PARRA ROBERTO",
    "unidad_aprendizaje": "COMPILADORES",
    "grupo": "3CM7",
    "id_unidad_aprendizaje": 38,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "10:30",
        "hora_fin": "12:00"
      },
      {
        "dia": "Martes",
        "hora_inicio": "08:30",
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
    "profesor": "AGUILAR SANCHEZ FERNANDO",
    "unidad_aprendizaje": "INTRODUCCION A LOS MICROCONTROLADORES",
    "grupo": "3CM8",
    "id_unidad_aprendizaje": 37,
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
    "profesor": "MUJICA ASCENCIO CESAR",
    "unidad_aprendizaje": "TEORIA DE COMUNICACIONES Y SEÑALES",
    "grupo": "3CM8",
    "id_unidad_aprendizaje": 34,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      },
      {
        "dia": "Martes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Miércoles",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      },
      {
        "dia": "Jueves",
        "hora_inicio": "08:30",
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
    "profesor": "CASTILLO MARRUFO JUAN ANTONIO",
    "unidad_aprendizaje": "METODOS CUANTITATIVOS PARA LA TOMA DE DECISIONES",
    "grupo": "3CM8",
    "id_unidad_aprendizaje": 36,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Martes",
        "hora_inicio": "12:00",
        "hora_fin": "13:30"
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
        "hora_inicio": "12:00",
        "hora_fin": "13:30"
      }
    ]
  },
  {
    "profesor": "TECLA PARRA ROBERTO",
    "unidad_aprendizaje": "COMPILADORES",
    "grupo": "3CM8",
    "id_unidad_aprendizaje": 38,
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
    "profesor": "CASTILLO MARRUFO JUAN ANTONIO",
    "unidad_aprendizaje": "METODOS CUANTITATIVOS PARA LA TOMA DE DECISIONES",
    "grupo": "3CM9",
    "id_unidad_aprendizaje": 36,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      },
      {
        "dia": "Martes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Miércoles",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      },
      {
        "dia": "Jueves",
        "hora_inicio": "08:30",
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
    "profesor": "CRUZ MEZA MARIA ELENA",
    "unidad_aprendizaje": "PATTERN RECOGNITION",
    "grupo": "3CM9",
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "10:30",
        "hora_fin": "12:00"
      },
      {
        "dia": "Martes",
        "hora_inicio": "08:30",
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
    "profesor": "HERNÀNDEZ CRUZ MACARIO",
    "unidad_aprendizaje": "ARTIFICIAL INTELLIGENCE",
    "grupo": "3CM9",
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
    "profesor": "PEREDO VALDERRAMA RUBEN",
    "unidad_aprendizaje": "WEB APPLICATION DEVELOPMENT",
    "grupo": "3CM9",
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
    "profesor": "LOPEZ ROJAS ARIEL",
    "unidad_aprendizaje": "HIGH TECHNOLOGY ENTERPRISE MANAGEMENT",
    "grupo": "3CM9",
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Martes",
        "hora_inicio": "12:00",
        "hora_fin": "13:30"
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
        "hora_inicio": "12:00",
        "hora_fin": "13:30"
      }
    ]
  },
  {
    "profesor": "CATALAN SALGADO EDGAR ARMANDO",
    "unidad_aprendizaje": "ARTIFICIAL INTELLIGENCE",
    "grupo": "3CV1",
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
    "profesor": "GUZMAN FLORES JESSIE PAULINA",
    "unidad_aprendizaje": "ADMINISTRACION DE PROYECTOS",
    "grupo": "3CV1",
    "id_unidad_aprendizaje": 32,
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
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Jueves",
        "hora_inicio": "13:30",
        "hora_fin": "15:00"
      },
      {
        "dia": "Viernes",
        "hora_inicio": "",
        "hora_fin": ""
      }
    ]
  },
  {
    "profesor": "HERNANDEZ AGUILAR JOSE LUIS",
    "unidad_aprendizaje": "INSTRUMENTACION",
    "grupo": "3CV1",
    "id_unidad_aprendizaje": 33,
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
    "profesor": "HERNÀNDEZ CRUZ MACARIO",
    "unidad_aprendizaje": "INGENIERIA DE SOFTWARE",
    "grupo": "3CV1",
    "id_unidad_aprendizaje": 31,
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
    "profesor": "LUNA BENOSO BENJAMIN",
    "unidad_aprendizaje": "ANALISIS DE ALGORITMOS",
    "grupo": "3CV1",
    "id_unidad_aprendizaje": 29,
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
    "profesor": "CERVANTES DE ANDA ISMAEL",
    "unidad_aprendizaje": "INSTRUMENTACION",
    "grupo": "3CV2",
    "id_unidad_aprendizaje": 33,
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
    "profesor": "DIAZ SANTIAGO SANDRA",
    "unidad_aprendizaje": "CRYPTOGRAPHY",
    "grupo": "3CV2",
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
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Jueves",
        "hora_inicio": "13:30",
        "hora_fin": "15:00"
      },
      {
        "dia": "Viernes",
        "hora_inicio": "",
        "hora_fin": ""
      }
    ]
  },
  {
    "profesor": "GUZMAN FLORES JESSIE PAULINA",
    "unidad_aprendizaje": "ADMINISTRACION DE PROYECTOS",
    "grupo": "3CV2",
    "id_unidad_aprendizaje": 32,
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
    "profesor": "LUNA BENOSO BENJAMIN",
    "unidad_aprendizaje": "ANALISIS DE ALGORITMOS",
    "grupo": "3CV2",
    "id_unidad_aprendizaje": 29,
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
    "profesor": "VEGA GARCIA NAYELI",
    "unidad_aprendizaje": "ARQUITECTURA DE COMPUTADORAS",
    "grupo": "3CV2",
    "id_unidad_aprendizaje": 27,
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
    "profesor": "HERNÀNDEZ CRUZ MACARIO",
    "unidad_aprendizaje": "INGENIERIA DE SOFTWARE",
    "grupo": "3CV2",
    "id_unidad_aprendizaje": 31,
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
    "profesor": "FLORES CARAPIA ROLANDO",
    "unidad_aprendizaje": "ANALISIS DE ALGORITMOS",
    "grupo": "3CV3",
    "id_unidad_aprendizaje": 29,
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
    "profesor": "HERNANDEZ CONTRERAS EULER",
    "unidad_aprendizaje": "DISTRIBUTED DATA BASE",
    "grupo": "3CV3",
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
    "profesor": "ROCHA BERNABE ROSARIO",
    "unidad_aprendizaje": "INSTRUMENTACION",
    "grupo": "3CV3",
    "id_unidad_aprendizaje": 33,
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
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Jueves",
        "hora_inicio": "13:30",
        "hora_fin": "15:00"
      },
      {
        "dia": "Viernes",
        "hora_inicio": "",
        "hora_fin": ""
      }
    ]
  },
  {
    "profesor": "SILVA GARCIA VICTOR MANUEL",
    "unidad_aprendizaje": "CRYPTOGRAPHY",
    "grupo": "3CV3",
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
    "profesor": "VEGA GARCIA NAYELI",
    "unidad_aprendizaje": "ARQUITECTURA DE COMPUTADORAS",
    "grupo": "3CV3",
    "id_unidad_aprendizaje": 27,
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
    "profesor": "VELEZ SALDAÑA ULISES",
    "unidad_aprendizaje": "INGENIERIA DE SOFTWARE",
    "grupo": "3CV3",
    "id_unidad_aprendizaje": 31,
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
    "profesor": "VILLEGAS NAVARRETE SONIA",
    "unidad_aprendizaje": "ADMINISTRACION DE PROYECTOS",
    "grupo": "3CV3",
    "id_unidad_aprendizaje": 32,
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
    "profesor": "BARRON FERNANDEZ RICARDO",
    "unidad_aprendizaje": "ANALISIS DE ALGORITMOS",
    "grupo": "3CV4",
    "id_unidad_aprendizaje": 29,
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
    "profesor": "BOTELLO CASTILLO ALEJANDRO",
    "unidad_aprendizaje": "DATA BASE SELECTED TOPICS",
    "grupo": "3CV4",
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
    "profesor": "CASTILLO CABRERA GELACIO",
    "unidad_aprendizaje": "ARQUITECTURA DE COMPUTADORAS",
    "grupo": "3CV4",
    "id_unidad_aprendizaje": 27,
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
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Jueves",
        "hora_inicio": "13:30",
        "hora_fin": "15:00"
      },
      {
        "dia": "Viernes",
        "hora_inicio": "",
        "hora_fin": ""
      }
    ]
  },
  {
    "profesor": "HERNANDEZ AGUILAR JOSE LUIS",
    "unidad_aprendizaje": "INSTRUMENTACION",
    "grupo": "3CV4",
    "id_unidad_aprendizaje": 33,
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
    "profesor": "ARZATE GORDILLO JACQUELINE",
    "unidad_aprendizaje": "TEORIA DE COMUNICACIONES Y SEÑALES",
    "grupo": "3CV5",
    "id_unidad_aprendizaje": 34,
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
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Jueves",
        "hora_inicio": "13:30",
        "hora_fin": "15:00"
      },
      {
        "dia": "Viernes",
        "hora_inicio": "",
        "hora_fin": ""
      }
    ]
  },
  {
    "profesor": "BAUTISTA ROSALES SANDRA IVETTE",
    "unidad_aprendizaje": "APLICACIONES PARA COMUNICACIONES DE RED",
    "grupo": "3CV5",
    "id_unidad_aprendizaje": 35,
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
    "profesor": "GALIÑANES RODRIGUEZ MARIA GABRIELA",
    "unidad_aprendizaje": "IT GOVERNANCE",
    "grupo": "3CV5",
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
    "profesor": "MARTINEZ PERALES JOSE CRUZ",
    "unidad_aprendizaje": "METODOS CUANTITATIVOS PARA LA TOMA DE DECISIONES",
    "grupo": "3CV5",
    "id_unidad_aprendizaje": 36,
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
    "profesor": "ORTIGOZA CAMPOS LIC. ANDRES",
    "unidad_aprendizaje": "COMPILADORES",
    "grupo": "3CV5",
    "id_unidad_aprendizaje": 38,
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
    "profesor": "ARZATE GORDILLO JACQUELINE",
    "unidad_aprendizaje": "TEORIA DE COMUNICACIONES Y SEÑALES",
    "grupo": "3CV6",
    "id_unidad_aprendizaje": 34,
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
    "profesor": "BAUTISTA ROSALES SANDRA IVETTE",
    "unidad_aprendizaje": "APLICACIONES PARA COMUNICACIONES DE RED",
    "grupo": "3CV6",
    "id_unidad_aprendizaje": 35,
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
    "profesor": "GARCIA ORTEGA VICTOR HUGO",
    "unidad_aprendizaje": "INTRODUCCION A LOS MICROCONTROLADORES",
    "grupo": "3CV6",
    "id_unidad_aprendizaje": 37,
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
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Jueves",
        "hora_inicio": "13:30",
        "hora_fin": "15:00"
      },
      {
        "dia": "Viernes",
        "hora_inicio": "",
        "hora_fin": ""
      }
    ]
  },
  {
    "profesor": "HERNANDEZ OLVERA LUIS ENRIQUE",
    "unidad_aprendizaje": "COMPILADORES",
    "grupo": "3CV6",
    "id_unidad_aprendizaje": 38,
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
    "profesor": "LOPEZ ROJAS ARIEL",
    "unidad_aprendizaje": "METODOS CUANTITATIVOS PARA LA TOMA DE DECISIONES",
    "grupo": "3CV6",
    "id_unidad_aprendizaje": 36,
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
    "profesor": "ROSAS TRIGUEROS JORGE LUIS",
    "unidad_aprendizaje": "BIOINFORMATICS",
    "grupo": "3CV6",
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
    "profesor": "ARZATE GORDILLO JACQUELINE",
    "unidad_aprendizaje": "TEORIA DE COMUNICACIONES Y SEÑALES",
    "grupo": "3CV7",
    "id_unidad_aprendizaje": 34,
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
    "profesor": "GALIÑANES RODRIGUEZ MARIA GABRIELA",
    "unidad_aprendizaje": "METODOS CUANTITATIVOS PARA LA TOMA DE DECISIONES",
    "grupo": "3CV7",
    "id_unidad_aprendizaje": 36,
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
    "profesor": "HERNANDEZ JAIME JOSEFINA",
    "unidad_aprendizaje": "ADMINISTRACION DE PROYECTOS",
    "grupo": "3CV7",
    "id_unidad_aprendizaje": 32,
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
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Jueves",
        "hora_inicio": "13:30",
        "hora_fin": "15:00"
      },
      {
        "dia": "Viernes",
        "hora_inicio": "",
        "hora_fin": ""
      }
    ]
  },
  {
    "profesor": "HERNANDEZ OLVERA LUIS ENRIQUE",
    "unidad_aprendizaje": "COMPILADORES",
    "grupo": "3CV7",
    "id_unidad_aprendizaje": 38,
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
    "profesor": "MORALES CRUZ JUAN CARLOS",
    "unidad_aprendizaje": "INTRODUCCION A LOS MICROCONTROLADORES",
    "grupo": "3CV7",
    "id_unidad_aprendizaje": 37,
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
    "unidad_aprendizaje": "COMPUTATIONAL GEOMETRY",
    "grupo": "3CV7",
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
    "profesor": "SERRANO TALAMANTES J. FELIX",
    "unidad_aprendizaje": "PATTERN RECOGNITION",
    "grupo": "3CV7",
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
    "profesor": "HERNANDEZ OLVERA LUIS ENRIQUE",
    "unidad_aprendizaje": "COMPILADORES",
    "grupo": "3CV8",
    "id_unidad_aprendizaje": 38,
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
    "profesor": "MARTINEZ PERALES JOSE CRUZ",
    "unidad_aprendizaje": "METODOS CUANTITATIVOS PARA LA TOMA DE DECISIONES",
    "grupo": "3CV8",
    "id_unidad_aprendizaje": 36,
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
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Jueves",
        "hora_inicio": "13:30",
        "hora_fin": "15:00"
      },
      {
        "dia": "Viernes",
        "hora_inicio": "",
        "hora_fin": ""
      }
    ]
  },
  {
    "profesor": "PALACIOS SOLANO ROCIO",
    "unidad_aprendizaje": "IT GOVERNANCE",
    "grupo": "3CV8",
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
    "profesor": "PUEBLA LOMAS JAIME HUGO",
    "unidad_aprendizaje": "TEORIA DE COMUNICACIONES Y SEÑALES",
    "grupo": "3CV8",
    "id_unidad_aprendizaje": 34,
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
    "profesor": "RANGEL GONZALEZ JOSUE",
    "unidad_aprendizaje": "APLICACIONES PARA COMUNICACIONES DE RED",
    "grupo": "3CV8",
    "id_unidad_aprendizaje": 35,
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
    "profesor": "VELEZ SALDAÑA ULISES",
    "unidad_aprendizaje": "SOFTWARE ENGINEERING FOR MOBILE DEVICES",
    "grupo": "3CV8",
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
    "profesor": "MORALES GUITRON SANDRA LUZ",
    "unidad_aprendizaje": "ANALYSIS AND DESIGN OF PARALLEL ALGORITHMS",
    "grupo": "3CV9",
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
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Jueves",
        "hora_inicio": "13:30",
        "hora_fin": "15:00"
      },
      {
        "dia": "Viernes",
        "hora_inicio": "",
        "hora_fin": ""
      }
    ]
  },
  {
    "profesor": "PAZ RODRIGUEZ HECTOR MANUEL",
    "unidad_aprendizaje": "INTRODUCCION A LOS MICROCONTROLADORES",
    "grupo": "3CV9",
    "id_unidad_aprendizaje": 37,
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
    "profesor": "RANGEL GONZALEZ JOSUE",
    "unidad_aprendizaje": "APLICACIONES PARA COMUNICACIONES DE RED",
    "grupo": "3CV9",
    "id_unidad_aprendizaje": 35,
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
    "profesor": "ENRIQUEZ ZARATE JOSE ASUNCION",
    "unidad_aprendizaje": "WEB APPLICATION DEVELOPMENT",
    "grupo": "3CV9",
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
    "profesor": "CORONILLA CONTRERAS UKRANIO",
    "unidad_aprendizaje": "DESARROLLO DE SISTEMAS DISTRIBUIDOS",
    "grupo": "4CM1",
    "id_unidad_aprendizaje": 41,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Martes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Miércoles",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Jueves",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Viernes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      }
    ]
  },
  {
    "profesor": "GUTIERREZ ALDANA EDUARDO",
    "unidad_aprendizaje": "ADMINISTRACION DE SERVICIOS EN RED",
    "grupo": "4CM1",
    "id_unidad_aprendizaje": 42,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      },
      {
        "dia": "Martes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Miércoles",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      },
      {
        "dia": "Jueves",
        "hora_inicio": "08:30",
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
    "profesor": "PEREZ VERA MONSERRAT GABRIELA",
    "unidad_aprendizaje": "LIDERAZGO Y DESARROLLO PROFESIONAL",
    "grupo": "4CM1",
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "10:30",
        "hora_fin": "12:00"
      },
      {
        "dia": "Martes",
        "hora_inicio": "08:30",
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
    "profesor": "SANCHEZ CRUZ VIRGINIA",
    "unidad_aprendizaje": "GESTION EMPRESARIAL",
    "grupo": "4CM1",
    "id_unidad_aprendizaje": 43,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
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
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Viernes",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      }
    ]
  },
  {
    "profesor": "TORRES GONZALEZ ENRIQUE",
    "unidad_aprendizaje": "TRABAJO TERMINAL I",
    "grupo": "4CM1",
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
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Viernes",
        "hora_inicio": "",
        "hora_fin": ""
      }
    ]
  },
  {
    "profesor": "CORONILLA CONTRERAS UKRANIO",
    "unidad_aprendizaje": "DESARROLLO DE SISTEMAS DISTRIBUIDOS",
    "grupo": "4CM2",
    "id_unidad_aprendizaje": 41,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      },
      {
        "dia": "Martes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Miércoles",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      },
      {
        "dia": "Jueves",
        "hora_inicio": "08:30",
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
    "profesor": "FERRER TENORIO JORGE",
    "unidad_aprendizaje": "TRABAJO TERMINAL I",
    "grupo": "4CM2",
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
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Viernes",
        "hora_inicio": "",
        "hora_fin": ""
      }
    ]
  },
  {
    "profesor": "FERRER TENORIO JORGE",
    "unidad_aprendizaje": "LIDERAZGO Y DESARROLLO PROFESIONAL",
    "grupo": "4CM2",
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
    "profesor": "MALDONADO MUÑOZ MIGUEL ANGEL",
    "unidad_aprendizaje": "GESTION EMPRESARIAL",
    "grupo": "4CM2",
    "id_unidad_aprendizaje": 43,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "10:30",
        "hora_fin": "12:00"
      },
      {
        "dia": "Martes",
        "hora_inicio": "08:30",
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
    "profesor": "MARTINEZ ROSALES RICARDO",
    "unidad_aprendizaje": "ADMINISTRACION DE SERVICIOS EN RED",
    "grupo": "4CM2",
    "id_unidad_aprendizaje": 42,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Martes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Miércoles",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Jueves",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Viernes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      }
    ]
  },
  {
    "profesor": "CORONILLA CONTRERAS UKRANIO",
    "unidad_aprendizaje": "DESARROLLO DE SISTEMAS DISTRIBUIDOS",
    "grupo": "4CM3",
    "id_unidad_aprendizaje": 41,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "10:30",
        "hora_fin": "12:00"
      },
      {
        "dia": "Martes",
        "hora_inicio": "08:30",
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
    "profesor": "PEREZ DE LOS SANTOS MONDRAGON TANIBET",
    "unidad_aprendizaje": "ADMINISTRACION DE SERVICIOS EN RED",
    "grupo": "4CM3",
    "id_unidad_aprendizaje": 42,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      },
      {
        "dia": "Martes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Miércoles",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      },
      {
        "dia": "Jueves",
        "hora_inicio": "08:30",
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
    "profesor": "PEREZ VERA MONSERRAT GABRIELA",
    "unidad_aprendizaje": "LIDERAZGO Y DESARROLLO PROFESIONAL",
    "grupo": "4CM3",
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
    "profesor": "PEREZ VERA SANDRA MERCEDES",
    "unidad_aprendizaje": "TRABAJO TERMINAL I",
    "grupo": "4CM3",
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Martes",
        "hora_inicio": "12:00",
        "hora_fin": "13:30"
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
        "hora_inicio": "",
        "hora_fin": ""
      }
    ]
  },
  {
    "profesor": "SANCHEZ CRUZ VIRGINIA",
    "unidad_aprendizaje": "GESTION EMPRESARIAL",
    "grupo": "4CM3",
    "id_unidad_aprendizaje": 43,
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
    "unidad_aprendizaje": "LIDERAZGO Y DESARROLLO PROFESIONAL",
    "grupo": "4CM4",
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
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
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Viernes",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      }
    ]
  },
  {
    "profesor": "CORONILLA CONTRERAS UKRANIO",
    "unidad_aprendizaje": "DESARROLLO DE SISTEMAS DISTRIBUIDOS",
    "grupo": "4CM4",
    "id_unidad_aprendizaje": 41,
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
    "profesor": "MALDONADO MUÑOZ MIGUEL ANGEL",
    "unidad_aprendizaje": "GESTION EMPRESARIAL",
    "grupo": "4CM4",
    "id_unidad_aprendizaje": 43,
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
    "profesor": "PEREZ DE LOS SANTOS MONDRAGON TANIBET",
    "unidad_aprendizaje": "ADMINISTRACION DE SERVICIOS EN RED",
    "grupo": "4CM4",
    "id_unidad_aprendizaje": 42,
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "10:30",
        "hora_fin": "12:00"
      },
      {
        "dia": "Martes",
        "hora_inicio": "08:30",
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
    "profesor": "CRUZ TORRES BENJAMIN",
    "unidad_aprendizaje": "ADMINISTRACION DE SERVICIOS EN RED",
    "grupo": "4CV1",
    "id_unidad_aprendizaje": 42,
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
    "profesor": "CRUZ TORRES BENJAMIN",
    "unidad_aprendizaje": "DESARROLLO DE SISTEMAS DISTRIBUIDOS",
    "grupo": "4CV1",
    "id_unidad_aprendizaje": 41,
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
    "profesor": "GONZALEZ ALBARRAN GISELA",
    "unidad_aprendizaje": "LIDERAZGO Y DESARROLLO PROFESIONAL",
    "grupo": "4CV1",
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
    "profesor": "HERNANDEZ CONTRERAS EULER",
    "unidad_aprendizaje": "TRABAJO TERMINAL I",
    "grupo": "4CV1",
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Martes",
        "hora_inicio": "",
        "hora_fin": ""
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
    "profesor": "VILLEGAS NAVARRETE SONIA",
    "unidad_aprendizaje": "GESTION EMPRESARIAL",
    "grupo": "4CV1",
    "id_unidad_aprendizaje": 43,
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
    "profesor": "CANCINO MOSQUEDA ODETTE BERENICE",
    "unidad_aprendizaje": "GESTION EMPRESARIAL",
    "grupo": "4CV2",
    "id_unidad_aprendizaje": 43,
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
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Jueves",
        "hora_inicio": "13:30",
        "hora_fin": "15:00"
      },
      {
        "dia": "Viernes",
        "hora_inicio": "",
        "hora_fin": ""
      }
    ]
  },
  {
    "profesor": "CRUZ TORRES BENJAMIN",
    "unidad_aprendizaje": "DESARROLLO DE SISTEMAS DISTRIBUIDOS",
    "grupo": "4CV2",
    "id_unidad_aprendizaje": 41,
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
    "profesor": "FLORES DELGADO RAQUEL",
    "unidad_aprendizaje": "LIDERAZGO Y DESARROLLO PROFESIONAL",
    "grupo": "4CV2",
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
    "profesor": "JIMENEZ GALAN YASMIN IVETTE",
    "unidad_aprendizaje": "TRABAJO TERMINAL I",
    "grupo": "4CV2",
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
        "hora_inicio": "",
        "hora_fin": ""
      }
    ]
  },
  {
    "profesor": "SOTO RAMOS MANUEL ALEJANDRO",
    "unidad_aprendizaje": "ADMINISTRACION DE SERVICIOS EN RED",
    "grupo": "4CV2",
    "id_unidad_aprendizaje": 42,
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
    "unidad_aprendizaje": "LIDERAZGO Y DESARROLLO PROFESIONAL",
    "grupo": "4CV3",
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
    "profesor": "DAVALOS LOPEZ JOSE CARLOS",
    "unidad_aprendizaje": "TRABAJO TERMINAL I",
    "grupo": "4CV3",
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "13:30",
        "hora_fin": "15:00"
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
    "profesor": "ENRIQUEZ ZARATE JOSE ASUNCION",
    "unidad_aprendizaje": "DESARROLLO DE SISTEMAS DISTRIBUIDOS",
    "grupo": "4CV3",
    "id_unidad_aprendizaje": 41,
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
    "profesor": "JIMENEZ GALAN YASMIN IVETTE",
    "unidad_aprendizaje": "GESTION EMPRESARIAL",
    "grupo": "4CV3",
    "id_unidad_aprendizaje": 43,
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
    "profesor": "SOTO RAMOS MANUEL ALEJANDRO",
    "unidad_aprendizaje": "ADMINISTRACION DE SERVICIOS EN RED",
    "grupo": "4CV3",
    "id_unidad_aprendizaje": 42,
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
    "profesor": "CRUZ TORRES BENJAMIN",
    "unidad_aprendizaje": "DESARROLLO DE SISTEMAS DISTRIBUIDOS",
    "grupo": "4CV4",
    "id_unidad_aprendizaje": 41,
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
    "profesor": "JIMENEZ GALAN YASMIN IVETTE",
    "unidad_aprendizaje": "GESTION EMPRESARIAL",
    "grupo": "4CV4",
    "id_unidad_aprendizaje": 43,
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
    "profesor": "SOTO RAMOS MANUEL ALEJANDRO",
    "unidad_aprendizaje": "ADMINISTRACION DE SERVICIOS EN RED",
    "grupo": "4CV4",
    "id_unidad_aprendizaje": 42,
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
    "profesor": "MARTINEZ ACOSTA LILIAN",
    "unidad_aprendizaje": "TRABAJO TERMINAL II",
    "grupo": "5CM1",
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "10:30",
        "hora_fin": "12:00"
      },
      {
        "dia": "Martes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Miércoles",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      },
      {
        "dia": "Jueves",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Viernes",
        "hora_inicio": "",
        "hora_fin": ""
      }
    ]
  },
  {
    "profesor": "OCAMPO BOTELLO FABIOLA",
    "unidad_aprendizaje": "TRABAJO TERMINAL II",
    "grupo": "5CM2",
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Martes",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Miércoles",
        "hora_inicio": "07:00",
        "hora_fin": "08:30"
      },
      {
        "dia": "Jueves",
        "hora_inicio": "",
        "hora_fin": ""
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
    "unidad_aprendizaje": "TRABAJO TERMINAL II",
    "grupo": "5CM3",
    "horarios": [
      {
        "dia": "Lunes",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      },
      {
        "dia": "Martes",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Miércoles",
        "hora_inicio": "08:30",
        "hora_fin": "10:00"
      },
      {
        "dia": "Jueves",
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Viernes",
        "hora_inicio": "",
        "hora_fin": ""
      }
    ]
  },
  {
    "profesor": "CORDERO LOPEZ MARTHA ROSA",
    "unidad_aprendizaje": "TRABAJO TERMINAL II",
    "grupo": "5CV1",
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
        "hora_inicio": "",
        "hora_fin": ""
      }
    ]
  },
  {
    "profesor": "DORANTES GONZALEZ MARCO ANTONIO",
    "unidad_aprendizaje": "TRABAJO TERMINAL II",
    "grupo": "5CV2",
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
        "hora_inicio": "",
        "hora_fin": ""
      }
    ]
  },
  {
    "profesor": "TIRADO LULE JUDITH MARGARITA",
    "unidad_aprendizaje": "TRABAJO TERMINAL II",
    "grupo": "5CV3",
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
        "hora_inicio": "",
        "hora_fin": ""
      },
      {
        "dia": "Viernes",
        "hora_inicio": "",
        "hora_fin": ""
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

			var ua = horarios[i].unidad_aprendizaje.split(' ');
			var uaname = '';
			ua.forEach((p: any) => {
				if(p.length > 1) {
					let q = p[0]
					uaname += (q + p.substring(1,p.length).toLowerCase() + ' ')
				} else {
					uaname += (p + ' ');
				}
			})
			
			let horario = {
				id: i,
				profesor: name.trim(),
				id_unidad_aprendizaje: horarios[i].id_unidad_aprendizaje,
				unidad_aprendizaje: uaname.trim(),
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