'use strict'

const Database = use('Database');
let TblRegistrosPersonale = use('App/Models/TblRegistrosPersonale')
let TblTarjetaFamiliar = use('App/Models/TblTarjetasFamiliare');
let TblTarjetasFamiliaresMortalidad = use('App/Models/TblTarjetasFamiliaresMortalidad');

let TblRegistroPersonalesEnfermedade = use('App/Models/TblRegistroPersonalesEnfermedade')
let TblRegistroPersonalesMedicamento = use('App/Models/TblRegistroPersonalesMedicamento')
class TblTarjetaController {

	async index ({ request, response})
	{

		const page = request.get().page || 1
		const perPage = request.get().perpage || 10
		const query = TblTarjetaFamiliar.query()

		const data = await query
			.with('tbl_registros_personales', (builder) => {
				builder.select('id', 'personas_id', 'tarjetas_familiares_id')
			})
			.with('tbl_departamento')
			.with('tbl_municipio')
			.select('id', 'codigo', 'departamento_id','municipio_id','zona', 'created_at')
			.paginate(page, perPage)

		return response.sendSuccess(data, 'Listado de Tarjetas Familiares')
	}

	async saveTarjeta(request)
	{
		let data =null;
		let search = await Database.from('tbl_tarjetas_familiares')
			.where('codigo', request.input('codigo'))
			.first()

		if(typeof search =='undefined') {
			data = new TblTarjetaFamiliar();
		} else {
			data = await TblTarjetaFamiliar.find(search.id)
		}

		data.codigo = request.input('codigo')
		data.ficha = request.input('ficha')
		data.finalizado = request.input('finalizado')
		data.nivel = request.input('nivel')
		data.puntaje = request.input('puntaje')
		data.pacienteportabilidad = request.input('pacienteportabilidad')
		data.pacientecambiodomicilio = request.input('pacientecambiodomicilio')
		data.zona = request.input('zona')
		data.departamento_id = request.input('departamento')
		data.municipio_id = request.input('municipio')
		data.corregimiento_id = request.input('corregimiento')
		data.vereda_id = request.input('vereda')
		data.telefono = request.input('telefono')
		data.direccion = request.input('direccion')
		data.tipo_vivienda = request.input('vivienda_tipo')
		data.dimensiones_vivienda = request.input('vivienda_mide')
		data.tenencia_vivienda = request.input('vivienda_tenencia')
		data.tipo_sanitario = request.input('sanitario')
		data.condiciones_vivienda = request.input('vivienda_')
		data.ubicacion_vivienda = request.input('vivienda_ubicada')
		data.material_techo = request.input('techo')
		data.material_paredes = request.input('paredes')
		data.habitaciones = request.input('numero_habitaciones')
		data.dormitorios = request.input('numero_dormitorios')
		data.personas_domitorio = request.input('personas_dormitorio')
		data.fechaproximavisita = new Date(request.input('fechaProximaVisita'))
		data.longitud = request.input('longitud')
		data.latitud = request.input('latitud')
		data.exactitud = request.input('exactitud')
		data.gatos = request.input('gatos')
		data.gatos_cuantos = request.input('gatos_cuantos')
		data.gatos_vacunados = request.input('gatos_vacunados')
		data.gatos_trivalente = request.input('gatos_trivalente')
		data.gatos_refuerzo_trivalente = request.input('gatos_refuerzo_trivalente')
		data.gatos_rabia = request.input('gatos_rabia')
		data.gatos_presenta_carnet = request.input('gatos_presenta_carnet')
		data.perros = request.input('perros')
		data.perros_cuantos = request.input('perros_cuantos')
		data.perros_vacunados = request.input('perros_vacunados')
		data.perros_parvo_moquillo = request.input('perros_parvo_moquillo')
		data.perros_polivalente = request.input('perros_polivalente')
		data.perros_rabia = request.input('perros_rabia')
		data.perros_presenta_carnet = request.input('perros_presenta_carnet')
		data.equinos = request.input('equinos')
		data.equinos_cuantos = request.input('equinos_cuantos')
		data.equinos_vacunados = request.input('equinos_vacunados')
		data.equinos_encefalomielitis = request.input('equinos_encefalomielitis')
		data.equinos_influenza = request.input('equinos_influenza')
		data.equinos_presenta_carnet = request.input('equinos_presenta_carnet')
		data.otros = request.input('otros')
		data.otros_cuantos = request.input('otros_cuantos')
		data.otros_vacunados = request.input('otros_vacunados')
		data.donde_toma_agua = request.input('donde_toma_agua')
		data.la_basura_es = request.input('la_basura_es')
		data.ventilacion_adecuada = request.input('ventilacion_adecuada')
		data.iluminacion_adecuada = request.input('iluminacion_adecuada')
		data.roedores = request.input('roedores')
		data.cocinar = request.input('cocinar')
		data.reservorios_de_agua = request.input('reservorios_de_agua')
		data.estrato_socioeconomico = request.input('estrato_socioeconomico')
		data.anjeos_puertas_y_ventanas = request.input('anjeos_puertas_y_ventanas')
		data.uso_de_toldillos = request.input('uso_de_toldillos')
		data.con_letrina_pero_alguien_no_la_usa = request.input('con_letrina_pero_alguien_no_la_usa')
		data.plagas = request.input('plagas')
		data.convivencia_inadecuada_con_animales = request.input('convivencia_inadecuada_con_animales')
		data.mala_disposicion_de_plaguicidas = request.input('mala_disposicion_de_plaguicidas')
		data.contaminacion_del_agua = request.input('contaminacion_del_agua')
		data.accidentes_ofidico = request.input('accidentes_ofidico')
		data.alumbrado = request.input('alumbrado')
		data.usan_plaguicidas = request.input('usan_plaguicidas')
		data.no_siempre_hierve_el_agua = request.input('no_siempre_hierve_el_agua')
		data.areas_endemicas_de_enfermedades_de_salud_publica = request.input('areas_endemicas_de_enfermedades_de_salud_publica')
		data.mala_higiene_en_preparacion_de_alimentos = request.input('mala_higiene_en_preparacion_de_alimentos')
		data.piojos = request.input('piojos')
		data.parasitos = request.input('parasitos')
		data.acaros = request.input('acaros')
		data.zancudos = request.input('zancudos')
		await data.save();
		this.saveMortalidad(request.input('mortalidad'),data.id)
		return data.id;
	}

