'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateOtherQuestionSchema extends Schema {
  up () {
    this.table('tbl_registros_personales', (table) => {
      table.string('tiene_enfermedades_salud_mental', 255).nullable();
      table.boolean('esta_empleado_actualmente').defaultTo(false);
      table.integer('talla').nullable();
      table.integer('peso').nullable();
    })
  }

  down () {
    this.table('tbl_registros_personales', (table) => {
      table.dropColumn('tiene_enfermedades_salud_mental');
      table.dropColumn('esta_empleado_actualmente');
      table.dropColumn('talla');
      table.dropColumn('peso');

    })
  }
}

module.exports = CreateOtherQuestionSchema
