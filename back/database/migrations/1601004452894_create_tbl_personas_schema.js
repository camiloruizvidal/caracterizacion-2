'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateTblPersonasSchema extends Schema {
  up () {
    this.create('tbl_personas', (table) => {
      table.increments()
      table.boolean('cabeza_familia').nullable();
      table.string('genero').nullable();
      table.string('familiaridad').nullable();
      table.string('documento').nullable();
      table.string('documento_tipo').nullable();
      table.date('fecha_nacimiento').nullable();
      table.string('estado_civil').nullable();
      table.string('nivel_educativo').nullable();
      table.string('tipo_ocupacion').nullable();
      table.string('nombre_primero').nullable();
      table.string('nombre_segundo').nullable();
      table.string('apellido_primero').nullable();
      table.string('apellido_segundo').nullable();
      table.integer('eps_id').nullable();
      table.string('regimen').nullable();
      table.string('afiliacion_tipo').nullable();
      table.string('rango').nullable();
      table.timestamps()
    })
  }

  down () {
    this.drop('tbl_personas')
  }
}

module.exports = CreateTblPersonasSchema