	async saveMortalidad(data,id_tarjetaFamiliar)
	{
		data.forEach((value) => {
			let mortalidad = new TblTarjetasFamiliaresMortalidad();
			mortalidad.tarjetas_familiares_id = id_tarjetaFamiliar;
			mortalidad.nombre_primero = value.nombre_primero.trim() == ''?null:value.nombre_primero;
			mortalidad.nombre_segundo = value.nombre_segundo.trim() == ''?null:value.nombre_segundo;
			mortalidad.apellido_primero = value.apellido_primero.trim() == ''?null:value.apellido_primero;
			mortalidad.apellido_segundo = value.apellido_segundo.trim() == ''?null:value.apellido_segundo;
			mortalidad.nacimiento = value.nacimiento.trim() == ''?null:value.nacimiento;
			mortalidad.fallecimiento = value.fallecimiento.trim() == ''?null:value.fallecimiento;
			mortalidad.causa = value.causa.trim() == ''?null:value.causa;
			mortalidad.save();
		})
	}

	async saveRegister(value,id_persona,id_tarjetaFamiliar,request)
	{
		let register = null;
		let search = await Database
		.from('tbl_registros_personales')
		.where('personas_id', id_persona)
		.where('tarjetas_familiares_id', id_tarjetaFamiliar)
		.first()
		if(typeof search =='undefined') {
			register = new TblRegistrosPersonale();
		} else {
			register = await TblRegistrosPersonale.find(search.id)
		}
		register.signos_vitales_tension_arterial_sistolica = (value.signos_vitales_tension_arterial_sistolica.trim()  === '')?null:value.signos_vitales_tension_arterial_sistolica
		register.signos_vitales_tension_arterial_diastolica = (value.signos_vitales_tension_arterial_diastolica.trim()  === '')?null:value.signos_vitales_tension_arterial_diastolica
		register.signos_vitales_frecuencia_cardias = (value.signos_vitales_frecuencia_cardias.trim()  === '')?null:value.signos_vitales_frecuencia_cardias
		register.signos_vitales_frecuencia_respiratoria = (value.signos_vitales_frecuencia_respiratoria.trim()  === '')?null:value.signos_vitales_frecuencia_respiratoria
		register.grupos_riesgo_accidente_y_enfermedad_laboral = value.grupos_riesgo_accidente_y_enfermedad_laboral;
		register.grupos_riesgo_alteraciones_nutricionales = value.grupos_riesgo_alteraciones_nutricionales;
		register.grupos_riesgo_alteraciones_y_transtornos_de_la_audicion_y_comunicacion = value.grupos_riesgo_alteraciones_y_transtornos_de_la_audicion_y_comunicacion;
		register.grupos_riesgo_alteraciones_y_transtornos_de_la_salud_bucal = value.grupos_riesgo_alteraciones_y_transtornos_de_la_salud_bucal;
		register.grupos_riesgo_alteraciones_y_transtornos_visuales = value.grupos_riesgo_alteraciones_y_transtornos_visuales;
		register.grupos_riesgo_cancer = value.grupos_riesgo_cancer;
		register.grupos_riesgo_enferemdad_zoonotica = value.grupos_riesgo_enferemdad_zoonotica;
		register.grupos_riesgo_enfermedad_cardiovascular_aterogenica = value.grupos_riesgo_enfermedad_cardiovascular_aterogenica;
		register.grupos_riesgo_enfermedad_respiratoria_cronica = value.grupos_riesgo_enfermedad_respiratoria_cronica;
		register.grupos_riesgo_enfermedades_huerfanas = value.grupos_riesgo_enfermedades_huerfanas;
		register.grupos_riesgo_enfermedades_infecciosas = value.grupos_riesgo_enfermedades_infecciosas;
		register.grupos_riesgo_materno_perinatal = value.grupos_riesgo_materno_perinatal;
		register.grupos_riesgo_problemas_de_salud_mental = value.grupos_riesgo_problemas_de_salud_mental;
		register.grupos_riesgo_transtornos_degenerativos_neuropatias_y_enfermedades_autoinmunes = value.grupos_riesgo_transtornos_degenerativos_neuropatias_y_enfermedades_autoinmunes;
		register.grupos_riesgo_trastornos_asociados_al_uso_de_sustancias_psicoactivas = value.grupos_riesgo_trastornos_asociados_al_uso_de_sustancias_psicoactivas;
		register.grupos_riesgo_violencia = value.grupos_riesgo_violencia;
		register.enfermedades_cronicas_no_transmisibles_cancerenfermedades_croni = value.enfermedades_cronicas_no_transmisibles_cancerenfermedades_croni;
		register.enfermedades_cronicas_no_transmisibles_enfermedad_pulmonar_cron = value.enfermedades_cronicas_no_transmisibles_enfermedad_pulmonar_cron;
		register.enfermedades_cronicas_no_transmisibles_diabetes_mellitus_tipo_2 = value.enfermedades_cronicas_no_transmisibles_diabetes_mellitus_tipo_2;
		register.infancia_0_11_asiste_programa_crecimiento_desarrollo = value.infancia_0_11_asiste_programa_crecimiento_desarrollo;
		register.infancia_0_11_recibio_lactancia_materna_exclusiva_6_meses = value.infancia_0_11_recibio_lactancia_materna_exclusiva_6_meses;
		register.infancia_0_11_presenta_carne_vacunas = value.infancia_0_11_presenta_carne_vacunas;
		register.infancia_0_11_cuenta_esquema_vacunacion_completo = value.infancia_0_11_cuenta_esquema_vacunacion_completo;
		register.infancia_0_11_sennales_evidente_maltrato = value.infancia_0_11_sennales_evidente_maltrato;
		register.infancia_0_11_recibe_micronutrientes = value.infancia_0_11_recibe_micronutrientes;
		register.infancia_0_11_hizo_examen_agudeza_visual = value.infancia_0_11_hizo_examen_agudeza_visual;
		register.infancia_0_11_asistio_consulta_odontologica = value.infancia_0_11_asistio_consulta_odontologica;
		register.infancia_0_11_fue_desparacitado = value.infancia_0_11_fue_desparacitado;
		register.infancia_0_11_presenta_alteracion_enfermedad = value.infancia_0_11_presenta_alteracion_enfermedad;
		register.infancia_0_11_presenta_alteracion_enfermedad_cual = value.infancia_0_11_presenta_alteracion_enfermedad_cual;
		register.adolecencia_12_17_asiste_control_programa_adolescente = value.adolecencia_12_17_asiste_control_programa_adolescente;
		register.adolecencia_12_17_examen_hemoglobina = value.adolecencia_12_17_examen_hemoglobina;
		register.adolecencia_12_17_examen_agudeza_visual = value.adolecencia_12_17_examen_agudeza_visual;
		register.adolecencia_12_17_alteracion_enfermedad = value.adolecencia_12_17_alteracion_enfermedad;
		register.adolecencia_12_17_asistio_consulta_odontológica = value.adolecencia_12_17_asistio_consulta_odontológica;
		register.adolecencia_12_17_aplicado_sellantes = value.adolecencia_12_17_aplicado_sellantes;
		register.adolecencia_12_17_desparasitado = value.adolecencia_12_17_desparasitado;
		register.adolecencia_12_17_sennal_maltrato = value.adolecencia_12_17_sennal_maltrato;
		register.adolecencia_12_17_planificacion_familiar = value.adolecencia_12_17_planificacion_familiar;
		register.adolecencia_12_17_alteracion_enfermedad_cual = value.adolecencia_12_17_alteracion_enfermedad_cual;
		register.juventud_adultez_18_59_control_joven = value.juventud_adultez_18_59_control_joven;
		register.juventud_adultez_18_59_asiste_consulta_odontologica = value.juventud_adultez_18_59_asiste_consulta_odontologica;
		register.juventud_adultez_18_59__citologia = value.juventud_adultez_18_59__citologia;
		register.juventud_adultez_18_59_examen_mama = value.juventud_adultez_18_59_examen_mama;
		register.juventud_adultez_18_59_mamografia = value.juventud_adultez_18_59_mamografia;
		register.juventud_adultez_18_59_examen_antigeno = value.juventud_adultez_18_59_examen_antigeno;
		register.juventud_adultez_18_59_tacto_rectal = value.juventud_adultez_18_59_tacto_rectal;
		register.juventud_adultez_18_59_examen_materia_fecal = value.juventud_adultez_18_59_examen_materia_fecal;
		register.juventud_adultez_18_59_alteracion_enfermedad = value.juventud_adultez_18_59_alteracion_enfermedad;
		register.juventud_adultez_18_59_examen_sangre_riesgo_cardiovascular = value.juventud_adultez_18_59_examen_sangre_riesgo_cardiovascular;
		register.juventud_adultez_18_59_programa_planificacion_familiar = value.juventud_adultez_18_59_programa_planificacion_familiar;
		register.juventud_adultez_18_59__metodos_planificacion_familiar = value.juventud_adultez_18_59__metodos_planificacion_familiar;
		register.juventud_adultez_18_59__victima_violencia = value.juventud_adultez_18_59__victima_violencia;
		register.juventud_adultez_18_59_alteracion_enfermedad_cual = value.juventud_adultez_18_59_alteracion_enfermedad_cual;
		register.vejez_mayor_60_asiste_control_adulto_mayor = value.vejez_mayor_60_asiste_control_adulto_mayor;
		register.vejez_mayor_60_consulta_odontologica = value.vejez_mayor_60_consulta_odontologica;
		register.vejez_mayor_60_citologia = value.vejez_mayor_60_citologia;
		register.vejez_mayor_60_examen_mama = value.vejez_mayor_60_examen_mama;
		register.vejez_mayor_60__mamografia = value.vejez_mayor_60__mamografia;
		register.vejez_mayor_60_examen__antigeno = value.vejez_mayor_60_examen__antigeno;
		register.vejez_mayor_60_tacto_rectal = value.vejez_mayor_60_tacto_rectal;
		register.vejez_mayor_60_examen_materia_fecal = value.vejez_mayor_60_examen_materia_fecal;
		register.vejez_mayor_60_examen_sangre_cardiovascular = value.vejez_mayor_60_examen_sangre_cardiovascular;
		register.vejez_mayor_60_asiste_programa_planificacion_familiar = value.vejez_mayor_60_asiste_programa_planificacion_familiar;
		register.vejez_mayor_60_utiliza_metodos_planificacion_familiar = value.vejez_mayor_60_utiliza_metodos_planificacion_familiar;
		register.vejez_mayor_60_victima_violencia = value.vejez_mayor_60_victima_violencia;
		register.mujer_embaraza_asiste_controles_prenatales = value.mujer_embaraza_asiste_controles_prenatales;
		register.mujer_embaraza_examenes_sangre = value.mujer_embaraza_examenes_sangre;
		register.mujer_embaraza_ecografias = value.mujer_embaraza_ecografias;
		register.mujer_embaraza_multivitaminicos = value.mujer_embaraza_multivitaminicos;
		register.mujer_embaraza_curso_maternidad = value.mujer_embaraza_curso_maternidad;
		register.mujer_embaraza_embarazo_alto_riesgo = value.mujer_embaraza_embarazo_alto_riesgo;
		register.recien_nacido_0_5_dias_parto = value.recien_nacido_0_5_dias_parto;
		register.recien_nacido_0_5_dias_atendio_parto = value.recien_nacido_0_5_dias_atendio_parto;
		register.recien_nacido_0_5_dias_aplicaron_vacunas_bebe = value.recien_nacido_0_5_dias_aplicaron_vacunas_bebe;
		register.recien_nacido_0_5_dias_asistio_control_recien_nacido = value.recien_nacido_0_5_dias_asistio_control_recien_nacido;
		register.recien_nacido_0_5_dias__certificado_recien_nacido = value.recien_nacido_0_5_dias__certificado_recien_nacido;
		register.promocion_salud_prevencion_recibio_educacion_salud = value.promocion_salud_prevencion_recibio_educacion_salud;
		register.promocion_salud_prevencion_aplica_demanda_inducida = value.promocion_salud_prevencion_aplica_demanda_inducida;
		register.promocion_salud_prevencion_orientaciones_salud_visita = value.promocion_salud_prevencion_orientaciones_salud_visita;
		register.otros_notas = value.otros_notas;
		register.personas_id = id_persona;
		register.tarjetas_familiares_id = id_tarjetaFamiliar;
		register.salud_infantil_muertes_en_menores_de_1_anno = value.salud_infantil_muertes_en_menores_de_1_anno
		register.salud_infantil_desnutricion = value.salud_infantil_desnutricion
		register.salud_infantil_animalia_congenita = value.salud_infantil_animalia_congenita
		register.salud_infantil_discapacidad = value.salud_infantil_discapacidad
		register.salud_infantil_embarazo_producto_de_abuso = value.salud_infantil_embarazo_producto_de_abuso
		register.salud_infantil_recien_nacido_menor_de_28_dias = value.salud_infantil_recien_nacido_menor_de_28_dias
		register.salud_infantil_recien_nacido_parto_domiciliario = value.salud_infantil_recien_nacido_parto_domiciliario
		register.salud_infantil_vacunas_incompletas = value.salud_infantil_vacunas_incompletas
		register.salud_infantil_ninnos_sin_c_y_d = value.salud_infantil_ninnos_sin_c_y_d
		register.salud_infantil_ninno_sin_evaluacion_odontologica = value.salud_infantil_ninno_sin_evaluacion_odontologica
		register.salud_infantil_ninno_menor_a_5_annos_sin_estructura_aiepi = value.salud_infantil_ninno_menor_a_5_annos_sin_estructura_aiepi
		register.salud_infantil_problemas_visuales_y_auditivos = value.salud_infantil_problemas_visuales_y_auditivos
		register.salud_infantil_caries = value.salud_infantil_caries
		register.salud_infantil_desercion_escolar = value.salud_infantil_desercion_escolar
		register.salud_infantil_violacion = value.salud_infantil_violacion
		register.salud_infantil_violencia_sexual = value.salud_infantil_violencia_sexual
		register.salud_infantil_maltrato_infantil = value.salud_infantil_maltrato_infantil
		register.salud_infantil_abandono = value.salud_infantil_abandono
		register.enfermedades_no_transmisibles_hta = value.enfermedades_no_transmisibles_hta
		register.enfermedades_no_transmisibles_diabetes = value.enfermedades_no_transmisibles_diabetes
		register.enfermedades_no_transmisibles_escasa_adherencia_tratamiento_medico = value.enfermedades_no_transmisibles_escasa_adherencia_tratamiento_medico
		register.enfermedades_no_transmisibles_compilacion_de_organos_blancos = value.enfermedades_no_transmisibles_compilacion_de_organos_blancos
		register.enfermedades_no_transmisibles_tbc = value.enfermedades_no_transmisibles_tbc
		register.enfermedades_no_transmisibles_sin_marca_bcg_en_el_hombro = value.enfermedades_no_transmisibles_sin_marca_bcg_en_el_hombro
		register.enfermedades_no_transmisibles_enfermedades_de_la_piel = value.enfermedades_no_transmisibles_enfermedades_de_la_piel
		register.enfermedades_no_transmisibles_sintomas_respiratorios = value.enfermedades_no_transmisibles_sintomas_respiratorios
		register.enfermedades_no_transmisibles_hombre_mayor_de_50_annos_con_evaluacion_de_prostata = value.enfermedades_no_transmisibles_hombre_mayor_de_50_annos_con_evaluacion_de_prostata
		register.enfermedades_no_transmisibles_sin_evaluacion_nutricional = value.enfermedades_no_transmisibles_sin_evaluacion_nutricional
		register.enfermedades_no_transmisibles_mujer_mayor_de_45_annos_sin_perfil_lipodica = value.enfermedades_no_transmisibles_mujer_mayor_de_45_annos_sin_perfil_lipodica
		register.enfermedades_no_transmisibles_no_adscrito_al_programa_adulto_mayor = value.enfermedades_no_transmisibles_no_adscrito_al_programa_adulto_mayor
		register.enfermedades_no_transmisibles_discapacidad_psicomotora = value.enfermedades_no_transmisibles_discapacidad_psicomotora
		register.enfermedades_no_transmisibles_abandono = value.enfermedades_no_transmisibles_abandono
		register.salud_mental_enfermedad_mental_y_trastorno_represivo_y_retardo = value.salud_mental_enfermedad_mental_y_trastorno_represivo_y_retardo
		register.salud_mental_sintomas_de_suicidio = value.salud_mental_sintomas_de_suicidio
		register.salud_mental_retardo_psicosocial = value.salud_mental_retardo_psicosocial
		register.salud_mental_victima_de_violencia = value.salud_mental_victima_de_violencia
		register.salud_mental_problemas_de_conducta = value.salud_mental_problemas_de_conducta
		register.salud_sexual_reproductiva_embarazo = value.salud_sexual_reproductiva_embarazo
		register.salud_sexual_reproductiva_gestante_sin_cpn = value.salud_sexual_reproductiva_gestante_sin_cpn
		register.salud_sexual_reproductiva_gestante_sin_suplemento_acido_folio_y_hierro = value.salud_sexual_reproductiva_gestante_sin_suplemento_acido_folio_y_hierro
		register.salud_sexual_reproductiva_gestante_sin_psicoprofilaxis = value.salud_sexual_reproductiva_gestante_sin_psicoprofilaxis
		register.salud_sexual_reproductiva_embarazo_producto_de_abuso_sexual = value.salud_sexual_reproductiva_embarazo_producto_de_abuso_sexual
		register.salud_sexual_reproductiva_enfermedad_de_transmision_sexual = value.salud_sexual_reproductiva_enfermedad_de_transmision_sexual
		register.salud_sexual_reproductiva_conducta_sexual_de_riesgo = value.salud_sexual_reproductiva_conducta_sexual_de_riesgo
		register.salud_sexual_reproductiva_sin_citologia = value.salud_sexual_reproductiva_sin_citologia
		register.nutricion_desnutricion = value.nutricion_desnutricion
		register.nutricion_discapacidad_psicomotora = value.nutricion_discapacidad_psicomotora
		register.nutricion_enfermedades_gastrointestinales = value.nutricion_enfermedades_gastrointestinales
		register.salud_oral_enfermedades_de_la_cavidad_oral = value.salud_oral_enfermedades_de_la_cavidad_oral
		register.salud_oral_tratamientos_odontologicos_sin_terminar = value.salud_oral_tratamientos_odontologicos_sin_terminar
		register.salud_oral_pacientes_desdentados = value.salud_oral_pacientes_desdentados
		register.salud_oral_sin_evaluacion_odontologica = value.salud_oral_sin_evaluacion_odontologica
		register.salud_oral_no_higiene_oral = value.salud_oral_no_higiene_oral

    //=================== NUEVOS REGISTROS ================================//
    if(value.newRegister) {
      register.razon_social_ips = value.newRegister.razon_social_ips;
      register.lengua_propia = value.newRegister.lengua_propia;
      register.tipo_ocupacion = value.newRegister.tipo_ocupacion;
      register.salud_mental = value.newRegister.salud_mental;
      register.conocimiento_salud = value.newRegister.conocimiento_salud;
      register.poblacion_vulnerable = value.newRegister.poblacion_vulnerable;
      register.tipo_discapacidad = value.newRegister.tipo_discapacidad;
      register.tiene_cuidador = value.newRegister.tiene_cuidador;
      register.descapacidad_registro_localizacion_caracteri = value.newRegister.descapacidad_registro_localizacion_caracteri;
      register.presento_tos_expectoracion = value.newRegister.presento_tos_expectoracion;
      register.fuma = value.newRegister.fuma;
      register.hace_cuanto = value.newRegister.hace_cuanto;
      register.cuantos_cigarrillos_diarios = value.newRegister.cuantos_cigarrillos_diarios;
      register.expocicion_quimicos = value.newRegister.expocicion_quimicos;
      register.expocicion_convulsivos = value.newRegister.expocicion_convulsivos;
      register.religion = value.newRegister.religion;
      register.consumo_alcohol = value.newRegister.consumo_alcohol;
      register.frecuancia_consumo_alcohol = value.newRegister.frecuancia_consumo_alcohol;
      register.hace_cuanto_alcohol = value.newRegister.hace_cuanto_alcohol;
      register.consumo_sustan_psicoactivas = value.newRegister.consumo_sustan_psicoactivas;
      register.sustan_psicoactivas = value.newRegister.sustan_psicoactivas;
      register.frecuensia_sustan_psicoactivas = value.newRegister.frecuensia_sustan_psicoactivas;
      register.hace_cuanto_sustan_psicoactivas = value.newRegister.hace_cuanto_sustan_psicoactivas;
      register.planificacion_familiar = value.newRegister.planificacion_familiar;
      register.fecha_ultima_citologia = value.newRegister.fecha_ultima_citologia;
      register.fecha_ultima_mestruacion = value.newRegister.fecha_ultima_mestruacion;
      register.sufre_enf_cronica = value.newRegister.sufre_enf_cronica;
      register.patologias = value.newRegister.patologias;
      register.alimientacion_lactancia = value.newRegister.alimientacion_lactancia;
      register.frecu_sepillado = value.newRegister.frecu_sepillado;
      register.utiliza_crema_dental = value.newRegister.utiliza_crema_dental;
      register.ingesta_crema_dental = value.newRegister.ingesta_crema_dental;
    }
    if(value.newRegister2) {
      register.razon_social_ips = value.newRegister2.razon_social_ips;
      register.lengua_propia = value.newRegister2.lengua_propia;
      register.tipo_ocupacion = value.newRegister2.tipo_ocupacion;
      register.salud_mental = value.newRegister2.salud_mental;
      register.conocimiento_salud = value.newRegister2.conocimiento_salud;
      register.poblacion_vulnerable = value.newRegister2.poblacion_vulnerable;
      register.tipo_discapacidad = value.newRegister2.tipo_discapacidad;
      register.tiene_cuidador = value.newRegister2.tiene_cuidador;
      register.descapacidad_registro_localizacion_caracteri = value.newRegister2.descapacidad_registro_localizacion_caracteri;
      register.presento_tos_expectoracion = value.newRegister2.presento_tos_expectoracion;
      register.fuma = value.newRegister2.fuma;
      register.hace_cuanto = value.newRegister2.hace_cuanto;
      register.cuantos_cigarrillos_diarios = value.newRegister2.cuantos_cigarrillos_diarios;
      register.expocicion_quimicos = value.newRegister2.expocicion_quimicos;
      register.expocicion_convulsivos = value.newRegister2.expocicion_convulsivos;
      register.religion = value.newRegister2.religion;
      register.consumo_alcohol = value.newRegister2.consumo_alcohol;
      register.frecuancia_consumo_alcohol = value.newRegister2.frecuancia_consumo_alcohol;
      register.hace_cuanto_alcohol = value.newRegister2.hace_cuanto_alcohol;
      register.consumo_sustan_psicoactivas = value.newRegister2.consumo_sustan_psicoactivas;
      register.sustan_psicoactivas = value.newRegister2.sustan_psicoactivas;
      register.frecuensia_sustan_psicoactivas = value.newRegister2.frecuensia_sustan_psicoactivas;
      register.hace_cuanto_sustan_psicoactivas = value.newRegister2.hace_cuanto_sustan_psicoactivas;
      register.planificacion_familiar = value.newRegister2.planificacion_familiar;
      register.fecha_ultima_citologia = value.newRegister2.fecha_ultima_citologia;
      register.fecha_ultima_mestruacion = value.newRegister2.fecha_ultima_mestruacion;
      register.sufre_enf_cronica = value.newRegister2.sufre_enf_cronica;
      register.patologias = value.newRegister2.patologias;
      register.alimientacion_lactancia = value.newRegister2.alimientacion_lactancia;
      register.frecu_sepillado = value.newRegister2.frecu_sepillado;
      register.utiliza_crema_dental = value.newRegister2.utiliza_crema_dental;
      register.ingesta_crema_dental = value.newRegister2.ingesta_crema_dental;
    }

		let validation = {
			validation :true,
			data: null,
		};

		try {
			await register.save();
			let id_register = register.id;
			this.saveMedicines(request,id_register)
			this.saveSick(request,id_register)
		} catch (error) {
			validation.validation = false;
			validation.data = await error.message;
		}
		finally {
			return validation
		}
	}

