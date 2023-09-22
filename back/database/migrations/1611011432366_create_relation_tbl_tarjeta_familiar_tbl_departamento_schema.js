'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateRelationTblTarjetaFamiliarTblDepartamentoSchema extends Schema {
  up () {
    this.table('tbl_tarjetas_familiares', (table) => {
      table
        .integer('departamento_id')
        .nullable()
        .unsigned()
        .references('id')
        .inTable('tbl_departamentos')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
        .alter()
    })
  }

  down () {
    this.table('tbl_tarjetas_familiares', (table) => {
      table.dropForeign('departamento_id')
    })
  }
}

module.exports = CreateRelationTblTarjetaFamiliarTblDepartamentoSchema
