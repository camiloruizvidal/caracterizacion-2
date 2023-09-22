'use strict'

const tblLogs = use('App/Models/TblLog')

class TblLogController {

	async cargarRegistrosRecibidos ({ response }) {

		let data = await tblLogs.query()
					.select('id','value', 'created_at')
					.where('name', '=', 'registros recibidos')
					.fetch()
		data = Object.values(data)[0].map(value => {
			value.value = JSON.parse(value.value);
			return value;
		})
		return response.sendSuccess(data, 'Lista de logs')
	}
}

module.exports = TblLogController
