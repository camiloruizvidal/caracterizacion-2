<template>
  <div id="family-card">
    <div class="grid">
      <div class="element1">Fecha: {{ new Date().toDateString() }}</div>
      <div class="element2">Tarjeta familiar N {{ data.codigo }}</div>

      <div class="element3">Bienvenidos a la empresa social del estado</div>

      <div class="element4">
        <img
          :src="require(`@/assets/${dataParametros.logo}`)"
          :alt="dataParametros.logo"
          width="50"
        />
      </div>

      <div class="element5">{{ dataParametros.nombre }}</div>

      <div class="element6">
        SISTEMA DE INFORMACIÓN DE CARACTERIZACIÓN DE LA POBLACIÓN
      </div>

      <div class="element7">
        <span>{{ dataParametros.direccion }}</span>
      </div>

      <div class="table1">
        <span>Datos Generales</span>
        <table border="1">
          <thead>
            <tr>
              <th>Fecha de registro</th>
              <th>Responsable</th>
              <th>Fecha próxima visita</th>
              <th>Zona</th>
              <th>Departamento</th>
              <th>Municipio</th>
              <th>Corregimiento</th>
              <th>Vereda</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{ new Date(data.created_at).toLocaleDateString() }}</td>
              <td></td>
              <td></td>
              <td>N{{ data.zona }}</td>
              <td>
                {{
                  data.tbl_departamento
                    ? data.tbl_departamento.nombre
                    : "No posee"
                }}
              </td>
              <td>
                {{
                  data.tbl_municipio ? data.tbl_municipio.nombre : "No posee"
                }}
              </td>
              <td>
                {{
                  data.tbl_corregimiento
                    ? data.tbl_corregimiento.nombre
                    : "No posee"
                }}
              </td>
              <td>
                {{ data.tbl_vereda ? data.tbl_vereda.nombre : "No posee" }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="element8">
        <span>Riesgos del Ambiente</span>

        <p>Donde toma el agua: {{ data.donde_toma_agua }}</p>
        <p>La basura es: {{ data.la_basura_es }}</p>
        <p>¿Hay gatos?: {{ data.gatos }}</p>
        <p>Cuantos gatos: {{ data.gatos_cuantos }}</p>
        <p>Cuantos gatos vacunados: {{ data.gatos_vacunados }}</p>
        <p>¿Hay perros?: {{ data.perros }}</p>
        <p>Cuantos perros: {{ data.gatos_cuantos }}</p>
        <p>Cuantos perros vacunados: {{ data.perros_cuantos }}</p>
        <p>¿Hay equinos?: {{ data.equinos }}</p>
      </div>

      <div class="container_info">
        <span class="title"> Observar si hay: </span>

        <div class="box">
          <div class="info">
            <div>Iluminación adecuada</div>
            <div>{{ data.iluminacion_adecuada ? "Si" : "No" }}</div>
          </div>
          <div class="info">
            <div>Ventilación adecuada</div>
            <div>{{ data.ventilacion_adecuada ? "Si" : "No" }}</div>
          </div>
          <div class="info">
            <div>Roedores</div>
            <div>{{ data.roedores ? "Si" : "No" }}</div>
          </div>
          <div class="info">
            <div>Reservorios de agua</div>
            <div>{{ data.reservorios_de_agua ? "Si" : "No" }}</div>
          </div>
          <div class="info">
            <div>Anjeos en puertas y ventanas</div>
            <div>{{ data.anjeos_puertas_y_ventanas ? "Si" : "No" }}</div>
          </div>
          <div class="info">
            <div>Uso de toldillos</div>
            <div>{{ data.uso_de_toldillos ? "Si" : "No" }}</div>
          </div>
        </div>
      </div>

      <div class="container_info">
        <span class="title"> Material predominante en: </span>

        <div class="box">
          <div class="info">
            <div>Pisos</div>
            <div>{{ data.condiciones_vivienda }}</div>
          </div>
          <div class="info">
            <div>Techo</div>
            <div>{{ data.material_techo }}</div>
          </div>
          <div class="info">
            <div>Paredes</div>
            <div>{{ data.material_paredes }}</div>
          </div>
        </div>
      </div>

      <div class="container_info2">
        <span class="title"> Riesgos del medio ambiente: </span>

        <div class="box">
          <div class="info">
            <div>Con letrina pero alguien no la usa</div>
            <div>
              {{ data.con_letrina_pero_alguien_no_la_usa ? "Si" : "No" }}
            </div>
            <div>No siempre hierven el agua</div>
            <div>{{ data.no_siempre_hierve_el_agua ? "Si" : "No" }}</div>
          </div>
          <div class="info">
            <div>Contaminación del agua</div>
            <div>{{ data.contaminacion_del_agua ? "Si" : "No" }}</div>
            <div>Mala higiene en preparación de alimentos</div>
            <div>
              {{ data.mala_higiene_en_preparacion_de_alimentos ? "Si" : "No" }}
            </div>
          </div>
          <div class="info">
            <div>Usan plaguicidas</div>
            <div>{{ data.usan_plaguicidas ? "Si" : "No" }}</div>
            <div>Mala disposición de plaguicidas</div>
            <div>{{ data.mala_disposicion_de_plaguicidas ? "Si" : "No" }}</div>
          </div>
          <div class="info">
            <div>Áreas endémicas de enfermedades de salud pública</div>
            <div>
              {{
                data.areas_endemicas_de_enfermedades_de_salud_publica
                  ? "Si"
                  : "No"
              }}
            </div>
            <div>
              ¿En algunos de los dormitorios de la vivienda duermen mas de 3
              personas?
            </div>
            <div>{{ data.personas_domitorio > 0 ? "Si" : "No" }}</div>
          </div>
          <div class="info">
            <div>Convivencia inadecuada de animales</div>
            <div>
              {{ data.convivencia_inadecuada_con_animales ? "Si" : "No" }}
            </div>
            <div>Disposición inadecuada de la basura</div>
            <div>{{ data.la_basura_es }}</div>
          </div>
          <div class="info">
            <div>Accidente ofidicos</div>
            <div>{{ data.accidentes_ofidico ? "Si" : "No" }}</div>
            <div>Plagas (Garrapatillas)</div>
            <div>{{ data.plagas ? "Si" : "No" }}</div>
          </div>
          <div class="info">
            <div>Agua no potable</div>
            <div>{{ data.donde_toma_agua }}</div>
            <div>Problema de orden público</div>
            <div>No disponible</div>
          </div>
          <div class="info">
            <div>Sin letrina</div>
            <div>{{ data.tipo_sanitario }}</div>
            <div>¿Hay humo dentro de la vivienda?</div>
            <div>{{ data.humo_interior }}</div>
          </div>
        </div>
      </div>

      <div class="members">
        <span class="h2-members">Miembros asociados</span>

        <div
          class="container_member"
          v-for="(registro, index_registro) in data.tbl_registros_personales"
          :key="index_registro"
        >
          <p class="title-member">Miembro #: {{ index_registro + 1 }}</p>
          <p class="text-member">
            Jefe Hogar: {{ registro.tbl_persona.cabeza_familia ? "Si" : "No" }}
          </p>
          <p class="text-member">
            Nombres y apellidos: {{ registro.tbl_persona.fullnombre }}
          </p>
          <p class="text-member">Sexo: {{ registro.tbl_persona.genero }}</p>
          <p class="text-member">
            Edad:
            {{ _calculateAge(new Date(registro.tbl_persona.fecha_nacimiento)) }}
            años
          </p>
          <!-- <p class="text-member">Meses: 10</p> -->
          <p class="text-member">
            Parentesco: {{ registro.tbl_persona.familiaridad }}
          </p>
          <p class="text-member">
            Estado civil: {{ registro.tbl_persona.estado_civil }}
          </p>
          <p class="text-member">
            Ocupación: {{ registro.tbl_persona.tipo_ocupacion }}
          </p>
          <p class="text-member">
            Grado de instrucción: {{ registro.tbl_persona.nivel_educativo }}
          </p>
          <p class="text-member">
            Cambio domicilio: {{ data.pacientecambiodomicilio ? "Si" : "No" }}
          </p>
          <p class="text-member">
            Portabilidad: {{ data.pacienteportabilidad ? "Si" : "No" }}
          </p>

          <div class="table-position">
            <table border="1">
              <thead>
                <tr>
                  <th>Asegurador</th>
                  <th>Régimen</th>
                  <th>Tipo afiliado</th>
                  <th>Rango</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    {{
                      registro.tbl_persona.eps_id
                        ? "registro.tbl_persona.eps_id"
                        : "No posee"
                    }}
                  </td>
                  <td>{{ registro.tbl_persona.regimen }}</td>
                  <td>{{ registro.tbl_persona.afiliacion_tipo }}</td>
                  <td>{{ registro.tbl_persona.rango }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p class="title-member">Catacterísticas</p>

          <p class="subtitle-member">Enfermedades</p>
          <div
            class="characteristics"
            v-for="enfermedad in registro.tbl_enfermedades"
            :key="enfermedad.id + enfermedad.codigo"
          >
            <p class="text-member">{{ enfermedad.nombre }}: Si</p>
          </div>
          <div v-if="!registro.tbl_enfermedades.length" class="mb-3">
            No tiene <br />
          </div>

          <p class="subtitle-member">Medicamentos</p>
          <div
            class="characteristics"
            v-for="medicamento in registro.tbl_medicamentos"
            :key="medicamento.id + medicamento.codigo"
          >
            <p class="text-member">{{ medicamento.nombre }}: Si</p>
          </div>
          <div v-if="!registro.tbl_medicamentos.length" class="mb-3">
            No tiene <br />
          </div>

          <div class="characteristics">
            <div v-for="(value, key) in registros" :key="key">
              <p
                class="text-member"
                v-if="
                  registro.hasOwnProperty(key) &&
                  registro[key] !== null &&
                  registro[key] !== false &&
                  registro[key] !== ''
                "
              >
                {{ value }}: {{ registro[key] }}
              </p>
            </div>
          </div>

          <div
            v-if="
              _calculateAge(new Date(registro.tbl_persona.fecha_nacimiento)) >
                0 &&
              _calculateAge(new Date(registro.tbl_persona.fecha_nacimiento)) <=
                5
            "
          >
            <img
              class="img-fluid mt-5 pl-5 pr-5"
              src="../../assets/informes/0-5y/1.png"
              alt="informe_edad"
              fluid-grow
            />
            <img
              class="img-fluid mt-5 pl-5 pr-5"
              src="../../assets/informes/0-5y/2.png"
              alt="informe_edad"
              fluid-grow
            />
            <img
              class="img-fluid mt-5 pl-5 pr-5"
              src="../../assets/informes/0-5y/3.png"
              alt="informe_edad"
              fluid-grow
            />
          </div>

          <div
            v-if="
              _calculateAge(new Date(registro.tbl_persona.fecha_nacimiento)) >
                6 &&
              _calculateAge(new Date(registro.tbl_persona.fecha_nacimiento)) <=
                11
            "
          >
            <img
              class="img-fluid mt-5 pl-5 pr-5"
              src="../../assets/informes/6-11y/1.png"
              alt="informe_edad"
              fluid-grow
            />
            <img
              class="img-fluid mt-5 pl-5 pr-5"
              src="../../assets/informes/6-11y/2.png"
              alt="informe_edad"
              fluid-grow
            />
          </div>

          <div
            v-if="
              _calculateAge(new Date(registro.tbl_persona.fecha_nacimiento)) >
                11 &&
              _calculateAge(new Date(registro.tbl_persona.fecha_nacimiento)) <=
                17
            "
          >
            <img
              class="img-fluid mt-5 pl-5 pr-5"
              src="../../assets/informes/12-17y/1.png"
              alt="informe_edad"
              fluid-grow
            />
            <img
              class="img-fluid mt-5 pl-5 pr-5"
              src="../../assets/informes/12-17y/2.png"
              alt="informe_edad"
              fluid-grow
            />
            <img
              class="img-fluid mt-5 pl-5 pr-5"
              src="../../assets/informes/12-17y/3.png"
              alt="informe_edad"
              fluid-grow
            />
          </div>

          <div
            v-if="
              _calculateAge(new Date(registro.tbl_persona.fecha_nacimiento)) >
                17 &&
              _calculateAge(new Date(registro.tbl_persona.fecha_nacimiento)) <=
                28
            "
          >
            <img
              class="img-fluid mt-5 pl-5 pr-5"
              src="../../assets/informes/18-28y/1.png"
              alt="informe_edad"
              fluid-grow
            />
            <img
              class="img-fluid mt-5 pl-5 pr-5"
              src="../../assets/informes/18-28y/2.png"
              alt="informe_edad"
              fluid-grow
            />
            <img
              class="img-fluid mt-5 pl-5 pr-5"
              src="../../assets/informes/18-28y/3.png"
              alt="informe_edad"
              fluid-grow
            />
          </div>

          <div
            v-if="
              _calculateAge(new Date(registro.tbl_persona.fecha_nacimiento)) >
                28 &&
              _calculateAge(new Date(registro.tbl_persona.fecha_nacimiento)) <=
                59
            "
          >
            <img
              class="img-fluid mt-5 pl-5 pr-5"
              src="../../assets/informes/29-59y/1.png"
              alt="informe_edad"
              fluid-grow
            />
            <img
              class="img-fluid mt-5 pl-5 pr-5"
              src="../../assets/informes/29-59y/2.png"
              alt="informe_edad"
              fluid-grow
            />
            <img
              class="img-fluid mt-5 pl-5 pr-5"
              src="../../assets/informes/29-59y/3.png"
              alt="informe_edad"
              fluid-grow
            />
            <img
              class="img-fluid mt-5 pl-5 pr-5"
              src="../../assets/informes/29-59y/4.png"
              alt="informe_edad"
              fluid-grow
            />
          </div>

          <div
            v-if="
              _calculateAge(new Date(registro.tbl_persona.fecha_nacimiento)) >
              60
            "
          >
            <img
              class="img-fluid mt-5 pl-5 pr-5"
              src="../../assets/informes/60y/1.png"
              alt="informe_edad"
              fluid-grow
            />
            <img
              class="img-fluid mt-5 pl-5 pr-5"
              src="../../assets/informes/60y/2.png"
              alt="informe_edad"
              fluid-grow
            />
            <img
              class="img-fluid mt-5 pl-5 pr-5"
              src="../../assets/informes/60y/3.png"
              alt="informe_edad"
              fluid-grow
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: { required: true },
    items: { required: true },
    dataParametros: { required: true },
  },

  data() {
    return {
      registros: {
        signos_vitales_tension_arterial_sistolica:
          "Signos vitales tensión arterial sistólica",
        signos_vitales_tension_arterial_diastolica:
          "Signos vitales tensión arterial diastólica",
        signos_vitales_frecuencia_cardias: "Signos vitales frecuencia cardias",
        signos_vitales_frecuencia_respiratoria:
          "Signos vitales frecuencia respiratoria",
        grupos_riesgo_accidente_y_enfermedad_laboral:
          "Grupos de riesgo accidente y enfermedad laboral",
        grupos_riesgo_alteraciones_nutricionales:
          "Grupos riesgo alteraciones nutricionales",
        grupos_riesgo_alteraciones_y_transtornos_de_la_audicion_y_comun:
          "Grupos riesgo alteraciones y transtornos de la audicion y comun",
        grupos_riesgo_alteraciones_y_transtornos_de_la_salud_bucal:
          "Grupos riesgo alteraciones y transtornos de la salud bucal",
        grupos_riesgo_alteraciones_y_transtornos_visuales:
          "Grupos riesgo alteraciones y transtornos visuales",
        grupos_riesgo_cancer: "Grupos riesgo cancer",
        grupos_riesgo_enferemdad_zoonotica:
          "Grupos riesgo enferemdad zoonotica",
        grupos_riesgo_enfermedad_cardiovascular_aterogenica:
          "Grupos riesgo enfermedad cardiovascular aterogenica",
        grupos_riesgo_enfermedad_respiratoria_cronica:
          "Grupos riesgo enfermedad respiratoria cronica",
        grupos_riesgo_enfermedades_huerfanas:
          "Grupos riesgo enfermedades huerfanas",
        grupos_riesgo_enfermedades_infecciosas:
          "Grupos riesgo enfermedades infecciosas",
        grupos_riesgo_materno_perinatal: "Grupos riesgo materno perinatal",
        grupos_riesgo_problemas_de_salud_mental:
          "Grupos riesgo problemas de salud mental",
        grupos_riesgo_transtornos_degenerativos_neuropatias_y_enfermeda:
          "Grupos riesgo transtornos degenerativos neuropatias y enfermedad",
        grupos_riesgo_trastornos_asociados_al_uso_de_sustancias_psicoac:
          "Grupos riesgo trastornos asociados al uso de sustancias psicoac",
        grupos_riesgo_violencia: "Grupos riesgo violencia",
        salud_infantil_muertes_en_menores_de_1_anno:
          "Salud infantil muertes en menores de 1 año",
        salud_infantil_desnutricion: "Salud infantil desnutricion",
        salud_infantil_animalia_congenita: "Salud infantil anomalía congenita",
        salud_infantil_discapacidad: "Salud infantil discapacidad",
        salud_infantil_embarazo_producto_de_abuso:
          "Salud infantil embarazo producto de abuso",
        salud_infantil_recien_nacido_menor_de_28_dias:
          "Salud infantil recien nacido menor de 28 dias",
        salud_infantil_recien_nacido_parto_domiciliario:
          "Salud infantil recien nacido parto domiciliario",
        salud_infantil_vacunas_incompletas:
          "Salud infantil vacunas incompletas",
        salud_infantil_ninnos_sin_c_y_d: "Salud infantil niños sin c y d",
        salud_infantil_ninno_sin_evaluacion_odontologica:
          "Salud infantil niño sin evaluacion odontologica",
        salud_infantil_ninno_menor_a_5_annos_sin_estructura_aiepi:
          "Salud infantil niño menor a 5 años sin estructura aiepi",
        salud_infantil_problemas_visuales_y_auditivos:
          "Salud infantil problemas visuales y auditivos",
        salud_infantil_caries: "Salud infantil caries",
        salud_infantil_desercion_escolar: "Salud infantil desercion escolar",
        salud_infantil_violacion: "Salud infantil violacion",
        salud_infantil_violencia_sexual: "Salud infantil violencia sexual",
        salud_infantil_maltrato_infantil: "Salud infantil maltrato infantil",
        salud_infantil_abandono: "Salud infantil abandono",
        enfermedades_no_transmisibles_hta: "Enfermedades no transmisibles hta",
        enfermedades_no_transmisibles_diabetes:
          "Enfermedades no transmisibles diabetes",
        enfermedades_no_transmisibles_escasa_adherencia_tratamiento_med:
          "Enfermedades no transmisibles escasa adherencia tratamiento médico",
        enfermedades_no_transmisibles_compilacion_de_organos_blancos:
          "Enfermedades no transmisibles compilacion de organos blancos",
        enfermedades_no_transmisibles_tbc: "Enfermedades no transmisibles tbc",
        enfermedades_no_transmisibles_sin_marca_bcg_en_el_hombro:
          "Enfermedades no transmisibles sin marca bcg en el hombro",
        enfermedades_no_transmisibles_enfermedades_de_la_piel:
          "Enfermedades no transmisibles enfermedades de la piel",
        enfermedades_no_transmisibles_sintomas_respiratorios:
          "Enfermedades no transmisibles sintomas respiratorios",
        enfermedades_no_transmisibles_hombre_mayor_de_50_annos_con_eval:
          "Enfermedades no transmisibles hombre mayor de 50 años con eval",
        enfermedades_no_transmisibles_sin_evaluacion_nutricional:
          "Enfermedades no transmisibles sin evaluacion nutricional",
        enfermedades_no_transmisibles_mujer_mayor_de_45_annos_sin_perfi:
          "Enfermedades no transmisibles mujer mayor de 45 años sin perfil",
        enfermedades_no_transmisibles_no_adscrito_al_programa_adulto_ma:
          "Enfermedades no transmisibles no adscrito al programa adulto ma",
        enfermedades_no_transmisibles_discapacidad_psicomotora:
          "Enfermedades no transmisibles discapacidad psicomotora",
        enfermedades_no_transmisibles_abandono:
          "Enfermedades no transmisibles abandono",
        salud_mental_enfermedad_mental_y_trastorno_represivo_y_retardo:
          "Salud mental enfermedad mental y trastorno represivo y retardo",
        salud_mental_sintomas_de_suicidio: "Salud mental sintomas de suicidio",
        salud_mental_retardo_psicosocial: "Salud mental retardo psicosocial",
        salud_mental_victima_de_violencia: "Salud mental victima de violencia",
        salud_mental_problemas_de_conducta:
          "Salud mental problemas de conducta",
        salud_sexual_reproductiva_embarazo:
          "Salud sexual reproductiva embarazo",
        salud_sexual_reproductiva_gestante_sin_cpn:
          "Salud sexual reproductiva gestante sin cpn",
        salud_sexual_reproductiva_gestante_sin_suplemento_acido_folio_y:
          "Salud sexual reproductiva gestante sin suplemento acido folio y",
        salud_sexual_reproductiva_gestante_sin_psicoprofilaxis:
          "Salud sexual reproductiva gestante sin psicoprofilaxis",
        salud_sexual_reproductiva_embarazo_producto_de_abuso_sexual:
          "Salud sexual reproductiva embarazo producto de abuso sexual",
        salud_sexual_reproductiva_enfermedad_de_transmision_sexual:
          "Salud sexual reproductiva enfermedad de transmision sexual",
        salud_sexual_reproductiva_conducta_sexual_de_riesgo:
          "Salud sexual reproductiva conducta sexual de riesgo",
        salud_sexual_reproductiva_sin_citologia:
          "Salud sexual reproductiva sin citologia",
        nutricion_desnutricion: "Nutricion desnutricion",
        nutricion_discapacidad_psicomotora:
          "Nutricion discapacidad psicomotora",
        nutricion_enfermedades_gastrointestinales:
          "Nutricion enfermedades gastrointestinales",
        salud_oral_enfermedades_de_la_cavidad_oral:
          "Salud oral enfermedades de la cavidad oral",
        salud_oral_tratamientos_odontologicos_sin_terminar:
          "Salud oral tratamientos odontologicos sin terminar",
        salud_oral_pacientes_desdentados: "Salud oral pacientes desdentados",
        salud_oral_sin_evaluacion_odontologica:
          "Salud oral sin evaluacion odontologica",
        salud_oral_no_higiene_oral: "Salud oral no higiene oral",
        otros_notas: "Otrosnotas",
        enfermedades_cronicas_no_transmisibles_cancerenfermedades_croni:
          "Enfermedades cronicas no transmisibles cancer en enfermedades croni",
        enfermedades_cronicas_no_transmisibles_enfermedad_pulmonar_cron:
          "Enfermedades cronicas no transmisibles enfermedad pulmonar cron",
        enfermedades_cronicas_no_transmisibles_diabetes_mellitus_tipo_2:
          "Enfermedades cronicas no transmisibles diabetes mellitus tipo 2",
        infancia_0_11_asiste_programa_crecimiento_desarrollo:
          "Infancia 0 11 asiste programa crecimiento desarrollo",
        infancia_0_11_recibio_lactancia_materna_exclusiva_6_meses:
          "Infancia 0 11 recibio lactancia materna exclusiva 6 meses",
        infancia_0_11_presenta_carne_vacunas:
          "Infancia 0 11 presenta carne vacunas",
        infancia_0_11_cuenta_esquema_vacunacion_completo:
          "Infancia 0 11 cuenta esquema vacunacion completo",
        infancia_0_11_sennales_evidente_maltrato:
          "Infancia 0 11 señales evidente maltrato",
        infancia_0_11_recibe_micronutrientes:
          "Infancia 0 11 recibe micronutrientes",
        infancia_0_11_hizo_examen_agudeza_visual:
          "Infancia 0 11 hizo examen agudeza visual",
        infancia_0_11_asistio_consulta_odontologica:
          "Infancia 0 11 asistio consulta odontologica",
        infancia_0_11_fue_desparacitado: "Infancia 0 11 fue desparacitado",
        infancia_0_11_presenta_alteracion_enfermedad:
          "Infancia 0 11 presenta alteracion enfermedad",
        infancia_0_11_presenta_alteracion_enfermedad_cual:
          "Infancia 0 11 presenta alteracion enfermedad cual",
        adolecencia_12_17_asiste_control_programa_adolescente:
          "Adolecencia 12 17 asiste control programa adolescente",
        adolecencia_12_17_examen_hemoglobina:
          "Adolecencia 12 17 examen hemoglobina",
        adolecencia_12_17_examen_agudeza_visual:
          "Adolecencia 12 17 examen agudeza visual",
        adolecencia_12_17_alteracion_enfermedad:
          "Adolecencia 12 17 alteracion enfermedad",
        adolecencia_12_17_asistio_consulta_odontológica:
          "Adolecencia 12 17 asistio consulta odontológica",
        adolecencia_12_17_aplicado_sellantes:
          "Adolecencia 12 17 aplicado sellantes",
        adolecencia_12_17_desparasitado: "Adolecencia 12 17 desparasitado",
        adolecencia_12_17_sennal_maltrato: "Adolecencia 12 17 señal maltrato",
        adolecencia_12_17_planificacion_familiar:
          "Adolecencia 12 17 planificacion familiar",
        adolecencia_12_17_alteracion_enfermedad_cual:
          "Adolecencia 12 17 alteracion enfermedad cual",
        juventud_adultez_18_59_control_joven:
          "Juventud adultez 18 59 control joven",
        juventud_adultez_18_59_asiste_consulta_odontologica:
          "Juventud adultez 18 59 asiste consulta odontologica",
        juventud_adultez_18_59__citologia: "Juventud adultez 18 59 citologia",
        juventud_adultez_18_59_examen_mama:
          "Juventud adultez 18 59 examen mama",
        juventud_adultez_18_59_mamografia: "Juventud adultez 18 59 mamografia",
        juventud_adultez_18_59_examen_antigeno:
          "Juventud adultez 18 59 examen antigeno",
        juventud_adultez_18_59_tacto_rectal:
          "Juventud adultez 18 59 tacto rectal",
        juventud_adultez_18_59_examen_materia_fecal:
          "Juventud adultez 18 59 examen materia fecal",
        juventud_adultez_18_59_alteracion_enfermedad:
          "Juventud adultez 18 59 alteracion enfermedad",
        juventud_adultez_18_59_examen_sangre_riesgo_cardiovascular:
          "Juventud adultez 18 59 examen sangre riesgo cardiovascular",
        juventud_adultez_18_59_programa_planificacion_familiar:
          "Juventud adultez 18 59 programa planificacion familiar",
        juventud_adultez_18_59__metodos_planificacion_familiar:
          "Juventud adultez 18 59 metodos planificacion familiar",
        juventud_adultez_18_59__victima_violencia:
          "Juventud adultez 18 59 victima violencia",
        juventud_adultez_18_59_alteracion_enfermedad_cual:
          "Juventud adultez 18 59 alteracion enfermedad cual",
        vejez_mayor_60_asiste_control_adulto_mayor:
          "Vejez mayor 60 asiste control adulto mayor",
        vejez_mayor_60_consulta_odontologica:
          "Vejez mayor 60 consulta odontologica",
        vejez_mayor_60_citologia: "Vejez mayor 60 citologia",
        vejez_mayor_60_examen_mama: "Vejez mayor 60 examen mama",
        vejez_mayor_60__mamografia: "Vejez mayor 60 mamografia",
        vejez_mayor_60_examen__antigeno: "Vejez mayor 60 examen antigeno",
        vejez_mayor_60_tacto_rectal: "Vejez mayor 60 tacto rectal",
        vejez_mayor_60_examen_materia_fecal:
          "Vejez mayor 60 examen materia fecal",
        vejez_mayor_60_examen_sangre_cardiovascular:
          "Vejez mayor 60 examen sangre cardiovascular",
        vejez_mayor_60_asiste_programa_planificacion_familiar:
          "Vejez mayor 60 asiste programa planificacion familiar",
        vejez_mayor_60_utiliza_metodos_planificacion_familiar:
          "Vejez mayor 60 utiliza metodos planificacion familiar",
        vejez_mayor_60_victima_violencia: "Vejez mayor 60 victima violencia",
        mujer_embaraza_asiste_controles_prenatales:
          "Mujer embarazada asiste controles prenatales",
        mujer_embaraza_examenes_sangre: "Mujer embarazada examenes de sangre",
        mujer_embaraza_ecografias: "Mujer embarazada ecografias",
        mujer_embaraza_multivitaminicos: "Mujer embarazada multivitaminicos",
        mujer_embaraza_curso_maternidad: "Mujer embarazada curso maternidad",
        mujer_embaraza_embarazo_alto_riesgo:
          "Mujer embarazada embarazo alto riesgo",
        recien_nacido_0_5_dias_parto: "Recien nacido 0 5 dias parto",
        recien_nacido_0_5_dias_atendio_parto:
          "Recien nacido 0 5 dias atendio parto",
        recien_nacido_0_5_dias_aplicaron_vacunas_bebe:
          "Recien nacido 0 5 dias aplicaron vacunas bebe",
        recien_nacido_0_5_dias_asistio_control_recien_nacido:
          "Recien nacido 0 5 dias asistio control recien nacido",
        recien_nacido_0_5_dias__certificado_recien_nacido:
          "Recien nacido 0 5 dias certificado recien nacido",
        promocion_salud_prevencion_recibio_educacion_salud:
          "Promocion salud prevencion recibio educacion salud",
        promocion_salud_prevencion_aplica_demanda_inducida:
          "Promocion salud prevencion aplica demanda inducida",
        promocion_salud_prevencion_orientaciones_salud_visita:
          "Promocion salud prevencion orientaciones salud visita",
        tiene_enfermedades_salud_mental: "Tiene enfermedades salud mental",
        esta_empleado_actualmente: "Está empleado actualmente",
      },
    };
  },

  mounted() {
    console.log(this.data);
  },
  methods: {
    _calculateAge(birthday) {
      // birthday is a date
      let ageDifMs = Date.now() - birthday.getTime();
      let ageDate = new Date(ageDifMs); // miliseconds from epoch
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    },
  },
};
</script>
<style lang="css" scoped>
* {
  margin: 1em;
  box-sizing: border-box;
  letter-spacing: 0.1em;
}

