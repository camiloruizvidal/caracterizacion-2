<template>
  <b-table-simple id="family-card">
    <b-thead> </b-thead>
    <b-tbody>
      <b-tr>
        <b-td colspan="2" class="text-center">
          <span class="font-weight-bold"
            >Fecha: {{ new Date().toDateString() }}</span
          >
        </b-td>
        <b-td colspan="2" class="text-center font-weight-bold">
          Tarjeta familiar N {{ data.codigo }}
        </b-td>
      </b-tr>
      <b-tr>
        <b-td colspan="4" class="text-center">
          <span class="text-lg">SICP</span>
        </b-td>
      </b-tr>
      <b-tr>
        <b-td colspan="4" class="text-center">
          <span class="text-lg"
            >SISTEMA DE INFORMACIÓN CARACTERIZACIÓN DE LA POBLACIÓN</span
          >
        </b-td>
      </b-tr>
      <b-tr>
        <b-td colspan="4" class="text-center">
          <span class="text-lg text-danger"
            >Puerto Tejada - Villa Rica - Padilla</span
          >
        </b-td>
      </b-tr>
      <b-tr>
        <b-td colspan="4" class="text-center">
          <h3 class="font-weight-bold">Datos generales</h3>
          <!-- {{ data.tipo_vivienda }} -->
        </b-td>
      </b-tr>

      <table border="2">
        <thead>
          <b-tr class="border border-dark">
            <b-th class="text-center"> Fecha de registro </b-th>
            <b-th class="text-center"> Responsable </b-th>
            <b-th class="text-center"> Fecha próxima visita </b-th>
            <b-th class="text-center"> Zona </b-th>
            <b-th class="text-center"> Departamento </b-th>
            <b-th class="text-center"> Municipio </b-th>
            <b-th class="text-center"> Corregimiento </b-th>
            <b-th class="text-center"> Vereda </b-th>
          </b-tr>
        </thead>
        <tbody>
          <b-tr class="border border-dark">
            <b-td class="text-center">
              {{ new Date(data.created_at).toString() }}
            </b-td>
            <b-td class="text-center"> </b-td>
            <b-td class="text-center"> </b-td>
            <b-td class="text-center"> N{{ data.zona }} </b-td>
            <b-td class="text-center">
              {{
                data.tbl_departamento
                  ? data.tbl_departamento.nombre
                  : "No posee"
              }}
            </b-td>
            <b-td class="text-center">
              {{ data.tbl_municipio ? data.tbl_municipio.nombre : "No posee" }}
            </b-td>
            <b-td class="text-center">
              {{
                data.tbl_corregimiento
                  ? data.tbl_corregimiento.nombre
                  : "No posee"
              }}
            </b-td>
            <b-td class="text-center">
              {{ data.tbl_vereda ? data.tbl_vereda.nombre : "No posee" }}
            </b-td>
          </b-tr>
        </tbody>
      </table>

      <b-tr class="text-center">
        <b-td colspan="2">
          <strong> Fecha: {{ new Date(data.created_at).toString() }} </strong>
        </b-td>
        <b-td colspan="2">
          <strong> Tatjeta familiar N {{ data.codigo }} </strong>
        </b-td>
      </b-tr>
      <b-tr>
        <b-td colspan="2">
          <ul>
            <div v-for="(item, index) in items" :key="index">
              <span v-if="data[item]">
                {{ formatFirstUpper(formatReplace(item)) }}: Si <br />
              </span>
            </div>
          </ul>
        </b-td>
        <b-td colspan="2">
          <ul>
            <div v-for="(item, index) in items" :key="index">
              <span v-if="!data[item]">
                {{ formatFirstUpper(formatReplace(item)) }}: No <br />
              </span>
            </div>
          </ul>
        </b-td>
      </b-tr>
      <b-tr>
        <b-td colspan="4">
          <h3>Condiciones de la vivienda</h3>
        </b-td>
      </b-tr>
      <b-tr>
        <b-td>
          <b-col>
            <strong>Ficha:</strong>
            {{ data.ficha ? data.ficha : "No posee" }}
          </b-col>
          <b-col>
            <strong>Nivel:</strong>
            {{ data.nivel ? data.nivel : "No posee" }}
          </b-col>
          <b-col>
            <strong>Puntaje:</strong>
            {{ data.puntaje ? data.puntaje : "No posee" }}
          </b-col>
          <b-col>
            <strong>Paciente con portabilidad:</strong>
            {{ data.pacienteportabilidad ? "Si" : "No" }}
          </b-col>
          <b-col>
            <strong>Paciente con cambio de domicilio:</strong>
            {{ data.pacientecambiodomicilio ? "Si" : "No" }}
          </b-col>
          <b-col>
            <strong>Estrato Socioeconomico:</strong>
            {{
              data.estrato_socioeconomico
                ? data.estrato_socioeconomico
                : "No posee"
            }}
          </b-col>
        </b-td>
        <b-td>
          <b-col>
            <strong>Tipo Vivienda:</strong>
            {{ data.tipo_vivienda ? data.tipo_vivienda : "No posee" }}
          </b-col>
          <b-col>
            <strong>Dimensiones Vivienda:</strong>
            {{
              data.dimensiones_vivienda ? data.dimensiones_vivienda : "No posee"
            }}
          </b-col>
          <b-col>
            <strong>Tenencia Vivienda:</strong>
            {{ data.tenencia_vivienda ? data.tenencia_vivienda : "No posee" }}
          </b-col>
          <b-col>
            <strong>Tipo de sanitario:</strong>
            {{ data.tipo_sanitario ? data.tipo_sanitario : "No posee" }}
          </b-col>
          <b-col>
            <strong>Condiciones Vivienda:</strong>
            {{
              data.condiciones_vivienda ? data.condiciones_vivienda : "No posee"
            }}
          </b-col>
        </b-td>
        <b-td>
          <b-col>
            <strong>Ubicacion Vivienda:</strong>
            {{ data.ubicacion_vivienda ? data.ubicacion_vivienda : "No posee" }}
          </b-col>
          <b-col>
            <strong>Que utiliza para cocinar:</strong>
            {{ data.cocinar ? data.cocinar : "No posee" }}
          </b-col>
          <b-col>
            <strong>Direccion de la Vivienda:</strong>
            {{ data.direccion ? data.direccion : "No posee" }}
          </b-col>
          <b-col>
            <strong>Barrio:</strong>
            {{
              data.tbl_registros_personales.barrio_id
                ? data.tbl_registros_personales.barrio_id
                : "No posee"
            }}
          </b-col>
          <b-col>
            <strong>Material del Techo:</strong>
            {{ data.material_techo }}
          </b-col>
          <b-col>
            <strong>Material de las Paredes:</strong>
            {{ data.material_paredes }}
          </b-col>
        </b-td>
        <b-td>
          <b-col>
            <strong>Alumbrado de la Vivienda:</strong>
            {{ data.alumbrado }}
          </b-col>
          <b-col>
            <strong>Numero de Habitaciones:</strong>
            {{ data.habitaciones }}
          </b-col>
          <b-col>
            <strong>Numero de Dormitorios:</strong>
            {{ data.dormitorios }}
          </b-col>
          <b-col>
            <strong>Personas en Dormitorios:</strong>
            {{ data.personas_domitorio }}
          </b-col>
          <b-col>
            <strong>Zona:</strong>
            {{ data.zona }}
          </b-col>
          <b-col>
            <strong>Departamento:</strong>
            {{
              data.tbl_departamento ? data.tbl_departamento.nombre : "No posee"
            }}
          </b-col>
          <b-col>
            <strong>Municipio:</strong>
            {{ data.tbl_municipio ? data.tbl_municipio.nombre : "No posee" }}
          </b-col>
          <b-col>
            <strong>Corregimiento:</strong>
            {{
              data.tbl_corregimiento
                ? data.tbl_corregimiento.nombre
                : "No posee"
            }}
          </b-col>
          <b-col>
            <strong>Veredas:</strong>
            {{ data.tbl_vereda ? data.tbl_vereda.nombre : "No posee" }}
          </b-col>
          <b-col>
            <strong>Telefono:</strong>
            {{ data.telefono }}
          </b-col>
        </b-td>
      </b-tr>
      <b-tr>
        <b-td colspan="2">
          <b-col>
            <strong>Donde se toma el agua:</strong>
            {{ data.donde_toma_agua }}
          </b-col>
          <b-col>
            <strong>La basura es:</strong>
            {{ data.la_basura_es }}
          </b-col>
          <b-col>
            <strong>¿Iluminación adecuada?</strong>
            {{ data.iluminacion_adecuada ? "Si" : "No" }}
          </b-col>
          <b-col>
            <strong>¿Ventilación adecuada?</strong>
            {{ data.ventilacion_adecuada ? "Si" : "No" }}
          </b-col>
          <b-col>
            <strong>¿Roedores?</strong>
            {{ data.roedores ? "Si" : "No" }}
          </b-col>
          <b-col>
            <strong>¿Posee reservorios de agua?</strong>
            {{ data.reservorios_de_agua ? "Si" : "No" }}
          </b-col>
          <b-col>
            <strong>¿Posee anjeos puertas y ventanas?</strong>
            {{ data.anjeos_puertas_y_ventanas ? "Si" : "No" }}
          </b-col>
          <b-col>
            <strong>¿Posee uso de toldillos?</strong>
            {{ data.uso_de_toldillos ? "Si" : "No" }}
          </b-col>
          <b-col>
            <strong>¿Plagas?</strong>
            {{ data.plagas ? "Si" : "No" }}
          </b-col>
          <b-col>
            <strong>¿Convivencia inadecuada con animales?</strong>
            {{ data.convivencia_inadecuada_con_animales ? "Si" : "No" }}
          </b-col>
        </b-td>
        <b-td>
          <b-col>
            <strong>¿Existe mala disposición de plasguicidas?</strong>
            {{ data.mala_disposicion_de_plaguicidas ? "Si" : "No" }}
          </b-col>
          <b-col>
            <strong>¿Accidentes ofídicos?</strong>
            {{ data.accidentes_ofidico ? "Si" : "No" }}
          </b-col>
          <b-col>
            <strong>¿Usan plaguicidas?</strong>
            {{ data.usan_plaguicidas ? "Si" : "No" }}
          </b-col>
          <b-col>
            <strong>¿Existe mala higiene de preparación de alimentos?</strong>
            {{ data.mala_higiene_en_preparacion_de_alimentos ? "Si" : "No" }}
          </b-col>
          <b-col>
            <strong>PIOJOS</strong>
            {{ data.piojos ? "Si" : "No" }}
          </b-col>
          <b-col>
            <strong>ZANCUDOS</strong>
            {{ data.zancudos ? "Si" : "No" }}
          </b-col>
          <b-col>
            <strong>ACAROS</strong>
            {{ data.acaros ? "Si" : "No" }}
          </b-col>
        </b-td>
        <b-td>
          <b-col>
            <strong>¿Morbilidad en los últimos 15 días?</strong>
            {{ data.morbilidad_presento_15_dias ? "Si" : "No" }}
          </b-col>
          <b-col>
            <strong>¿Presentó Morbilidad?</strong>
            {{
              data.morbilidad_presento ? data.morbilidad_presento : "No posee"
            }}
          </b-col>
          <b-col>
            <strong>¿Atendieron morbilidad?</strong>
            {{
              data.morbilidad_atendieron
                ? data.morbilidad_atendieron
                : "No posee"
            }}
          </b-col>
          <b-col>
            <strong>¿Evolucionó morbilidad?</strong>
            {{
              data.morbilidad_evoluciono
                ? data.morbilidad_evoluciono
                : "No posee"
            }}
          </b-col>
        </b-td>
      </b-tr>

      <b-tr>
        <b-td colspan="4">
          <h3>Mortalidad</h3>
        </b-td>
      </b-tr>
      <b-tr>
        <b-td colspan="4">
          <table bordered small responsive v-if="data.tbl_mortalidades.length">
            <thead>
              <b-tr>
                <b-th>Nombre completo</b-th>
                <b-th>Fecha Nacimiento</b-th>
                <b-th>Fecha Fallecimiento</b-th>
                <b-th>Edad Fallecimiento</b-th>
                <b-th>Causa<br /></b-th>
              </b-tr>
            </thead>
            <b-tbody>
              <b-tr
                v-for="(mortalidad, index_mortalidad) in data.tbl_mortalidades"
                :key="index_mortalidad"
              >
                <b-td
                  ><b-col>{{ mortalidad.fullnombre }}</b-col></b-td
                >
                <b-td>{{ formatDate(mortalidad.nacimiento) }}</b-td>
                <b-td>{{ formatDate(mortalidad.fallecimiento) }}</b-td>
                <b-td>{{ mortalidad.edad }}</b-td>
                <b-td>{{ mortalidad.causa }}<br /></b-td>
              </b-tr>
              <b-tr v-if="data.tbl_mortalidades.length == 0">
                <b-td colspan="4" class="text-center">
                  <h5>No hay registro<br /></h5>
                </b-td>
              </b-tr>
            </b-tbody>
          </table>
        </b-td>
      </b-tr>
      <b-tr>
        <b-td colspan="4">
          <b-list-group class="pt-4">
            <b-list-group-item
              v-for="(
                registro, index_registro
              ) in data.tbl_registros_personales"
              :key="index_registro"
            >
              <h3>
                <strong> - {{ registro.tbl_persona.fullnombre }}</strong>
              </h3>
              <br />
              <li>Género: {{ registro.tbl_persona.genero }}</li>
              <br />
              <li>
                ¿Es cabeza de familia?:
                {{ registro.tbl_persona.cabeza_familia ? "Si" : "No" }}
              </li>
              <br />
              <li>
                Tipo de documento: {{ registro.tbl_persona.documento_tipo }}
              </li>
              <br />
              <li>Nro de documento: {{ registro.tbl_persona.documento }}</li>
              <br />
              <li>
                EPS:
                {{
                  registro.tbl_persona.eps_id
                    ? "registro.tbl_persona.eps_id"
                    : "No posee"
                }}
              </li>
              <br />
              <li>Estado civil: {{ registro.tbl_persona.estado_civil }}</li>
              <br />
              <li>
                ¿Con cual etnia se identifica?: {{ registro.tbl_persona.etnia }}
              </li>
              <br />
              <li>Familiaridad: {{ registro.tbl_persona.familiaridad }}</li>
              <br />
              <li>
                Tipo de afiliado: {{ registro.tbl_persona.afiliacion_tipo }}
              </li>
              <br />
              <li>Rango: {{ registro.tbl_persona.rango }}</li>
              <br />
              <li>
                Fecha de nacimiento:
                {{
                  new Date(
                    registro.tbl_persona.fecha_nacimiento
                  ).toLocaleString("es", {
                    weekday: "short",
                    year: "numeric",
                    month: "2-digit",
                    day: "numeric",
                  })
                }}
              </li>
              <br />
              <li>
                Edad:
                {{
                  _calculateAge(new Date(registro.tbl_persona.fecha_nacimiento))
                }}
                años
              </li>
              <br />
              <li>
                Nivel educativo: {{ registro.tbl_persona.nivel_educativo }}
              </li>
              <br />
              <li>Regimen: {{ registro.tbl_persona.regimen }}</li>
              <br />
              <li>
                Grupo poblacional: {{ registro.tbl_persona.grupo_poblacional }}
              </li>
              <br />
              <li>Ocupación: {{ registro.tbl_persona.tipo_ocupacion }}</li>
              <br />
              <ul>
                <li>
                  Frecuencia Cardia astolica:
                  {{ registro.signos_vitales_tension_arterial_sistolica }}
                </li>
                <br />
                <li>
                  Frecuencia Cardia distolica:
                  {{ registro.signos_vitales_tension_arterial_diastolica }}
                </li>
                <li>
                  Frecuencia cardíaca:
                  {{ registro.signos_vitales_frecuencia_cardias }}
                </li>
                <li>
                  Frecuencia respiratoria:
                  {{ registro.signos_vitales_frecuencia_respiratoria }}
                </li>
                <br />
              </ul>
              <h5>Enfermedades</h5>
              <ul
                v-for="enfermedad in registro.tbl_enfermedades"
                :key="enfermedad.id + enfermedad.codigo"
              >
                <li>{{ enfermedad.nombre }}</li>
                <br />
              </ul>
              <div v-if="!registro.tbl_enfermedades.length" class="mb-3">
                No tiene <br />
              </div>
              <h5>Medicamentos</h5>
              <ul
                v-for="medicamento in registro.tbl_medicamentos"
                :key="medicamento.id + medicamento.codigo"
              >
                <li>{{ medicamento.nombre }}</li>
                <br />
              </ul>
              <div v-if="!registro.tbl_medicamentos.length" class="mb-3">
                No tiene <br />
              </div>
              <!-- <hr />
              <div v-if="!registro.tbl_medicamentos.length" class="mb-3">
                No tiene <br />
              </div> -->
              <hr />

              <h5><strong>Grupo de riesgo</strong></h5>
              <br />
              <ul>
                <li>
                  Accidente y enfermedad laboral:
                  {{
                    registro.grupos_riesgo_accidente_y_enfermedad_laboral
                      ? "Si"
                      : "No"
                  }}
                </li>
                <br />
                <li>
                  Alteraciones nutricionales:
                  {{
                    registro.grupos_riesgo_alteraciones_nutricionales
                      ? "Si"
                      : "No"
                  }}
                </li>
                <br />
                <li>
                  Alteraciones y transtornos de la audición y comunicación:
                  {{
                    registro.grupos_riesgo_alteraciones_y_transtornos_de_la_audicion_y_comun
                      ? "Si"
                      : "No"
                  }}
                </li>
                <br />
                <li>
                  Alteraciones y transtornos de la salud bucal:
                  {{
                    registro.grupos_riesgo_alteraciones_y_transtornos_de_la_salud_bucal
                      ? "Si"
                      : "No"
                  }}
                </li>
                <br />
                <li>
                  Alteraciones y transtornos visuales:
                  {{
                    registro.grupos_riesgo_alteraciones_y_transtornos_visuales
                      ? "Si"
                      : "No"
                  }}
                </li>
                <br />
                <li>
                  Cáncer: {{ registro.grupos_riesgo_cancer ? "Si" : "No" }}
                </li>
                <br />
                <li>
                  Enfermedad zoonotica:
                  {{
                    registro.grupos_riesgo_enferemdad_zoonotica ? "Si" : "No"
                  }}
                </li>
                <br />
                <li>
                  Enfermedad cardiovascular atergonica:
                  {{
                    registro.grupos_riesgo_enfermedad_cardiovascular_aterogenica
                      ? "Si"
                      : "No"
                  }}
                </li>
                <br />
                <li>
                  Enfermedad respiratoria cronica:
                  {{
                    registro.grupos_riesgo_enfermedad_respiratoria_cronica
                      ? "Si"
                      : "No"
                  }}
                </li>
                <br />
                <li>
                  Enfermedades huerfanas:
                  {{
                    registro.grupos_riesgo_enfermedades_huerfanas ? "Si" : "No"
                  }}
                </li>
                <br />
                <li>
                  Enfermedades infecciosas:
                  {{
                    registro.grupos_riesgo_enfermedades_infecciosas
                      ? "Si"
                      : "No"
                  }}
                </li>
                <br />
                <li>
                  Materno perinatal:
                  {{ registro.grupos_riesgo_materno_perinatal ? "Si" : "No" }}
                </li>
                <br />
                <li>
                  Problemas de salud mental:
                  {{
                    registro.grupos_riesgo_problemas_de_salud_mental
                      ? "Si"
                      : "No"
                  }}
                </li>
                <br />
                <li>
                  Transtornos degenerativos neuropatías y enfermedades
                  autoinmunes:
                  {{
                    registro.grupos_riesgo_transtornos_degenerativos_neuropatias_y_enfermeda
                      ? "Si"
                      : "No"
                  }}
                </li>
                <br />
                <li>
                  Transtornos asociados al uso de sustancias psicoactivas:
                  {{
                    registro.grupos_riesgo_trastornos_asociados_al_uso_de_sustancias_psicoac
                      ? "Si"
                      : "No"
                  }}
                </li>
                <br />
                <li>
                  Violencia:
                  {{ registro.grupos_riesgo_violencia ? "Si" : "No" }}
                </li>
                <br />

                <li>
                  HTA:
                  {{ registro.enfermedades_no_transmisibles_hta ? "Si" : "No" }}
                </li>
                <br />
                <li>
                  Diabetes:
                  {{
                    registro.enfermedades_no_transmisibles_diabetes
                      ? "Si"
                      : "No"
                  }}
                </li>
                <br />
                <li>
                  Escasa Adherencia tratamiento médico:
                  {{
                    registro.enfermedades_no_transmisibles_escasa_adherencia_tratamiento_med
                      ? "Si"
                      : "No"
                  }}
                </li>
                <br />
                <li>
                  TBC:
                  {{ registro.enfermedades_no_transmisibles_tbc ? "Si" : "No" }}
                </li>
                <br />
                <li>
                  Sin marca BCG en el hombro:
                  {{
                    registro.enfermedades_no_transmisibles_sin_marca_bcg_en_el_hombro
                      ? "Si"
                      : "No"
                  }}
                </li>
                <br />
                <li>
                  Enfermedades de la piel:
                  {{
                    registro.enfermedades_no_transmisibles_enfermedades_de_la_piel
                      ? "Si"
                      : "No"
                  }}
                </li>
                <br />
                <li>
                  Sintomas respiratorias:
                  {{
                    registro.enfermedades_no_transmisibles_sintomas_respiratorios
                      ? "Si"
                      : "No"
                  }}
                </li>
                <br />
                <li>
                  Hombre mayor de 50 años con evaluación de prostata:
                  {{
                    registro.enfermedades_no_transmisibles_hombre_mayor_de_50_annos_con_eval
                      ? "Si"
                      : "No"
                  }}
                </li>
                <br />
                <li>
                  Sin evaluación nutricional:
                  {{
                    registro.enfermedades_no_transmisibles_sin_evaluacion_nutricional
                      ? "Si"
                      : "No"
                  }}
                </li>
                <br />
                <li>
                  Mujer mayor de 45 años sin perfil lipodica:
                  {{
                    registro.enfermedades_no_transmisibles_mujer_mayor_de_45_annos_sin_perfi
                      ? "Si"
                      : "No"
                  }}
                </li>
                <br />
                <li>
                  No adscrito al programa adulto mayor:
                  {{
                    registro.enfermedades_no_transmisibles_no_adscrito_al_programa_adulto_ma
                      ? "Si"
                      : "No"
                  }}
                </li>
                <br />
                <li>
                  Discapacidad psicomotora:
                  {{
                    registro.enfermedades_no_transmisibles_discapacidad_psicomotora
                      ? "Si"
                      : "No"
                  }}
                </li>
                <br />
                <li>
                  Abandono:
                  {{
                    registro.enfermedades_no_transmisibles_abandono
                      ? "Si"
                      : "No"
                  }}
                </li>
                <br />
              </ul>
              <hr />

              <h5><strong>Informe de edades</strong></h5>
              <br />
              <ul>
                <li>
                  ¿Asiste al control de programa adolescente?
                  {{
                    registro.adolecencia_12_17_asiste_control_programa_adolescente
                      ? "Si"
                      : "No"
                  }}
                </li>
                <br />
                <li>
                  ¿Le han tomado el exámen de la hemoglobina? (Solo mujeres):
                  {{
                    registro.adolecencia_12_17_examen_hemoglobina ? "Si" : "No"
                  }}
                </li>
                <br />
                <li>
                  ¿Le han realizado el exámen de agudeza visual?
                  {{
                    registro.adolecencia_12_17_examen_agudeza_visual
                      ? "Si"
                      : "No"
                  }}
                </li>
                <br />
                <li>
                  ¿Actualmente presenta alguna alteración o enfermedad?
                  {{
                    registro.adolecencia_12_17_alteracion_enfermedad
                      ? "Si"
                      : "No"
                  }}
                </li>
                <br />
                <li>
                  ¿En los 12 últimos 12 meses ha asistido a consultas
                  odontológicas?
                  {{
                    registro.adolecencia_12_17_asistio_consulta_odontológica
                      ? "Si"
                      : "No"
                  }}
                </li>
                <br />
                <li>
                  ¿Le han aplicado sellantes o calsas?
                  {{
                    registro.adolecencia_12_17_aplicado_sellantes ? "Si" : "No"
                  }}
                </li>
                <br />
                <li>
                  ¿Ha sido desparasitado o purgado el último año?
                  {{ registro.adolecencia_12_17_desparasitado ? "Si" : "No" }}
                </li>
                <br />
                <li>
                  ¿Tiene alguna señal evidente de maltrato?
                  {{ registro.adolecencia_12_17_sennal_maltrato ? "Si" : "No" }}
                </li>
                <br />

                <li>
                  ¿Utiliza métodos de planificacion familiar?
                  {{
                    registro.adolecencia_12_17_planificacion_familiar
                      ? "Si"
                      : "No"
                  }}
                </li>
                <br />
                <li>
                  ¿Hipertensión arterial?
                  {{
                    registro.adolecencia_12_17_alteracion_enfermedad_cual
                      ? "Si"
                      : "No"
                  }}
                </li>
                <br />
                <li>
                  ¿Cáncer?
                  {{
                    registro.enfermedades_cronicas_no_transmisibles_cancerenfermedades_croni
                      ? "Si"
                      : "No"
                  }}
                </li>
                <br />
                <li>
                  ¿Enfermedad pulmonar crónica?
                  {{
                    registro.enfermedades_cronicas_no_transmisibles_enfermedad_pulmonar_cron
                      ? "Si"
                      : "No"
                  }}
                </li>
                <br />
                <li>
                  ¿Diábetes Melitus tipo 2?
                  {{
                    registro.enfermedades_cronicas_no_transmisibles_diabetes_mellitus_tipo_2
                  }}
                </li>
                <br />
                <li>
                  ¿Ha recibido educación en salud?
                  {{
                    registro.promocion_salud_prevencion_recibio_educacion_salud
                  }}
                </li>
                <br />
                <li>
                  ¿Se le aplica demanda inducida?
                  {{
                    registro.promocion_salud_prevencion_aplica_demanda_inducida
                  }}
                </li>
                <br />
                <li>
                  ¿Se le dió educación y orientaciones en salud durante la
                  visita?
                  {{
                    registro.promocion_salud_prevencion_orientaciones_salud_visita
                  }}
                </li>
                <br />
                <li>Otros notas: {{ registro.otros_notas }}</li>
                <br />
              </ul>
            </b-list-group-item>
          </b-list-group>
        </b-td>
      </b-tr>
    </b-tbody>
  </b-table-simple>
</template>
<script>
export default {
  props: {
    data: { required: true },
    items: { required: true },
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
#family-card {
  display: true;
  font-size: 10px;
  width: 100%;
}
#family-card .table th,
.table td {
  border-top: 0px;
}
</style>