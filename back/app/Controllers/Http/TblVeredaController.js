'use strict'

const TblVereda = use('App/Models/TblVereda')

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
}

module.exports = TblVeredaController
