'use strict'

const Schema = use('Schema')
const Database = use('Database')

class AddNewColumnsToSchema extends Schema {
  up () {
    this.table('tbl_registros_personales',async (table) => {
      const tableName = 'tbl_registros_personales'
      const columns = await Database.schema.raw(`PRAGMA table_info(${tableName})`)
      const existingColumns = columns.map((column) => column.name)

      // Agregar campos uno por uno si no existen
      if (!existingColumns.includes('razon_social_ips')) {
        this.alterTable(tableName, (table) => {
          table.string('razon_social_ips').nullable()
        })
      }

      if (!existingColumns.includes('lengua_propia')) {
        this.alterTable(tableName, (table) => {
          table.string('lengua_propia').nullable()
        })
      }

      if (!existingColumns.includes('tipo_ocupacion')) {
        this.alterTable(tableName, (table) => {
          table.string('tipo_ocupacion').nullable()
        })
      }

      if (!existingColumns.includes('salud_mental')) {
        this.alterTable(tableName, (table) => {
          table.string('salud_mental').nullable()
        })
      }

      if (!existingColumns.includes('conocimiento_salud')) {
        this.alterTable(tableName, (table) => {
          table.string('conocimiento_salud').nullable()
        })
      }

      if (!existingColumns.includes('poblacion_vulnerable')) {
        this.alterTable(tableName, (table) => {
          table.string('poblacion_vulnerable').nullable()
        })
      }

      if (!existingColumns.includes('tipo_discapacidad')) {
        this.alterTable(tableName, (table) => {
          table.string('tipo_discapacidad').nullable()
        })
      }

      if (!existingColumns.includes('tiene_cuidador')) {
        this.alterTable(tableName, (table) => {
          table.boolean('tiene_cuidador').nullable()
        })
      }

      if (!existingColumns.includes('descapacidad_registro_localizacion_caracteri')) {
        this.alterTable(tableName, (table) => {
          table.string('descapacidad_registro_localizacion_caracteri').nullable()
        })
      }

      if (!existingColumns.includes('presento_tos_expectoracion')) {
        this.alterTable(tableName, (table) => {
          table.boolean('presento_tos_expectoracion').nullable()
        })
      }

      if (!existingColumns.includes('fuma')) {
        this.alterTable(tableName, (table) => {
          table.boolean('fuma').nullable()
        })
      }

      if (!existingColumns.includes('hace_cuanto')) {
        this.alterTable(tableName, (table) => {
          table.string('hace_cuanto').nullable()
        })
      }

      if (!existingColumns.includes('cuantos_cigarrillos_diarios')) {
        this.alterTable(tableName, (table) => {
          table.integer('cuantos_cigarrillos_diarios').nullable()
        })
      }

      if (!existingColumns.includes('expocicion_quimicos')) {
        this.alterTable(tableName, (table) => {
          table.boolean('expocicion_quimicos').nullable()
        })
      }

      if (!existingColumns.includes('expocicion_convulsivos')) {
        this.alterTable(tableName, (table) => {
          table.boolean('expocicion_convulsivos').nullable()
        })
      }

      if (!existingColumns.includes('religion')) {
        this.alterTable(tableName, (table) => {
          table.string('religion').nullable()
        })
      }

      if (!existingColumns.includes('consumo_alcohol')) {
        this.alterTable(tableName, (table) => {
          table.boolean('consumo_alcohol').nullable()
        })
      }

      if (!existingColumns.includes('frecuancia_consumo_alcohol')) {
        this.alterTable(tableName, (table) => {
          table.string('frecuancia_consumo_alcohol').nullable()
        })
      }

      if (!existingColumns.includes('hace_cuanto_alcohol')) {
        this.alterTable(tableName, (table) => {
          table.string('hace_cuanto_alcohol').nullable()
        })
      }

      if (!existingColumns.includes('consumo_sustan_psicoactivas')) {
        this.alterTable(tableName, (table) => {
          table.boolean('consumo_sustan_psicoactivas').nullable()
        })
      }

      if (!existingColumns.includes('sustan_psicoactivas')) {
        this.alterTable(tableName, (table) => {
          table.string('sustan_psicoactivas').nullable()
        })
      }

      if (!existingColumns.includes('frecuensia_sustan_psicoactivas')) {
        this.alterTable(tableName, (table) => {
          table.string('frecuensia_sustan_psicoactivas').nullable()
        })
      }

      if (!existingColumns.includes('hace_cuanto_sustan_psicoactivas')) {
        this.alterTable(tableName, (table) => {
          table.string('hace_cuanto_sustan_psicoactivas').nullable()
        })
      }

      if (!existingColumns.includes('planificacion_familiar')) {
        this.alterTable(tableName, (table) => {
          table.boolean('planificacion_familiar').nullable()
        })
      }

      if (!existingColumns.includes('fecha_ultima_citologia')) {
        this.alterTable(tableName, (table) => {
          table.date('fecha_ultima_citologia').nullable()
        })
      }

      if (!existingColumns.includes('fecha_ultima_mestruacion')) {
        this.alterTable(tableName, (table) => {
          table.date('fecha_ultima_mestruacion').nullable()
        })
      }

      if (!existingColumns.includes('sufre_enf_cronica')) {
        this.alterTable(tableName, (table) => {
          table.boolean('sufre_enf_cronica').nullable()
        })
      }

      if (!existingColumns.includes('patologias')) {
        this.alterTable(tableName, (table) => {
          table.string('patologias').nullable()
        })
      }

      if (!existingColumns.includes('alimientacion_lactancia')) {
        this.alterTable(tableName, (table) => {
          table.string('alimientacion_lactancia').nullable()
        })
      }

      if (!existingColumns.includes('frecu_sepillado')) {
        this.alterTable(tableName, (table) => {
          table.boolean('frecu_sepillado').nullable()
        })
      }

      if (!existingColumns.includes('utiliza_crema_dental')) {
        this.alterTable(tableName, (table) => {
          table.boolean('utiliza_crema_dental').nullable()
        })
      }

      if (!existingColumns.includes('ingesta_crema_dental')) {
        this.alterTable(tableName, (table) => {
          table.boolean('ingesta_crema_dental').nullable()
        })
      }

    })
  }

