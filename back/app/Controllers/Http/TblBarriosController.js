'use strict'

const Tbl_Barrios = use('App/Models/TblBarrios')
const { validate } = use('Validator')


class TblBarriosController {
	/**
	 * Show a list of all tblbarrios.
	 * GET tblbarrios
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 * @param {View} ctx.view
	 */
	async index ({ request, response, view }) {

		const data = await Tbl_Barrios.query()
			.where('active', true)
			.with('tbl_departamento')
			.with('tbl_municipio')
			.fetch()

		return response.sendSuccess(data, 'Lista de barrios')
	}

	/**
	 * Store a tblbarrio.
	 * POST tblbarrios
	 *
	 **/
	async store ({ request, response }) {
		const { nombre, departamento_id, municipio_id } = request.all()

		let data = {
			nombre,
			departamento_id,
			municipio_id
		};

		const validated = await this.validate(data);

		if(validated.fails()) {
			return response.sendError(validated.messages(), 'Error', 422)
		}

		const create = await Tbl_Barrios.create(data)

		return response.sendSuccess(create, 'Barrio creado.')
	}

	/**
	 * Display a single tblbarrio.
	 * GET tblbarrios/:id
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 * @param {View} ctx.view
	 */
	async show ({ params, request, response, view }) {
		const { id } = params

		const neighborhood = await Tbl_Barrios.find(id)

		return response.sendSuccess(neighborhood, 'Detalle del barrio')
	}

	 /**
	 * Update a tblBarrios.
	 * PUT tblBarrios
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 */
	  async update ({ params, request, response }) {
		const { id } = params

		const { nombre, departamento_id, municipio_id } = request.all()

		const neighborhoods = await Tbl_Barrios.find(id)
		neighborhoods.nombre = nombre
		neighborhoods.departamento_id =departamento_id
		neighborhoods.municipio_id = municipio_id

		await neighborhoods.save()

		return response.sendSuccess(null, 'Actualizacion del barrio correctamente')
	}

	/**
   * Delete a tblbarrio with id.
   * DELETE tblbarrios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
	async destroy ({ params, request, response }) {
		const { id } = params

		const neighborhood = await Tbl_Barrios.find(id)

		neighborhood.active = false

		await neighborhood.save()

		return response.sendSuccess(null, 'Borrado del barrio correctamente')
	}

	async validate(data) {
		const rules = {
			nombre: 'required',
			departamento_id: 'required',
			municipio_id: 'required'
		}

		return await validate(data, rules)
	}
}

module.exports = TblBarriosController