	async saveSick(request,id_register)
	{
		request.arrayEnfermedades.forEach(async function(value) {
			let res	 =null;
			let search = await Database
			.from('tbl_registros_personales_enfermedades')
			.where('nombre',	'LIKE', '%'+value.nombre+'%')
			.first()

			if(typeof search =='undefined') {
				res = new TblRegistroPersonalesEnfermedade();
			} else {
				res = await TblRegistroPersonalesEnfermedade.find(search.id)
			}

			res.registros_personales_id	 =id_register;
			res.codigo	 =value.codigo;
			res.nombre	 =value.nombre;
			res.save();
		})
	}

	async saveMedicines(request,id_register)
	{
		request.arrayMedicamentos.forEach(async function(value) {
			let res	 =null;
			let search = await Database
			.from('tbl_registros_personales_medicamentos')
			.where('nombre',	'LIKE', '%'+value.nombre+'%')
			.first()

			if(typeof search =='undefined'){
				res = new TblRegistroPersonalesMedicamento();
			} else {
				res = await TblRegistroPersonalesMedicamento.find(search.id)
			}
			//res.cantidad_actual = (value.cantidad_actual.trim() == '') ?null:value.cantidad_actual
			res.presentacion = (value.presentacion.trim() == '')		?null:value.presentacion
			res.fabricante = (value.fabricante.trim() == '')			?null:value.fabricante
			//res.cantidad = (value.cantidad.trim() == '')				?null:value.cantidad
			res.codigo = (value.codigo.trim() == '')					?null:value.codigo
			res.nombre = (value.nombre.trim() == '')					?null:value.nombre
			//res.fecha_entrega = value.fecha_entrega
			//res.fecha_registro = value.fecha_registro
			res.registros_personales_id	 =id_register;
			res.save();
		})

	}

