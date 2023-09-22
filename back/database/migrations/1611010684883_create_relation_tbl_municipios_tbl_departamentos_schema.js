'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateRelationTblMunicipiosTblDepartamentosSchema extends Schema {
  up () {
    this.table('tbl_municipios', (table) => {
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
    this.table('tbl_municipios', (table) => {
        table.dropForeign('departamento_id')
    })
  }
}

module.exports = CreateRelationTblMunicipiosTblDepartamentosSchema
