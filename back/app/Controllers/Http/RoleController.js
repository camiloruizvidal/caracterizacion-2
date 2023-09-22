'use strict'

let Role = use('App/Models/Role')

class RoleController {
	async index({request, response, view}) {
		const role = await Role.all();

		return response.status(200).json({role: role});
	}
}

module.exports = RoleController
