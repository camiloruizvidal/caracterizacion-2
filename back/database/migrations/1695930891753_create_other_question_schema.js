'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateOtherQuestionSchema extends Schema {
  up () {
    this.table('tbl_registros_personales', (table) => {
      table.string('tiene_enfermedades_salud_mental', 255).nullable()
    })
  }

  down () {
    this.table('tbl_registros_personales', (table) => {
      table.dropColumn('tiene_enfermedades_salud_mental')
    })
  }
}

module.exports = CreateOtherQuestionSchema
