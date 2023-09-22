'use strict'

const tbl_enfermedades = use('App/Models/TblEnfermedades')

class tbl_enfermedades {
	/**
	 * Show a list of all tbl_enfermedades.
	 * GET tbl_enfermedades
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 * @param {View} ctx.view
	 */
	async index ({ request, response, view }) {
	
		const data = await tbl_enfermedades.query().fetch()

		return response.sendSuccess(data, 'Lista de enfermedades')
	}
}

module.exports = TblCorregimientoController
