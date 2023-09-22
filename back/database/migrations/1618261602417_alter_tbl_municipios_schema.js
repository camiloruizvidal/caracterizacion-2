'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlterTblMunicipiosSchema extends Schema {
  up () {
    this.table('tbl_municipios', (table) => {
      table.float('latitud').nullable()
      table.float('longitud').nullable()
    })
  }

  down () {
    this.table('tbl_municipios', (table) => {
      this.drop('tbl_municipios')
    })
  }
}

module.exports = AlterTblMunicipiosSchema
