'use strict'

const Schema = use('Schema')

class AddNewColumnsToSchema extends Schema {
  up () {
    this.table('tbl_registros_personales', (table) => {
      if (!table.hasColumn('razon_social_ips')) {
        table.string('razon_social_ips').nullable()
      }

      if (!table.hasColumn('lengua_propia')) {
        table.string('lengua_propia').nullable()
      }

      if (!table.hasColumn('tipo_ocupacion')) {
        table.string('tipo_ocupacion').nullable()
      }

      if (!table.hasColumn('salud_mental')) {
        table.string('salud_mental').nullable()
      }

      if (!table.hasColumn('conocimiento_salud')) {
        table.string('conocimiento_salud').nullable()
      }

      if (!table.hasColumn('poblacion_vulnerable')) {
        table.string('poblacion_vulnerable').nullable()
      }

      if (!table.hasColumn('tipo_discapacidad')) {
        table.string('tipo_discapacidad').nullable()
      }

      if (!table.hasColumn('tiene_cuidador')) {
        table.boolean('tiene_cuidador').nullable()
      }

      if (!table.hasColumn('descapacidad_registro_localizacion_caracteri')) {
        table.string('descapacidad_registro_localizacion_caracteri').nullable()
      }

      if (!table.hasColumn('presento_tos_expectoracion')) {
        table.boolean('presento_tos_expectoracion').nullable()
      }

      if (!table.hasColumn('fuma')) {
        table.boolean('fuma').nullable()
      }

      if (!table.hasColumn('hace_cuanto')) {
        table.string('hace_cuanto').nullable()
      }

      if (!table.hasColumn('cuantos_cigarrillos_diarios')) {
        table.integer('cuantos_cigarrillos_diarios').nullable()
      }

      if (!table.hasColumn('expocicion_quimicos')) {
        table.boolean('expocicion_quimicos').nullable()
      }

      if (!table.hasColumn('expocicion_convulsivos')) {
        table.boolean('expocicion_convulsivos').nullable()
      }

      if (!table.hasColumn('religion')) {
        table.string('religion').nullable()
      }

      if (!table.hasColumn('consumo_alcohol')) {
        table.boolean('consumo_alcohol').nullable()
      }

      if (!table.hasColumn('frecuancia_consumo_alcohol')) {
        table.string('frecuancia_consumo_alcohol').nullable()
      }

      if (!table.hasColumn('hace_cuanto_alcohol')) {
        table.string('hace_cuanto_alcohol').nullable()
      }

      if (!table.hasColumn('consumo_sustan_psicoactivas')) {
        table.boolean('consumo_sustan_psicoactivas').nullable()
      }

      if (!table.hasColumn('sustan_psicoactivas')) {
        table.string('sustan_psicoactivas').nullable()
      }

      if (!table.hasColumn('frecuensia_sustan_psicoactivas')) {
        table.string('frecuensia_sustan_psicoactivas').nullable()
      }

      if (!table.hasColumn('hace_cuanto_sustan_psicoactivas')) {
        table.string('hace_cuanto_sustan_psicoactivas').nullable()
      }

      if (!table.hasColumn('planificacion_familiar')) {
        table.boolean('planificacion_familiar').nullable()
      }

      if (!table.hasColumn('fecha_ultima_citologia')) {
        table.date('fecha_ultima_citologia').nullable()
      }

      if (!table.hasColumn('fecha_ultima_mestruacion')) {
        table.date('fecha_ultima_mestruacion').nullable()
      }

      if (!table.hasColumn('sufre_enf_cronica')) {
        table.boolean('sufre_enf_cronica').nullable()
      }

      if (!table.hasColumn('patologias')) {
        table.string('patologias').nullable()
      }

      if (!table.hasColumn('alimientacion_lactancia')) {
        table.string('alimientacion_lactancia').nullable()
      }

      if (!table.hasColumn('frecu_sepillado')) {
        table.boolean('frecu_sepillado').nullable()
      }

      if (!table.hasColumn('utiliza_crema_dental')) {
        table.boolean('utiliza_crema_dental').nullable()
      }

      if (!table.hasColumn('ingesta_crema_dental')) {
        table.boolean('ingesta_crema_dental').nullable()
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
