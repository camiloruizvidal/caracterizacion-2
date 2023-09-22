'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateTblTarjetasFamiliaresMortalidadSchema extends Schema {
  up () {
    this.create('tbl_tarjetas_familiares_mortalidads', (table) => {
      table.increments()
      table.integer('tarjetas_familiares_id');
      table.string('nombre_primero')
      table.string('nombre_segundo')
      table.string('apellido_primero')
      table.string('apellido_segundo')
      table.date('nacimiento')
      table.date('fallecimiento')
      table.text('causa')
      table.timestamps()
    })
  }

  down () {
    this.drop('tbl_tarjetas_familiares_mortalidads')
  }
}

module.exports = CreateTblTarjetasFamiliaresMortalidadSchema
