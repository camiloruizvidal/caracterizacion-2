'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateRelationTblRegistroPersonalesMedicamentosTblRegistroPersonalSchema extends Schema {
  up () {
    this.table('tbl_registros_personales_medicamentos', (table) => {
      table
        .integer('registros_personales_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('tbl_registros_personales')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
        .alter()
    })
  }

  down () {
    this.table('tbl_registros_personales_medicamentos', (table) => {
      table.dropForeign('registros_personales_id')
    })
  }
}

module.exports = CreateRelationTblRegistroPersonalesMedicamentosTblRegistroPersonalSchema