  down () {
    this.table('tbl_registros_personales', (table) => {
      table.dropColumn('razon_social_ips')
      table.dropColumn('lengua_propia')
      table.dropColumn('tipo_ocupacion')
      table.dropColumn('salud_mental')
      table.dropColumn('conocimiento_salud')
      table.dropColumn('poblacion_vulnerable')
      table.dropColumn('tipo_discapacidad')
      table.dropColumn('tiene_cuidador')
      table.dropColumn('descapacidad_registro_localizacion_caracteri')
      table.dropColumn('presento_tos_expectoracion')
      table.dropColumn('fuma')
      table.dropColumn('hace_cuanto')
      table.dropColumn('cuantos_cigarrillos_diarios')
      table.dropColumn('expocicion_quimicos')
      table.dropColumn('expocicion_convulsivos')
      table.dropColumn('religion')
      table.dropColumn('consumo_alcohol')
      table.dropColumn('frecuancia_consumo_alcohol')
      table.dropColumn('hace_cuanto_alcohol')
      table.dropColumn('consumo_sustan_psicoactivas')
      table.dropColumn('sustan_psicoactivas')
      table.dropColumn('frecuensia_sustan_psicoactivas')
      table.dropColumn('hace_cuanto_sustan_psicoactivas')
      table.dropColumn('planificacion_familiar')
      table.dropColumn('fecha_ultima_citologia')
      table.dropColumn('fecha_ultima_mestruacion')
      table.dropColumn('sufre_enf_cronica')
      table.dropColumn('patologias')
      table.dropColumn('alimientacion_lactancia')
      table.dropColumn('frecu_sepillado')
      table.dropColumn('utiliza_crema_dental')
      table.dropColumn('ingesta_crema_dental')
    })
  }
}

module.exports = AddNewColumnsToSchema
