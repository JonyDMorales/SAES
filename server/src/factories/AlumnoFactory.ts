const Faker = require('faker');
import { default as Alumno } from "../models/Alumno";

//Faker.setLocale("es");
Faker.locale = "es";

export let alumnoData = (n: number) => {
	while(n--) {
		let data = {
			nombres: Faker.random.boolean() ? Faker.name.firstName() : Faker.name.firstName() + ' ' + Faker.name.firstName(),
			apellido_paterno: Faker.name.lastName(),
			apellido_materno: Faker.name.lastName(),
			boleta: Faker.random.number({min: 2000000000, max: 2010000000}),
			password: Faker.internet.password(),
			email: Faker.internet.email().toLowerCase(),
		}

		let alumno = new Alumno(data);

	  alumno.save()
	  .then(() => console.log("Alumno Factory => Data => Success"))
	  .catch((err) => console.log(err));
	}
}