'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlterTblTarjetaFamiliarSchema extends Schema {
	up () {
		this.table('tbl_tarjetas_familiares', (table) => {
			table.string('finalizado');
			table.string('cocinar');
			table.string('estrato_socioeconomico');
			table.string('alumbrado');
		})
	}

	down () {
		this.drop('tbl_tarjetas_familiares')
	}
}

module.exports = AlterTblTarjetaFamiliarSchema
