'use strict'

let tarjetaController = use('App/Controllers/Http/TblTarjetaController')
let persona = use('App/Models/TblPersona')
let TblTarjetasFamiliare = use('App/Models/TblTarjetasFamiliare')
const log = use('App/Models/TblLog')

const moment = require('moment')


const Database = use('Database');
let fun = use('App/Functions/index')

class TblPersonaController extends tarjetaController {

	async index({ response }) {
		let data = await Database
			.table('tbl_registros_personales')
			.innerJoin('tbl_tarjetas_familiares', 'tbl_registros_personales.tarjetas_familiares_id', 'tbl_tarjetas_familiares.id')
			.innerJoin('tbl_personas', 'tbl_registros_personales.personas_id', 'tbl_personas.id')
			.leftJoin('tbl_eps', 'tbl_personas.eps_id', 'tbl_eps.id')

		return response.json({ validate: true, data: data });
	}

	async savePerson(value) {
		let id_persona = null;
		let per = value.persona
		let person = await Database
			.from('tbl_personas')
			.where('documento', per.documento)
			.first()
		let reg = null
		if (typeof person == 'undefined') {
			reg = new persona();
		}
		else {
			reg = await persona.find(person.id)
		}

		reg.cabeza_familia = per.cabeza_familia;
		reg.genero = per.genero;
		reg.familiaridad = per.familiaridad;
		reg.documento = per.documento;
		reg.grupo_poblacional = per.grupo_poblacional;
		reg.etnia = per.etnia;
		reg.documento_tipo = per.documento_tipo;
		reg.fecha_nacimiento = per.fecha_nacimiento == '' ? null : new Date(per.fecha_nacimiento);
		reg.estado_civil = per.estado_civil;
		reg.nivel_educativo = per.nivel_educativo;
		reg.tipo_ocupacion = per.tipo_ocupacion;
		reg.nombre_primero = per.nombre_primero;
		reg.nombre_segundo = per.nombre_segundo;
		reg.apellido_primero = per.apellido_primero;
		reg.apellido_segundo = per.apellido_segundo;
		reg.eps_id = per.eps_id == '' ? null : per.eps_id;
		reg.regimen = per.regimen;
		reg.afiliacion_tipo = per.afiliacion_tipo;
		reg.rango = per.rango;
		await reg.save()

		id_persona = reg.id;
		return id_persona;
	}

	async store({ request, response }) {
		let RequestData = new log();
		RequestData.name = 'registros recibidos';
		RequestData.value = JSON.stringify(request.all())
		RequestData.save()
		try {
			let me = this;
			let id_tarjetaFamiliar = null;
			let id_persona = null;
			let registros = request.input('registros');
			id_tarjetaFamiliar = await this.saveTarjeta(request);
			let errorsRegisters = [];

			await fun.asyncForEach(registros, async function (value) {
				id_persona = await me.savePerson(value);
				const error = await me.saveRegister(value, id_persona, id_tarjetaFamiliar, value);
				if (error.validation === false) {
					errorsRegisters.push(error.data);
				}
			});

			if (errorsRegisters.length > 0) {
				return response.status(500).json(errorsRegisters);
			}

			return response.json({
				validate: true,
				data: { id_tarjetaFamiliar: id_tarjetaFamiliar }
			});
		} catch (error) {
			return response.status(500).json({ validate: false, data: await error })
		}
	}

	async show({ params, response }) {
		let data = await TblTarjetasFamiliare
			.query()
			.with('tbl_registros_personales')
			.with('tbl_registros_personales.tbl_persona')
			.where('id', params.id)
			.first()

		return response.json({ validate: true, data: data });
	}