#family-card {
  display: none;
}

.grid {
  display: flex;
  width: 100%;
  margin: auto 2em;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}

.element1 {
  width: 45%;
  font-weight: 800;
}

.element2 {
  width: 45%;
  font-weight: 800;
}

.element3 {
  width: 100%;
  text-align: center;
  margin: 0.5em 0;
}

.element4 {
  width: 100%;
  margin: 1em 0;
}

.element5 {
  width: 100%;
  text-align: center;
  font-weight: 600;
}

.element6 {
  width: 100%;
  text-align: center;
  margin: 0.5em 0;
  font-weight: 600;
}

.element7 {
  width: 100%;
  text-align: center;
  margin: 0.5em 0;
}

.element7 span {
  font-weight: 500;
  color: #990000;
}

.table1 {
  width: 100%;
  text-align: center;
  /* margin: 1.5em 0; */
  display: flex;
  flex-direction: column;
  align-items: center;
}

.table1 span {
  font-size: 24px;
  font-weight: bold;
}

.table1 table {
  width: 80%;
  margin: 0.5em 0;
}

.element8 {
  width: 100%;
  text-align: center;
}

.element8 span {
  font-size: 24px;
  font-weight: bold;
}

.element8 p {
  text-align: left;
  font-weight: bold;
  margin: 0.3em;
}

