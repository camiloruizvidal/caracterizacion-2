'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TblVeredasSchema extends Schema {
  up () {
    this.create('tbl_veredas', (table) => {
      table.increments()
      table.string('nombre');
      table.timestamps()
    })
  }

  down () {
    this.drop('tbl_veredas')
  }
}

module.exports = TblVeredasSchema
