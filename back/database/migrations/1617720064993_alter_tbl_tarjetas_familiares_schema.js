'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlterTblTarjetasFamiliaresSchema extends Schema {
  up () {
    this.table('tbl_tarjetas_familiares', (table) => {
      table.integer('corregimiento_id').nullable().alter();
      table.integer('vereda_id').nullable().alter();
    })
  }

  down () {
    this.table('tbl_tarjetas_familiares', (table) => {
      table.integer('corregimiento_id').notNullable().alter();
      table.integer('vereda_id').notNullable().alter();
    })
  }
}

module.exports = AlterTblTarjetasFamiliaresSchema
