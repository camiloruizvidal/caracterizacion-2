'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TblEnfermedadesSchema extends Schema {
  up () {
    this.create('tbl_enfermedades', (table) => {
      table.increments()
      table.string('nombre');
      table.string('codigo');
      table.timestamps()
    })
  }

  down () {
    this.drop('tbl_enfermedades')
  }
}

module.exports = TblEnfermedadesSchema