	async store ({ request })
	{
		this.saveTarjeta(request)
	}

	async show ({ params, response})
	{
		const { id } = params

		const data = await TblTarjetaFamiliar.query()
			.where('codigo', id)
			.with('tbl_registros_personales', (builder) => {
			builder.with('tbl_persona')
			builder.with('tbl_enfermedades')
			builder.with('tbl_medicamentos')
			})
			.with('tbl_mortalidades')
			.with('tbl_departamento')
			.with('tbl_municipio')
			.with('tbl_corregimiento')
			.with('tbl_vereda')
			.first()

		 return response.sendSuccess(data, 'Detalle de Tarjeta Familiar')
	}

	async getFichasByMunicipio ({response })
	{
		const data = await Database.table('tbl_tarjetas_familiares')
			.select('tbl_municipios.nombre')
			.leftJoin('tbl_municipios', 'tbl_tarjetas_familiares.municipio_id', 'tbl_municipios.id')
			.groupBy('municipio_id', 'tbl_municipios.nombre').count();

		return response.sendSuccess(data, 'fichas por municipios')
	}

	async getFichasByMunicipioFiltrados ({ request, response })
	{

		const requestData = Object.values(request.all());
		const fichasPorMunicipio = await Database.table('tbl_tarjetas_familiares')
			.whereIn('tbl_tarjetas_familiares.municipio_id', requestData)
			.select('tbl_municipios.nombre')
			.leftJoin('tbl_municipios', 'tbl_tarjetas_familiares.municipio_id', 'tbl_municipios.id')
			.groupBy('municipio_id', 'tbl_municipios.nombre').count();

		return response.sendSuccess(fichasPorMunicipio, 'fichas por municipios')
	}

