'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateTblConfiguracionesSchema extends Schema {
  up () {
    this.create('tbl_configuraciones', (table) => {
      table.increments()
      table.string('key')
      table.string('name')
      table.json('value')
      table.timestamps()
    })
  }

  down () {
    this.drop('tbl_configuraciones')
  }
}

module.exports = CreateTblConfiguracionesSchema
