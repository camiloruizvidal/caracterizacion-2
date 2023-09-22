'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TblMunicipiosSchema extends Schema {
  up () {
    this.create('tbl_municipios', (table) => {
      table.increments()
      table.string('nombre')
      table.integer('estado')
      table.integer('departamento_id').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('tbl_municipios')
  }
}

module.exports = TblMunicipiosSchema