	async asyncForEach(array, callback)
	{
		for (let index = 0; index < array.length; index++) {
			await callback(array[index], index, array);
		}
	}

	async getFileInformation ({ response })
	{

		let fields =[
			{ name : 'iluminacion adecuada', field :'iluminacion_adecuada' },
			{ name : 'ventilacion adecuada', field :'ventilacion_adecuada' },
			{ name : 'roedores', field :'roedores' },
			{ name : 'reserva agua', field :'reservorios_de_agua' },
			{ name : 'anjeos puertas y ventanas', field :'anjeos_puertas_y_ventanas' },
			{ name : 'uso toldillos', field :'uso_de_toldillos' },
			{ name : 'material predominante', field :'material_predominante_en_piso_techo_paredes' },
			{ name : 'letina', field :'con_letrina_pero_alguien_no_la_usa' },
			{ name : 'plagas', field :'plagas' },
			{ name : 'convivencia con animales', field :'convivencia_inadecuada_con_animales' },
			{ name : 'disposicion plaguicida', field :'mala_disposicion_de_plaguicidas' },
			{ name : 'contaminacion del agua', field :'contaminacion_del_agua' },
			{ name : 'accidente ofidico', field :'accidentes_ofidico' },
			{ name : 'uso plagicida', field :'usan_plaguicidas' },
			{ name : 'hierve el agua', field :'no_siempre_hierve_el_agua' },
			{ name : 'areas endemicas', field :'areas_endemicas_de_enfermedades_de_salud_publica' },
			{ name : 'mala higiene en alimentos', field :'mala_higiene_en_preparacion_de_alimentos' },
			{ name : 'piojos', field :'piojos' },
			{ name : 'parasitos', field :'parasitos' },
			{ name : 'acaros', field :'acaros' },
			{ name : 'zancudos', field :'zancudos' },

		];
		let data = { datasets: [] }

		await this.asyncForEach(fields, async row => {
			let responseTrue = await Database.table('tbl_tarjetas_familiares')
				.where(row.field, true)
				.count()
				.first();

			data.datasets.push({
				name: row.name + ' - Si',
				data: [parseInt(responseTrue.count)]
			});

			let responseFalse = await Database.table('tbl_tarjetas_familiares')
				.where(row.field, false)
				.count()
				.first();

			data.datasets.push({
				name: row.name + ' - No',
				data: [parseInt(responseFalse.count)]
			});

		})
		return response.sendSuccess(data, 'estadisticas')
	}

