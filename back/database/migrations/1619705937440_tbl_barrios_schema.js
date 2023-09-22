'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TblBarriosSchema extends Schema {
  up () {
    this.create('tbl_barrios', (table) => {
      table.increments()
      table.string('nombre')
      table.boolean('active').default(true)
      table.integer('departamento_id')
      .unsigned()
      .references('id')
      .inTable('tbl_departamentos')
      .onUpdate('CASCADE')
      .onDelete('SET NULL')

      table.integer('municipio_id')
      .nullable()
      .unsigned()
      .references('id')
      .inTable('tbl_municipios')
      .onUpdate('CASCADE')
      .onDelete('SET NULL')
      table.timestamps()
    })
  }

  down () {
    this.drop('tbl_barrios')
  }
}

module.exports = TblBarriosSchema
