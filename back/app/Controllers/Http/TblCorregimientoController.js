'use strict'

const TblCorregimiento = use('App/Models/TblCorregimiento')

class TblCorregimientoController {
	/**
	 * Show a list of all tblcorregimiento.
	 * GET tblcorregimiento
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 * @param {View} ctx.view
	 */
	async index ({ request, response, view }) {
	
		const data = await TblCorregimiento.query().fetch()

		return response.sendSuccess(data, 'Lista de Corregimientos')
	}
}

module.exports = TblCorregimientoController
