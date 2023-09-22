'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateRelationTblTarjetasFamiliaresMortalidadesTblTarjetaFamiliarSchema extends Schema {
  up () {
    this.table('tbl_tarjetas_familiares_mortalidads', (table) => {
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
    this.table('tbl_tarjetas_familiares_mortalidads', (table) => {
      table.dropForeign('tarjetas_familiares_id')
    })
  }
}

module.exports = CreateRelationTblTarjetasFamiliaresMortalidadesTblTarjetaFamiliarSchema
