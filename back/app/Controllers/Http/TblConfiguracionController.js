'use strict'

const TblConfiguracion = use('App/Models/TblConfiguracion')

class TblConfiguracionController {
	/**
	 * Show a list of all configurations.
	 * GET tbl_configuraciones
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 * @param {View} ctx.view
	 */
	 async index ({ request, response, view }) {
	
		const data = await TblConfiguracion.query().fetch()

		return response.sendSuccess(data, 'Lista de Configuraciones')
	}

	/**
   * Display a single tblconfiguracion.
   * GET tblconfiguracion/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
	async show ({ params, request, response, view }) {
		const { id } = params

		const data = await TblConfiguracion.find(id)

		return response.sendSuccess(data, 'Detalle de Configuracion')
	}

	 /**
	 * Update a tblconfiguraciones.
	 * PUT tblconfiguraciones
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 */
	async update ({ params, request, response }) {
		const { id } = params

		const { name, value } = request.all()

		const setting = await TblConfiguracion.find(id)
		setting.name = name
		setting.value = value
		await setting.save()

		return response.sendSuccess(null, 'Actualizacion de Configuracion correctamente')
	}
}

module.exports = TblConfiguracionController
