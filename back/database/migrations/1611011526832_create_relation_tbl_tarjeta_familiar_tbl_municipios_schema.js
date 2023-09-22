'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateRelationTblTarjetaFamiliarTblMunicipiosSchema extends Schema {
  up () {
    this.table('tbl_tarjetas_familiares', (table) => {
      table
        .integer('municipio_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('tbl_municipios')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
        .alter()
    })
  }

  down () {
    this.table('tbl_tarjetas_familiares', (table) => {
      table.dropForeign('municipio_id')
    })
  }
}

module.exports = CreateRelationTblTarjetaFamiliarTblMunicipiosSchema
