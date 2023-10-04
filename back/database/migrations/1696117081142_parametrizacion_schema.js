'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ParametrizacionSchema extends Schema {
  up () {
    this.create('tbl_parametrizacion', (table) => {
      table.increments()
      table.string('nombre').nullable()
      table.string('logo').nullable()
      table.string('direccion').nullable()
      table.string('telefono').nullable()
      table.string('documento').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('tbl_parametrizacion')
  }
}

module.exports = ParametrizacionSchema
