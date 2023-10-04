'use strict'

let TblParametrizacion = use('App/Models/TblParametrizacion')

class TblParametrizacionController {
    async index({request, response, view}) {
		const parametrizacion = await TblParametrizacion.query()
        .where('id', 1)
        .first()

		return response.status(200).json(parametrizacion);
	}
}

module.exports = TblParametrizacionController