.container_info {
  width: 100%;
}

.container_info .title {
  text-align: left;
  font-weight: bold;
  margin: 1em 0em;
}

.container_info .box {
  margin-top: 1em;
}

.container_info .box .info {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: stretch;
  align-content: center;
  justify-content: center;
  margin: 0px;
}

.container_info .box .info div {
  width: 35%;
  border: 1px solid #333;
  margin: 0px;
  padding-left: 0.3em;
  font-size: 18px;
}

.container_info2 {
  width: 100%;
}

.container_info2 .title {
  text-align: left;
  font-weight: bold;
  margin: 1em 0em;
}

.container_info2 .box {
  margin-top: 1em;
}

.container_info2 .box .info {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0px;
}

.container_info2 .box .info div {
  width: 17.5%;
  border: 1px solid #333;
  margin: 0px;
  padding-left: 0.3em;
  font-size: 18px;
}

.members {
  display: flex;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.members .h2-members {
  font-size: 24px;
  font-weight: bold;
  margin: 1em 0em;
}

.members .container_member {
  text-align: left;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.members .container_member p {
  margin: 0.3em;
}

.members .container_member .title-member {
  font-weight: 800;
  font-size: 18px;
}

.members .container_member .table-position {
  display: flex;
  justify-content: center;
}

.members,
.container_member .text-member {
  font-weight: 800;
  font-size: 15px;
  margin: 0px;
}

.members .container_member table {
  width: 80%;
  margin: 0.5em 0;
}
</style>