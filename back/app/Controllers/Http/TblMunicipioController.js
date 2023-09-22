'use strict'

const TblMunicipio = use('App/Models/TblMunicipio')

class TblMunicipioController {
	/**
	 * Show a list of all tblmunicipios.
	 * GET tblmunicipios
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 * @param {View} ctx.view
	 */
	 async index ({ request, response, view }) {
		const data = await TblMunicipio.query().fetch()

		return response.sendSuccess(data, 'Lista de Municipios')
	}
	async show ({ request, response, params }) {
		const {id} = params;
		const data = await TblMunicipio.query().where('departamento_id', id).fetch()

		return response.sendSuccess(data, 'Lista de Municipios')
	}
}

module.exports = TblMunicipioController
