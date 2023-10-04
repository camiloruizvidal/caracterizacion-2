'use strict'

const TblVereda = use('App/Models/TblVereda')
const TblTarjetasFamiliar = use('App/Models/TblTarjetasFamiliare')

class TblVeredaController {
	/**
	 * Show a list of all tblveredas.
	 * GET tblveredas
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 * @param {View} ctx.view
	 */
	async index ({ request, response, view }) {
	
		const data = await TblVereda.query().fetch()

		return response.sendSuccess(data, 'Lista de Veredas')
	}

	async getPersonasPorVereda({ response }) {
		const data = await TblVereda.query()
			.with('tbl_tarjetas_familiares.tbl_registros_personales')
			.fetch();
	
		const formattedData = data.toJSON().map(vereda => ({
			id: vereda.id,
			nombre: vereda.nombre,
			count: vereda.tbl_tarjetas_familiares.reduce((total, tarjeta) => total + tarjeta.tbl_registros_personales.length, 0)
		}));
	
		return response.sendSuccess(formattedData, 'Lista de veredas');
	}
}

module.exports = TblVeredaController
