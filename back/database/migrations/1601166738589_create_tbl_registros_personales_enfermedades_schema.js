'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateTblRegistrosPersonalesEnfermedadesSchema extends Schema {
  up () {
    this.create('tbl_registros_personales_enfermedades', (table) => {
      table.increments()
      table.integer('registros_personales_id')
      table.string('codigo')
      table.string('nombre')
      table.timestamps()
    })
  }

  down () {
    this.drop('tbl_registros_personales_enfermedades')
  }
}

module.exports = CreateTblRegistrosPersonalesEnfermedadesSchema
