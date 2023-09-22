'use strict'

const tbl_medicamentos = use('App/Models/tbl_medicamento')

class TblMedicamentosController {
	/**
	 * Show a list of all tbl_medicamentos.
	 * GET tbl_medicamentos
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 * @param {View} ctx.view
	 */
	async index ({ request, response, view }) {

		const data = await tbl_medicamentos.query().fetch()

		return response.sendSuccess(data, 'Lista de medicamentos')
	}
}

module.exports = TblMedicamentosController
