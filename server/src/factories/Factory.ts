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
			id: "PEESCPM2009",
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
		  "id": "UAIEYS1",
		  "id_plan_estudios": "PEESCPM2009",
			"nombre": "Ingeniería Ética y Sociedad",
			"semestre": 1,
			"creditos": 4.39,
			"optativa": false
		},
		{
		  "id": "UAAV1",
		  "id_plan_estudios": "PEESCPM2009",
			"nombre": "Análisis Vectorial",
			"semestre": 1,
			"creditos": 4.39,
			"optativa": false
		},
		{
		  "id": "UAC1",
		  "id_plan_estudios": "PEESCPM2009",
			"nombre": "Cálculo",
			"semestre": 1,
			"creditos": 4.45,
			"optativa": false
		},
		{
		  "id": "UAMD1",
		  "id_plan_estudios": "PEESCPM2009",
			"nombre": "Matemáticas Discretas",
			"semestre": 1,
			"creditos": 5.85,
			"optativa": false
		},
		{
		  "id": "UAAYPE1",
		  "id_plan_estudios": "PEESCPM2009",
			"nombre": "Algoritmia y Programación Estructurada",
			"semestre": 1,
			"creditos": 4.45,
			"optativa": false
		},
		{
		  "id": "UAF1",
		  "id_plan_estudios": "PEESCPM2009",
			"nombre": "Física",
			"semestre": 1,
			"creditos": 4.39,
			"optativa": false
		},
		{
		  "id": "UAECD2",
		  "id_plan_estudios": "PEESCPM2009",
			"nombre": "Ecuaciones Diferenciales",
			"semestre": 2,
			"creditos": 4.39,
			"optativa": false
		},
		{
		  "id": "UAAL2",
		  "id_plan_estudios": "PEESCPM2009",
			"nombre": "Álgebra Lineal",
			"semestre": 2,
			"creditos": 4.39,
			"optativa": false
		},
		{
		  "id": "UACA2",
		  "id_plan_estudios": "PEESCPM2009",
			"nombre": "Cálculo Aplicado",
			"semestre": 2,
			"creditos": 4.44,
			"optativa": false
		},
		{
		  "id": "UAED2",
		  "id_plan_estudios": "PEESCPM2009",
			"nombre": "Estructuras de Datos",
			"semestre": 2,
			"creditos": 4.39,
			"optativa": false
		},
		{
		  "id": "UACOYE2",
		  "id_plan_estudios": "PEESCPM2009",
			"nombre": "Comunicación Oral y Escrita",
			"semestre": 2,
			"creditos": 4.39,
			"optativa": false
		},
		{
		  "id": "UAAFDC2",
		  "id_plan_estudios": "PEESCPM2009",
			"nombre": "Análisis Fundamental de Circuitos",
			"semestre": 2,
			"creditos": 4.33,
			"optativa": false
		},
		{
		  "id": "UAMAPLI3",
		  "id_plan_estudios": "PEESCPM2009",
			"nombre": "Matemáticas Avanzadas para la Ingeniería",
			"semestre": 3,
			"creditos": 4.45,
			"optativa": false
		},
		{
		  "id": "UAFE3",
		  "id_plan_estudios": "PEESCPM2009",
			"nombre": "Fundamentos Económicos",
			"semestre": 3,
			"creditos": 4.33,
			"optativa": false
		},
		{
		  "id": "UAFDDD3",
		  "id_plan_estudios": "PEESCPM2009",
			"nombre": "Fundamentos de Diseño Digital",
			"semestre": 3,
			"creditos": 4.48,
			"optativa": false
		},
		{
		  "id": "UATC3",
		  "id_plan_estudios": "PEESCPM2009",
			"nombre": "Teoría Computacional",
			"semestre": 3,
			"creditos": 4.36,
			"optativa": false
		},
		{
		  "id": "UABD3",
		  "id_plan_estudios": "PEESCPM2009",
			"nombre": "Bases de Datos",
			"semestre": 3,
			"creditos": 4.44,
			"optativa": false
		},
		{
		  "id": "UAPOAO3",
		  "id_plan_estudios": "PEESCPM2009",
			"nombre": "Programación Orientada a Objectos",
			"semestre": 3,
			"creditos": 4.44,
			"optativa": false
		},
		{
		  "id": "UAIEYS",
		  "id_plan_estudios": "PEESCPM2009",
			"nombre": "Electrónica Analógica",
			"semestre": 3,
			"creditos": 4.35,
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