'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateTblRegistrosPersonalesMedicamentosSchema extends Schema {
  up () {
    this.create('tbl_registros_personales_medicamentos', (table) => {
      table.increments()
      table.integer('registros_personales_id')
      table.string('codigo')
      table.string('nombre')
      table.string('presentacion')
      table.string('fabricante')
      table.integer('cantidad')
      table.integer('cantidad_actual')
      table.date('fecha_entrega')
      table.date('fecha_registro')
      table.timestamps()
    })
  }

  down () {
    this.drop('tbl_registros_personales_medicamentos')
  }
}

module.exports = CreateTblRegistrosPersonalesMedicamentosSchema
