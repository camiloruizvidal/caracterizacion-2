'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TblEpsSchema extends Schema {
  up () {
    this.create('tbl_eps', (table) => {
      table.increments()
      table.string("nombre")
      table.timestamps()
    })
  }

  down () {
    this.drop('tbl_eps')
  }
}

module.exports = TblEpsSchema
