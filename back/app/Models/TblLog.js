'use strict'

const Model = use('Model')

class TblLog extends Model {
	static get table () {
		return 'tbl_logs'
	}
}

module.exports = TblLog