	async getFileInformationByFilter ({ request, response })
	{

		const { fecha, municipio } = request.all();
		const array = Object.values(municipio);

		let fields =[
			{ name : 'iluminacion adecuada', field :'iluminacion_adecuada' },
			{ name : 'ventilacion adecuada', field :'ventilacion_adecuada' },
			{ name : 'roedores', field :'roedores' },
			{ name : 'reserva agua', field :'reservorios_de_agua' },
			{ name : 'anjeos puertas y ventanas', field :'anjeos_puertas_y_ventanas' },
			{ name : 'uso toldillos', field :'uso_de_toldillos' },
			{ name : 'material predominante', field :'material_predominante_en_piso_techo_paredes' },
			{ name : 'letina', field :'con_letrina_pero_alguien_no_la_usa' },
			{ name : 'plagas', field :'plagas' },
			{ name : 'convivencia con animales', field :'convivencia_inadecuada_con_animales' },
			{ name : 'disposicion plaguicida', field :'mala_disposicion_de_plaguicidas' },
			{ name : 'contaminacion del agua', field :'contaminacion_del_agua' },
			{ name : 'accidente ofidico', field :'accidentes_ofidico' },
			{ name : 'uso plagicida', field :'usan_plaguicidas' },
			{ name : 'hierve el agua', field :'no_siempre_hierve_el_agua' },
			{ name : 'areas endemicas', field :'areas_endemicas_de_enfermedades_de_salud_publica' },
			{ name : 'mala higiene en alimentos', field :'mala_higiene_en_preparacion_de_alimentos' },
			{ name : 'piojos', field :'piojos' },
			{ name : 'parasitos', field :'parasitos' },
			{ name : 'acaros', field :'acaros' },
			{ name : 'zancudos', field :'zancudos' },
		];

		let data = { datasets: [] }

		await this.asyncForEach(fields, async row => {
			let responseTrue = await Database.table('tbl_tarjetas_familiares')
				.where(row.field, true)
				.whereIn('municipio_id', array)
				.count()
				.first();

			if(fecha) {
				let tarjetasFamiliares = await Database.table('tbl_tarjetas_familiares')
					.where(row.field, true)
					.whereIn('municipio_id', array);

				tarjetasFamiliares.forEach(tarjetaFamiliar => {

					const getDate = new Date(tarjetaFamiliar.created_at);
					const year = getDate.getFullYear();
					const day = getDate.getDate() < 10
								? '0'+getDate.getDate()
								: getDate.getDate();
					const month = (getDate.getMonth() + 1) < 10
								? '0'+(getDate.getMonth() + 1)
								: (getDate.getMonth() + 1);

					const date = year+'-'+month+'-'+day;

					if(date == fecha) {
						data.datasets.push({
						name: row.name + ' - Si',
						data: [parseInt(responseTrue.count)]
						});
					}
				});
			} else {
				data.datasets.push({
					name: row.name + ' - Si',
					data: [parseInt(responseTrue.count)]
				});
			}

			let responseFalse = await Database.table('tbl_tarjetas_familiares')
				.where(row.field, false)
				.whereIn('municipio_id', array)
				.count()
				.first();

			if(fecha) {
				let tarjetasFamiliares = await Database
					.table('tbl_tarjetas_familiares')
					.where(row.field, false)
					.whereIn('municipio_id', array);

				tarjetasFamiliares.forEach(tarjetaFamiliar => {
					const getDate = new Date(tarjetaFamiliar.created_at);
					const year = getDate.getFullYear();
					const month = (getDate.getMonth() + 1) < 10
									? '0'+(getDate.getMonth() + 1)
									: (getDate.getMonth() + 1);
					const day = getDate.getDate() < 10
									? '0'+getDate.getDate()
									: getDate.getDate();

					const date = year+'-'+month+'-'+day;

					if(date == fecha) {
						data.datasets.push({
							name: row.name + ' - No',
							data: [parseInt(responseFalse.count)]
						});
					}
				});

			} else {
				data.datasets.push({
					name: row.name + ' - No',
					data: [parseInt(responseFalse.count)]
				});
			}
		})

		return response.sendSuccess(data, 'estadisticas')
	}

