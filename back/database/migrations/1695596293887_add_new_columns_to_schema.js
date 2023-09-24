'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddNewColumnsToSchema extends Schema {
  up () {
    this.table('tbl_tarjetas_familiares', (table) => {
      table.text('foto').nullable();
    })
  }

  down () {
    this.table('tbl_tarjetas_familiares', (table) => {
      table.dropColumn('foto');
    })
  }
}

module.exports = AddNewColumnsToSchema
