'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateRelationTblRegistroPersonalTblTarjetaFamiliarSchema extends Schema {
  up () {
    this.table('tbl_registros_personales', (table) => {
      table
        .integer('tarjetas_familiares_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('tbl_tarjetas_familiares')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
        .alter()
    })
  }

  down () {
    this.table('tbl_registros_personales', (table) => {
      table.dropForeign('tarjetas_familiares_id')
    })
  }
}

module.exports = CreateRelationTblRegistroPersonalTblTarjetaFamiliarSchema