	async getUbications ({ response })
	{
		const data = await TblTarjetaFamiliar.query()
			.select('id','longitud','latitud','codigo')
			.fetch()

		return response.sendSuccess(data, 'Ubicaciones de Tarjeta Familiar')
	}

	async getFilesMonth ({ response })
	{
		const data = await Database
		.raw(
			`SELECT
				EXTRACT(year from "created_at") as year,
				EXTRACT(month from "created_at") as month,
				count(*)
			FROM
				tbl_tarjetas_familiares
			GROUP BY
				1,
				EXTRACT(year from "created_at"),
				EXTRACT(month from "created_at")`
		);

		return response.sendSuccess(data, 'Fichas por mes')
	}

	async search({ request, response })
	{
		const { desde, hasta, municipio, vereda, corregimiento } = request.body

		const query = Database
		.table('tbl_registros_personales')
		.select(
			'tbl_tarjetas_familiares.codigo',
			'tbl_tarjetas_familiares.ficha',
			'tbl_tarjetas_familiares.nivel',
			'tbl_tarjetas_familiares.puntaje',
			'tbl_tarjetas_familiares.pacienteportabilidad',
			'tbl_tarjetas_familiares.pacientecambiodomicilio',
			'tbl_tarjetas_familiares.zona',
			'tbl_departamentos.nombre AS departamento_nombre',
			'tbl_municipios.nombre AS municipio_nombre',
			'tbl_veredas.nombre AS vereda_nombre',
			'tbl_corregimientos.nombre AS corregimiento_nombre',
			'tbl_tarjetas_familiares.telefono',
			'tbl_tarjetas_familiares.direccion',
			'tbl_tarjetas_familiares.fechaproximavisita',
			'tbl_tarjetas_familiares.longitud',
			'tbl_tarjetas_familiares.latitud',
			'tbl_tarjetas_familiares.exactitud',
			'tbl_tarjetas_familiares.gatos',
			'tbl_tarjetas_familiares.gatos_cuantos',
			'tbl_tarjetas_familiares.gatos_vacunados',
			'tbl_tarjetas_familiares.gatos_trivalente',
			'tbl_tarjetas_familiares.gatos_refuerzo_trivalente',
			'tbl_tarjetas_familiares.gatos_rabia',
			'tbl_tarjetas_familiares.gatos_presenta_carnet',
			'tbl_tarjetas_familiares.perros',
			'tbl_tarjetas_familiares.perros_cuantos',
			'tbl_tarjetas_familiares.perros_vacunados',
			'tbl_tarjetas_familiares.perros_parvo_moquillo',
			'tbl_tarjetas_familiares.perros_polivalente',
			'tbl_tarjetas_familiares.perros_rabia',
			'tbl_tarjetas_familiares.perros_presenta_carnet',
			'tbl_tarjetas_familiares.equinos',
			'tbl_tarjetas_familiares.equinos_cuantos',
			'tbl_tarjetas_familiares.equinos_vacunados',
			'tbl_tarjetas_familiares.equinos_encefalomielitis',
			'tbl_tarjetas_familiares.equinos_influenza',
			'tbl_tarjetas_familiares.equinos_presenta_carnet',
			'tbl_tarjetas_familiares.otros',
			'tbl_tarjetas_familiares.otros_cuantos',
			'tbl_tarjetas_familiares.otros_cuantos',
			'tbl_tarjetas_familiares.otros_vacunados',
			'tbl_tarjetas_familiares.donde_toma_agua',
			'tbl_tarjetas_familiares.la_basura_es',
			'tbl_tarjetas_familiares.iluminacion_adecuada',
			'tbl_tarjetas_familiares.ventilacion_adecuada',
			'tbl_tarjetas_familiares.roedores',
			'tbl_tarjetas_familiares.reservorios_de_agua',
			'tbl_tarjetas_familiares.anjeos_puertas_y_ventanas',
			'tbl_tarjetas_familiares.uso_de_toldillos',
			'tbl_tarjetas_familiares.material_predominante_en_piso_techo_paredes',
			'tbl_tarjetas_familiares.con_letrina_pero_alguien_no_la_usa',
			'tbl_tarjetas_familiares.plagas',
			'tbl_tarjetas_familiares.convivencia_inadecuada_con_animales',
			'tbl_tarjetas_familiares.mala_disposicion_de_plaguicidas',
			'tbl_tarjetas_familiares.contaminacion_del_agua',
			'tbl_tarjetas_familiares.accidentes_ofidico',
			'tbl_tarjetas_familiares.usan_plaguicidas',
			'tbl_tarjetas_familiares.no_siempre_hierve_el_agua',
			'tbl_tarjetas_familiares.areas_endemicas_de_enfermedades_de_salud_publica',
			'tbl_tarjetas_familiares.mala_higiene_en_preparacion_de_alimentos',
			'tbl_tarjetas_familiares.piojos',
			'tbl_tarjetas_familiares.parasitos',
			'tbl_tarjetas_familiares.acaros',
			'tbl_tarjetas_familiares.zancudos',
			'tbl_tarjetas_familiares.created_at AS fecha_creacion',
			'tbl_personas.cabeza_familia',
			'tbl_personas.genero',
			'tbl_personas.familiaridad',
			'tbl_personas.documento',
			'tbl_personas.documento_tipo',
			'tbl_personas.fecha_nacimiento',
			'tbl_personas.estado_civil',
			'tbl_personas.nivel_educativo',
			'tbl_personas.tipo_ocupacion',
			'tbl_personas.nombre_primero',
			'tbl_personas.nombre_segundo',
			'tbl_personas.apellido_primero',
			'tbl_personas.apellido_segundo',
			'tbl_eps.nombre AS eps_nombre',
			'tbl_personas.regimen',
			'tbl_personas.afiliacion_tipo',
			'tbl_personas.rango',
			'tbl_registros_personales.signos_vitales_tension_arterial_sistolica',
			'tbl_registros_personales.signos_vitales_tension_arterial_diastolica',
			'tbl_registros_personales.signos_vitales_frecuencia_cardias',
			'tbl_registros_personales.signos_vitales_frecuencia_respiratoria',
			'tbl_registros_personales.grupos_riesgo_accidente_y_enfermedad_laboral',
			'tbl_registros_personales.grupos_riesgo_alteraciones_nutricionales',
			'tbl_registros_personales.grupos_riesgo_alteraciones_y_transtornos_de_la_audicion_y_comun',
			'tbl_registros_personales.grupos_riesgo_alteraciones_y_transtornos_de_la_salud_bucal',
			'tbl_registros_personales.grupos_riesgo_alteraciones_y_transtornos_visuales',
			'tbl_registros_personales.grupos_riesgo_cancer',
			'tbl_registros_personales.grupos_riesgo_enferemdad_zoonotica',
			'tbl_registros_personales.grupos_riesgo_enfermedad_cardiovascular_aterogenica',
			'tbl_registros_personales.grupos_riesgo_enfermedad_respiratoria_cronica',
			'tbl_registros_personales.grupos_riesgo_enfermedades_huerfanas',
			'tbl_registros_personales.grupos_riesgo_enfermedades_infecciosas',
			'tbl_registros_personales.grupos_riesgo_materno_perinatal',
			'tbl_registros_personales.grupos_riesgo_problemas_de_salud_mental',
			'tbl_registros_personales.grupos_riesgo_transtornos_degenerativos_neuropatias_y_enfermedad',
			'tbl_registros_personales.grupos_riesgo_trastornos_asociados_al_uso_de_sustancias_psicoac',
			'tbl_registros_personales.grupos_riesgo_violencia',
			'tbl_registros_personales.otros_notas'
		)
		.leftJoin('tbl_tarjetas_familiares', 'tbl_registros_personales.tarjetas_familiares_id', 'tbl_tarjetas_familiares.id')
		.leftJoin('tbl_departamentos', 'tbl_tarjetas_familiares.departamento_id', 'tbl_departamentos.id')
		.leftJoin('tbl_municipios', 'tbl_tarjetas_familiares.municipio_id', 'tbl_municipios.id')
		.leftJoin('tbl_veredas', 'tbl_tarjetas_familiares.vereda_id', 'tbl_veredas.id')
		.leftJoin('tbl_corregimientos', 'tbl_tarjetas_familiares.corregimiento_id', 'tbl_corregimientos.id')
		.leftJoin('tbl_personas', 'tbl_registros_personales.personas_id', 'tbl_personas.id')
		.leftJoin('tbl_eps', 'tbl_personas.eps_id', 'tbl_eps.id')
		.orderBy('tbl_tarjetas_familiares.codigo', 'ASC')
		.orderBy('tbl_personas.nombre_primero', 'ASC')
		.orderBy('tbl_personas.nombre_segundo', 'ASC')
		.orderBy('tbl_personas.apellido_primero', 'ASC')
		.orderBy('tbl_personas.apellido_segundo', 'ASC')

		if(desde)
			query.where('tbl_tarjetas_familiares.created_at', '>=', desde)

		if(hasta)
			query.where('tbl_tarjetas_familiares.created_at', '<=', hasta)

		if(municipio)
			query.where('tbl_tarjetas_familiares.municipio_id', municipio)

		if(vereda)
			query.where('tbl_tarjetas_familiares.vereda_id', vereda)

		if(corregimiento)
			query.where('tbl_tarjetas_familiares.corregimiento_id', corregimiento)

		const data = await query

		data.forEach((value,index)	 =>{
			Object.entries(value).forEach(field	 =>{
				if(typeof field[1]  === 'boolean') {
					data[index][field[0]] = field[1] ? 'Si' : 'No';
				} else {
					data[index][field[0]] = field[1] === null ? '-' : field[1];

				}
			})
		});

		const cards = await this.searchCards(request)
		const result = {
			export: data,
			cards
		}

		return response.sendSuccess(result, 'Listado filtro de Tarjetas Familiares')
	}

