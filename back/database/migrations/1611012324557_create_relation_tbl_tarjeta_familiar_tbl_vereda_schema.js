'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateRelationTblTarjetaFamiliarTblVeredaSchema extends Schema {
  up () {
    this.table('tbl_tarjetas_familiares', (table) => {
      table
        .integer('vereda_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('tbl_veredas')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
        .alter()
    })
  }

  down () {
    this.table('tbl_tarjetas_familiares', (table) => {
      table.dropForeign('vereda_id')
    })
  }
}

module.exports = CreateRelationTblTarjetaFamiliarTblVeredaSchema
