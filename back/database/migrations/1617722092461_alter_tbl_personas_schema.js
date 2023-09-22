'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlterTblPersonasSchema extends Schema {
  up () {
    this.table('tbl_personas', (table) => {
      table.integer('eps_id').nullable().alter();
    })
  }

  down () {
    this.table('tbl_personas', (table) => {
      table.integer('eps_id').notNullable().alter();
    })
  }
}

module.exports = AlterTblPersonasSchema
