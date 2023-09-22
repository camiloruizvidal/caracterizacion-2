'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TblDepartamentosSchema extends Schema {
  up () {
    this.create('tbl_departamentos', (table) => {
      table.increments()
      table.string('nombre');
      table.timestamps()
    })
  }

  down () {
    this.drop('tbl_departamentos')
  }
}

module.exports = TblDepartamentosSchema
