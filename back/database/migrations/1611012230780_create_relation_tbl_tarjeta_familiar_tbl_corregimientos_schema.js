'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateRelationTblTarjetaFamiliarTblCorregimientosSchema extends Schema {
  up () {
    this.table('tbl_tarjetas_familiares', (table) => {
       table
        .integer('corregimiento_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('tbl_corregimientos')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
        .alter()
    })
  }

  down () {
    this.table('tbl_tarjetas_familiares', (table) => {
      table.dropForeign('corregimiento_id')
    })
  }
}

module.exports = CreateRelationTblTarjetaFamiliarTblCorregimientosSchema
