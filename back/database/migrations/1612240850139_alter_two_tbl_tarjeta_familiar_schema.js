'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlterTwoTblTarjetaFamiliarSchema extends Schema {
	up () {
		this.table('tbl_tarjetas_familiares', (table) => {
			table.boolean('pacienteportabilidad').notNullable().default(false).alter();
      		table.boolean('pacientecambiodomicilio').notNullable().default(false).alter();
			table.boolean('iluminacion_adecuada').notNullable().default(false).alter();
      		table.boolean('ventilacion_adecuada').notNullable().default(false).alter();
      		table.boolean('roedores').notNullable().default(false).alter();
      		table.boolean('reservorios_de_agua').notNullable().default(false).alter();
      		table.boolean('anjeos_puertas_y_ventanas').notNullable().default(false).alter();
      		table.boolean('uso_de_toldillos').notNullable().default(false).alter();
      		table.boolean('material_predominante_en_piso_techo_paredes').notNullable().default(false).alter();
      		table.boolean('con_letrina_pero_alguien_no_la_usa').notNullable().default(false).alter();
      		table.boolean('plagas').notNullable().default(false).alter();
      		table.boolean('convivencia_inadecuada_con_animales').notNullable().default(false).alter();
      		table.boolean('mala_disposicion_de_plaguicidas').notNullable().default(false).alter();
      		table.boolean('contaminacion_del_agua').notNullable().default(false).alter();
      		table.boolean('accidentes_ofidico').notNullable().default(false).alter();
      		table.boolean('usan_plaguicidas').notNullable().default(false).alter();
      		table.boolean('no_siempre_hierve_el_agua').notNullable().default(false).alter();
      		table.boolean('areas_endemicas_de_enfermedades_de_salud_publica').notNullable().default(false).alter();
      		table.boolean('mala_higiene_en_preparacion_de_alimentos').notNullable().default(false).alter();
      		table.boolean('piojos').notNullable().default(false).alter();
      		table.boolean('parasitos').notNullable().default(false).alter();
      		table.boolean('acaros').notNullable().default(false).alter();
      		table.boolean('zancudos').notNullable().default(false).alter();
		})
	}

	down () {
		this.drop('tbl_tarjetas_familiares')
	}
}

module.exports = AlterTwoTblTarjetaFamiliarSchema
