'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateRelationTblPersonasTblEpsSchema extends Schema {
  up () {
    this.table('tbl_personas', (table) => {
      table
        .integer('eps_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('tbl_eps')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
        .alter()
    })
  }

  down () {
    this.table('tbl_personas', (table) => {
      table.dropForeign('eps_id')
    })
  }
}

module.exports = CreateRelationTblPersonasTblEpsSchema
