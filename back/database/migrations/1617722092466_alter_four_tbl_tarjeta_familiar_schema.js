'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlterFourTblTarjetaFamiliarSchema extends Schema {
	up () {
		this.table('tbl_tarjetas_familiares', (table) => {
			table.boolean('morbilidad_presento_15_dias').notNullable().default(false)
			table.string('morbilidad_presento').nullable()
			table.string('morbilidad_atendieron').nullable()
			table.string('morbilidad_evoluciono').nullable()
		})
	}

	down () {
		this.drop('tbl_tarjetas_familiares')
	}
}

module.exports = AlterFourTblTarjetaFamiliarSchema
