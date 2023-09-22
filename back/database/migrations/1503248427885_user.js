'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('username', 80).notNullable().unique()
      table.string('nombre_primero').notNullable()
      table.string('nombre_segundo')
      table.string('apellido_primero').notNullable()
      table.string('apellido_segundo')
      table.string('documento').notNullable().unique()
      table.string('email', 254).notNullable()
      table.string('password', 60).notNullable()
      table.integer('rol_id')
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
