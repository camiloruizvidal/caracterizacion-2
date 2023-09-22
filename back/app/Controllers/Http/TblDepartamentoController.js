'use strict'

const TblDepartamento = use('App/Models/TblDepartamento')

class TblDepartamentoController {
	/**
	 *
	 *
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 * @param {View} ctx.view
	 */
	async index ({ request, response, view }) {
	
		const data = await TblDepartamento.query().fetch()

		return response.sendSuccess(data, 'Lista de Departamentos')
	}
}

module.exports = TblDepartamentoController
