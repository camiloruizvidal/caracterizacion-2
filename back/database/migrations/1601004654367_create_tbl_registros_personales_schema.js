'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateTblRegistrosPersonalesSchema extends Schema {
	up () {
		this.create('tbl_registros_personales', (table) => {
			table.increments()
			table.integer('personas_id')
			table.integer('tarjetas_familiares_id')
			table.integer('signos_vitales_tension_arterial_sistolica').nullable()
			table.integer('signos_vitales_tension_arterial_diastolica').nullable()
			table.integer('signos_vitales_frecuencia_cardias').nullable()
			table.integer('signos_vitales_frecuencia_respiratoria').nullable()



			table.boolean('grupos_riesgo_accidente_y_enfermedad_laboral').nullable();
			table.boolean('grupos_riesgo_alteraciones_nutricionales').nullable();
			table.boolean('grupos_riesgo_alteraciones_y_transtornos_de_la_audicion_y_comunicacion').nullable();
			table.boolean('grupos_riesgo_alteraciones_y_transtornos_de_la_salud_bucal').nullable();
			table.boolean('grupos_riesgo_alteraciones_y_transtornos_visuales').nullable();
			table.boolean('grupos_riesgo_cancer').nullable();
			table.boolean('grupos_riesgo_enferemdad_zoonotica').nullable();
			table.boolean('grupos_riesgo_enfermedad_cardiovascular_aterogenica').nullable();
			table.boolean('grupos_riesgo_enfermedad_respiratoria_cronica').nullable();
			table.boolean('grupos_riesgo_enfermedades_huerfanas').nullable();
			table.boolean('grupos_riesgo_enfermedades_infecciosas').nullable();
			table.boolean('grupos_riesgo_materno_perinatal').nullable();
			table.boolean('grupos_riesgo_problemas_de_salud_mental').nullable();
			table.boolean('grupos_riesgo_transtornos_degenerativos_neuropatias_y_enfermedades_autoinmunes').nullable();
			table.boolean('grupos_riesgo_trastornos_asociados_al_uso_de_sustancias_psicoactivas').nullable();
			table.boolean('grupos_riesgo_violencia').nullable();
			table.boolean('salud_infantil_muertes_en_menores_de_1_anno').nullable()
			table.boolean('salud_infantil_desnutricion').nullable()
			table.boolean('salud_infantil_animalia_congenita').nullable()
			table.boolean('salud_infantil_discapacidad').nullable()
			table.boolean('salud_infantil_embarazo_producto_de_abuso').nullable()
			table.boolean('salud_infantil_recien_nacido_menor_de_28_dias').nullable()
			table.boolean('salud_infantil_recien_nacido_parto_domiciliario').nullable()
			table.boolean('salud_infantil_vacunas_incompletas').nullable()
			table.boolean('salud_infantil_ninnos_sin_c_y_d').nullable()
			table.boolean('salud_infantil_ninno_sin_evaluacion_odontologica').nullable()
			table.boolean('salud_infantil_ninno_menor_a_5_annos_sin_estructura_aiepi').nullable()
			table.boolean('salud_infantil_problemas_visuales_y_auditivos').nullable()
			table.boolean('salud_infantil_caries').nullable()
			table.boolean('salud_infantil_desercion_escolar').nullable()
			table.boolean('salud_infantil_violacion').nullable()
			table.boolean('salud_infantil_violencia_sexual').nullable()
			table.boolean('salud_infantil_maltrato_infantil').nullable()
			table.boolean('salud_infantil_abandono').nullable()

			table.boolean('enfermedades_no_transmisibles_hta').nullable()
			table.boolean('enfermedades_no_transmisibles_diabetes').nullable()
			table.boolean('enfermedades_no_transmisibles_escasa_adherencia_tratamiento_medico').nullable()
			table.boolean('enfermedades_no_transmisibles_compilacion_de_organos_blancos').nullable()
			table.boolean('enfermedades_no_transmisibles_tbc').nullable()
			table.boolean('enfermedades_no_transmisibles_sin_marca_bcg_en_el_hombro').nullable()
			table.boolean('enfermedades_no_transmisibles_enfermedades_de_la_piel').nullable()
			table.boolean('enfermedades_no_transmisibles_sintomas_respiratorios').nullable()
			table.boolean('enfermedades_no_transmisibles_hombre_mayor_de_50_annos_con_evaluacion_de_prostata').nullable()
			table.boolean('enfermedades_no_transmisibles_sin_evaluacion_nutricional').nullable()
			table.boolean('enfermedades_no_transmisibles_mujer_mayor_de_45_annos_sin_perfil_lipodica').nullable()
			table.boolean('enfermedades_no_transmisibles_no_adscrito_al_programa_adulto_mayor').nullable()
			table.boolean('enfermedades_no_transmisibles_discapacidad_psicomotora').nullable()
			table.boolean('enfermedades_no_transmisibles_abandono').nullable()

			table.boolean('salud_mental_enfermedad_mental_y_trastorno_represivo_y_retardo').nullable()
			table.boolean('salud_mental_sintomas_de_suicidio').nullable()
			table.boolean('salud_mental_retardo_psicosocial').nullable()
			table.boolean('salud_mental_victima_de_violencia').nullable()
			table.boolean('salud_mental_problemas_de_conducta').nullable()

			table.boolean('salud_sexual_reproductiva_embarazo').nullable()
			table.boolean('salud_sexual_reproductiva_gestante_sin_cpn').nullable()
			table.boolean('salud_sexual_reproductiva_gestante_sin_suplemento_acido_folio_y_hierro').nullable()
			table.boolean('salud_sexual_reproductiva_gestante_sin_psicoprofilaxis').nullable()
			table.boolean('salud_sexual_reproductiva_embarazo_producto_de_abuso_sexual').nullable()
			table.boolean('salud_sexual_reproductiva_enfermedad_de_transmision_sexual').nullable()
			table.boolean('salud_sexual_reproductiva_conducta_sexual_de_riesgo').nullable()
			table.boolean('salud_sexual_reproductiva_sin_citologia').nullable()

			table.boolean('nutricion_desnutricion').nullable()
			table.boolean('nutricion_discapacidad_psicomotora').nullable()
			table.boolean('nutricion_enfermedades_gastrointestinales').nullable()

			table.boolean('salud_oral_enfermedades_de_la_cavidad_oral').nullable()
			table.boolean('salud_oral_tratamientos_odontologicos_sin_terminar').nullable()
			table.boolean('salud_oral_pacientes_desdentados').nullable()
			table.boolean('salud_oral_sin_evaluacion_odontologica').nullable()
			table.boolean('salud_oral_no_higiene_oral').nullable()
			table.text('otros_notas').nullable()

			table.timestamps()
		})
	}

	down () {
		this.drop('tbl_registros_personales')
	}
}

module.exports = CreateTblRegistrosPersonalesSchema
