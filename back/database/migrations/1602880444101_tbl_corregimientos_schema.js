'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TblCorregimientosSchema extends Schema {
  up () {
    this.create('tbl_corregimientos', (table) => {
      table.increments()
      table.string('nombre');
      table.timestamps()
    })
  }

  down () {
    this.drop('tbl_corregimientos')
  }
}

module.exports = TblCorregimientosSchema
