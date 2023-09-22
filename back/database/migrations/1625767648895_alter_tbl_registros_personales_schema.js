'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlterTblRegistrosPersonalesSchema extends Schema {
	up () {
		this.table('tbl_registros_personales', (table) => {
			table.double('signos_vitales_tension_arterial_sistolica').alter()
			table.double('signos_vitales_tension_arterial_diastolica').alter()
		})
	}

	down () {
		this.table('tbl_registros_personales', (table) => {
			table.integer('signos_vitales_tension_arterial_sistolica').alter()
			table.integer('signos_vitales_tension_arterial_diastolica').alter()
		})
	}
}

module.exports = AlterTblRegistrosPersonalesSchema
