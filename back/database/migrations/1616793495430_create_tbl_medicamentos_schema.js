'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TblMedicamentosSchema extends Schema {
  up () {
    this.create('tbl_medicamentos', (table) => {
      table.increments()
      table.string('nombre');
      table.string('codigo');
      table.string('presentacion');
      table.string('fabricante');
      table.timestamps()
    })
  }

  down () {
    this.drop('tbl_medicamentos')
  }
}

module.exports = TblMedicamentosSchema
