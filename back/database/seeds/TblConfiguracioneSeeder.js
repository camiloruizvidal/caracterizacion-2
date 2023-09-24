'use strict'

/*
|--------------------------------------------------------------------------
| TblConfiguracioneSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class TblConfiguracioneSeeder {
  async run () {
    await Database
    .from('tbl_configuraciones')
    .insert([
      {
        key: 'export_excel_tarjeta_familiar',
        name: 'Exportar Excel Tarjetas Familiar',
        value: {
          'ficha':'Ficha',
          'codigo':'Codigo',
          'puntaje':'Puntaje',
          'rango':'Rango',
          'afiliacion_tipo':'Tipo Afiliacion',
          'nombre_primero':'Nombre Primero',
          'nombre_segundo':'Nombre Segundo',
          'apellido_primero':'Apellido Primero',
          'apellido_segundo':'Apellido Segundo',
          'documento_tipo':'Documento Tipo',
          'documento':'Documento',
          'fecha_nacimiento':'Fecha Nacimiento',
          'eps_nombre':'Eps Nombre',
          'estado_civil':'Estado Civil',
          'familiaridad':'Familiaridad',
          'telefono':'Telefono',
          'tipo_ocupacion':'Tipo ocupacion',
          'nivel':'Nivel',
          'nivel_educativo':'Nivel Educativo',
          'departamento_nombre':'Departamento nombre',
          'municipio_nombre':'Municipio Nombre',
          'corregimiento_nombre':'Corregimiento nombre',
          'vereda_nombre':'Vereda nombre',
          'direccion':'Direccion',
          'areas_endemicas_de_enfermedades_de_salud_publica':'Areas endemicas de enfermedades de salud publica',
          'cabeza_familia':'Cabeza familia',
          'con_letrina_pero_alguien_no_la_usa':'Con letrina pero alguien no la usa',
          'contaminacion_del_agua':'Contaminacion del agua',
          'convivencia_inadecuada_con_animales':'Convivencia inadecuada con animales',
          'donde_toma_agua':'Donde toma agua',
          'accidentes_ofidico':'Accidentes ofidico',
          'anjeos_puertas_y_ventanas':'Anjeos puertas y ventanas',
          'equinos':'Equinos',
          'equinos_cuantos':'Equinos cuantos',
          'equinos_encefalomielitis':'Equinos encefalomielitis',
          'equinos_influenza':'Equinos influenza',
          'equinos_presenta_carnet':'Equinos presenta carnet',
          'equinos_vacunados':'Equinos vacunados',
          'exactitud':'Exactitud',
          'fecha_creacion':'Fecha creacion',
          'fechaproximavisita':'Fechaproximavisita',
          'gatos':'Gatos',
          'gatos_cuantos':'Gatos cuantos',
          'gatos_presenta_carnet':'Gatos presenta carnet',
          'gatos_rabia':'Gatos rabia',
          'gatos_refuerzo_trivalente':'Gatos refuerzo trivalente',
          'gatos_trivalente':'Gatos trivalente',
          'gatos_vacunados':'Gatos vacunados',
          'genero':'Genero',
          'grupos_riesgo_accidente_y_enfermedad_laboral':'Grupos riesgo accidente y enfermedad laboral',
          'grupos_riesgo_alteraciones_nutricionales':'Grupos riesgo alteraciones nutricionales',
          'grupos_riesgo_alteraciones_y_transtornos_de_la_audicion_y_comun':'Grupos riesgo alteraciones y transtornos de la audicion y comun',
          'grupos_riesgo_alteraciones_y_transtornos_de_la_salud_bucal':'Grupos riesgo alteraciones y transtornos de la salud bucal',
          'grupos_riesgo_alteraciones_y_transtornos_visuales':'Grupos riesgo alteraciones y transtornos visuales',
          'grupos_riesgo_cancer':'Grupos riesgo cancer',
          'grupos_riesgo_enferemdad_zoonotica':'Grupos riesgo enferemdad zoonotica',
          'grupos_riesgo_enfermedad_cardiovascular_aterogenica':'Grupos riesgo enfermedad cardiovascular aterogenica',
          'grupos_riesgo_enfermedad_respiratoria_cronica':'Grupos riesgo enfermedad respiratoria cronica',
          'grupos_riesgo_enfermedades_huerfanas':'Grupos riesgo enfermedades huerfanas',
          'grupos_riesgo_enfermedades_infecciosas':'Grupos riesgo enfermedades infecciosas',
          'grupos_riesgo_materno_perinatal':'Grupos riesgo materno perinatal',
          'grupos_riesgo_problemas_de_salud_mental':'Grupos riesgo problemas de salud mental',
          'grupos_riesgo_transtornos_degenerativos_neuropatias_y_enfermeda':'Grupos riesgo transtornos degenerativos neuropatias y enfermeda',
          'grupos_riesgo_trastornos_asociados_al_uso_de_sustancias_psicoac':'Grupos riesgo trastornos asociados al uso de sustancias psicoac',
          'grupos_riesgo_violencia':'Grupos riesgo violencia',
          'iluminacion_adecuada':'Iluminacion adecuada',
          'la_basura_es':'La basura es',
          'latitud':'Latitud',
          'longitud':'Longitud',
          'mala_disposicion_de_plaguicidas':'Mala disposicion de plaguicidas',
          'mala_higiene_en_preparacion_de_alimentos':'Mala higiene en preparacion de alimentos',
          'material_predominante_en_piso_techo_paredes':'Material predominante en piso techo paredes',
          'no_siempre_hierve_el_agua':'No siempre hierve el agua',
          'otros':'Otros',
          'otros_cuantos':'Otros cuantos',
          'otros_notas':'Otros notas',
          'otros_vacunados':'Otros vacunados',
          'pacientecambiodomicilio':'Pacientecambiodomicilio',
          'pacienteportabilidad':'Pacienteportabilidad',
          'parasitos':'Parasitos',
          'perros':'Perros',
          'perros_cuantos':'Perros cuantos',
          'perros_parvo_moquillo':'Perros parvo moquillo',
          'perros_polivalente':'Perros polivalente',
          'perros_presenta_carnet':'Perros presenta_carnet',
          'perros_rabia':'Perros rabia',
          'perros_vacunados':'Perros vacunados',
          'piojos':'Piojos',
          'acaros': 'Acaros',
          'plagas':'Plagas',
          'regimen':'Regimen',
          'reservorios_de_agua':'Reservorios_de_agua',
          'roedores':'Roedores',
          'signos_vitales_frecuencia_cardias':'Signos vitales frecuencia cardias',
          'signos_vitales_frecuencia_respiratoria':'Signos vitales frecuencia respiratoria',
          'signos_vitales_tension_arterial_diastolica':'Signos vitales tension arterial diastolica',
          'signos_vitales_tension_arterial_sistolica':'Signos vitales tension arterial sistolica',
          'usan_plaguicidas':'Usan plaguicidas',
          'uso_de_toldillos':'Uso de toldillos',
          'ventilacion_adecuada':'Ventilacion adecuada',
          'zancudos':'Zancudos',
          'zona':'Zona'
        }
      }
    ])
  }
}

module.exports = TblConfiguracioneSeeder