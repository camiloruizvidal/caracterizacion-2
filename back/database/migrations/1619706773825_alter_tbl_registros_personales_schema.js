'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlterTblRegistrosPersonalesSchema extends Schema {
  up () {
    this.table('tbl_registros_personales', (table) => {
      table.integer('barrio_id')
      .nullable()
      .unsigned()
      .references('id')
      .inTable('tbl_barrios')
      .onUpdate('CASCADE')
      .onDelete('SET NULL')
    })
  }

  down () {
    this.table('tbl_registros_personales', (table) => {
      this.drop('tbl_registros_personales')
    })
  }
}

module.exports = AlterTblRegistrosPersonalesSchema