	async searchCards(request)
	{
		const { desde, hasta, municipio, vereda, corregimiento } = request.body

		const query = Database
		.table('tbl_tarjetas_familiares')
		.select([
			'tbl_tarjetas_familiares.id',
			'tbl_tarjetas_familiares.codigo',
			'tbl_tarjetas_familiares.zona',
			'tbl_departamentos.nombre AS departamento_nombre',
			'tbl_municipios.nombre AS municipio_nombre',
			'tbl_tarjetas_familiares.created_at AS fecha_creacion',
			Database.raw(
				`(SELECT
					count(*)
				FROM
					tbl_registros_personales total
				WHERE
					total.tarjetas_familiares_id = tbl_tarjetas_familiares.id
				) as personas_registrada`
			)
		])
		.leftJoin('tbl_departamentos', 'tbl_tarjetas_familiares.departamento_id', 'tbl_departamentos.id')
		.leftJoin('tbl_municipios', 'tbl_tarjetas_familiares.municipio_id', 'tbl_municipios.id')
		.orderBy('tbl_tarjetas_familiares.codigo', 'ASC')

		if(desde)
			query.where('tbl_tarjetas_familiares.created_at', '>=', desde)

		if(hasta)
			query.where('tbl_tarjetas_familiares.created_at', '<=', hasta)

		if(municipio)
			query.where('tbl_tarjetas_familiares.municipio_id', municipio)

		if(vereda)
			query.where('tbl_tarjetas_familiares.vereda_id', vereda)

		if(corregimiento)
			query.where('tbl_tarjetas_familiares.corregimiento_id', corregimiento)

		const data = await query

		return data
	}
}

module.exports = TblTarjetaController
