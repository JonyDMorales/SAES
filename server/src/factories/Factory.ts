const Faker = require('faker');
import { default as Alumno } from "../models/Alumno";
import { default as UnidadAprendizaje } from "../models/UnidadAprendizaje";
import { default as PlanEstudios } from "../models/PlanEstudios";
import { default as Escuela } from "../models/Escuela";
import { default as Profesor } from "../models/Profesor";

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
		}
	];

	isc_escom.forEach((ua) => {
		let unidadAprendizaje = new UnidadAprendizaje(ua);

	  unidadAprendizaje.save()
	  .then(() => console.log("UnidadAprendizaje Factory => Data => Success"))
	  .catch((err) => console.log(err));
	})
}