	async getPeoplesByMunicipality({ response }) {
		const data = await Database
			.table('tbl_personas')
			.select('tbl_municipios.nombre')
			.innerJoin('tbl_registros_personales', 'tbl_personas.id', 'tbl_registros_personales.personas_id')
			.innerJoin('tbl_tarjetas_familiares', 'tbl_registros_personales.tarjetas_familiares_id', 'tbl_tarjetas_familiares.id')
			.innerJoin('tbl_municipios', 'tbl_tarjetas_familiares.municipio_id', 'tbl_municipios.id')
			.groupBy('tbl_municipios.nombre')
			.orderBy('tbl_municipios.nombre')
			.count()

		return response.sendSuccess(data, 'Personas por municipios')
	}

	// async getPersonasByFilter({ request, response }) {

	// 	const { sexo, rango_edad, documento, embarazo, discapacidad } = request.all();

	// 	const persons = persona.query()
	// 		.whereHas('tbl_registro_personal', (builder) => {
	// 			if(embarazo) {
	// 				builder.where('salud_sexual_reproductiva_embarazo', true);
	// 			}
	// 			if(discapacidad) {
	// 				builder.where(discapacidad, true);
	// 			}
	// 		});

	// 	if(sexo) {
	// 		let genero = sexo == 'M' ? 'Masculino' : 'Femenino';
	// 		persons.where('genero', genero)
	// 	}

	// 	if(documento) {
	// 		persons.where('documento', documento)
	// 	}

	// 	if(rango_edad) {
	// 		const edad = rango_edad.split('-');
	// 		const edad1 = moment(new Date()).subtract(edad[0], 'years').format('YYYY-MM-DD')
	// 		const edad2 = moment(new Date()).subtract(edad[1], 'years').format('YYYY-MM-DD')
	// 		console.log(edad2, edad2)
	// 		persons.whereBetween('fecha_nacimiento', [edad2, edad1])
	// 	}

	// 	return response.json({ persons: await persons.fetch() });
	// }

	async getPersonasByFilter({ request, response }) {

		// Obtenemos los parámetros de búsqueda
		const { sexo, rango_edad, documento, embarazo, discapacidad } = request.all();

		let data = await Database
			.table('tbl_registros_personales')
			.innerJoin('tbl_tarjetas_familiares', 'tbl_registros_personales.tarjetas_familiares_id', 'tbl_tarjetas_familiares.id')
			.innerJoin('tbl_personas', 'tbl_registros_personales.personas_id', 'tbl_personas.id')
			.leftJoin('tbl_eps', 'tbl_personas.eps_id', 'tbl_eps.id')
			.where(function () {
				if (embarazo) {
					this.where('salud_sexual_reproductiva_embarazo', true);
				}
				if (discapacidad) {
					this.where(discapacidad, true);
				}
				if (sexo) {
					let genero = sexo == 'M' ? 'Masculino' : 'Femenino';
					this.where('genero', genero);
				}
				if (documento) {
					this.where('documento', documento);
				}
				if (rango_edad) {
					const edad = rango_edad.split('-');
					const edad1 = moment(new Date()).subtract(edad[0], 'years').format('YYYY-MM-DD');
					const edad2 = moment(new Date()).subtract(edad[1], 'years').format('YYYY-MM-DD');
					this.whereBetween('fecha_nacimiento', [edad2, edad1]);
				}
			});
		return response.json({ validate: true, persons: data });
	}

	async getPersonasPorRegimen({ response }) {
		let total = await Database
			.table('tbl_personas')
			.whereNotNull('regimen')
			.count('regimen');

		total = parseInt(total[0].count);

		let data = await Database
			.table('tbl_personas')
			.select('regimen as nombre', Database.raw('COUNT(*) as cantidad'))
			.whereNotNull('regimen')
			.groupBy('regimen');

		data = data.map(row => {
			const porcentaje = (row.cantidad / total) * 100;
			return {
				nombre: row.nombre,
				cantidad: row.cantidad,
				porcentaje: parseFloat(porcentaje.toFixed(2))
			};
		});

		return response.sendSuccess(data, 'Lista de personas por regimen');
	}

}

module.exports = TblPersonaController