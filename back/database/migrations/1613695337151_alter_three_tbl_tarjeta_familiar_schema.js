'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlterThreeTblTarjetaFamiliarSchema extends Schema {
	up () {
		this.table('tbl_tarjetas_familiares', (table) => {
			table.string('tipo_vivienda').nullable()
			table.string('dimensiones_vivienda').nullable()
			table.string('tenencia_vivienda').nullable()
			table.string('condiciones_vivienda').nullable()
			table.string('material_techo').nullable()
			table.string('material_paredes').nullable()
			table.string('ubicacion_vivienda').nullable()
			table.string('tipo_sanitario').nullable()
			table.integer('habitaciones').nullable()
			table.integer('dormitorios').nullable()
			table.integer('personas_domitorio').nullable()
		})
	}

	down () {
		this.drop('tbl_tarjetas_familiares')
	}
}

module.exports = AlterThreeTblTarjetaFamiliarSchema
