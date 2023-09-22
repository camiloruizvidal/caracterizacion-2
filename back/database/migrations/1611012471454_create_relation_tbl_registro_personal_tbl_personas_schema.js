'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateRelationTblRegistroPersonalTblPersonasSchema extends Schema {
  up () {
    this.table('tbl_registros_personales', (table) => {
      table
        .integer('personas_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('tbl_personas')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
        .alter()
    })
  }

  down () {
    this.table('tbl_registros_personales', (table) => {
      table.dropForeign('personas_id')
    })
  }
}

module.exports = CreateRelationTblRegistroPersonalTblPersonasSchema
