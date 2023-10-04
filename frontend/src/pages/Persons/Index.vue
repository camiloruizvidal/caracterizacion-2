<template>
  <b-card title="Lista de Personas">
    <b-card-text>
      <b-card>
        <b-row>
          <b-col md="12" class="my-2 text-right"> </b-col>
          <b-col md="12" class="mx-auto">
            <b-row>
              <b-col md="6">
                <label>Rango de edades:</label>
                <v-select
                name="edades"
                v-model="form.rango_edad"
                label="label"
                :options="itemsAges"
                >
                </v-select>
              </b-col>
              <b-col md="6">
                <label for="input-small">Discapacidad</label>
                <v-select
                  name="discapacidad"
                  v-model="form.discapacidad"
                  label="label"
                  :options="itemsDiscapacidad"
                >
                </v-select>
              </b-col>
              <b-col md="4">
                <label>Sexo:</label>
                <v-select
                  name="sexo"
                  v-model="form.sexo"
                  label="label"
                  :options="itemsGenero"
                >
                </v-select>
              </b-col>
              <b-col md="4">
                <label for="input-small">Nro de documento</label>
                <b-form-input
                  v-model="form.documento"
									class="collection-input"
                  name="documento"
									id="document"
									type="text"
									>
								</b-form-input>
              </b-col>
              <b-col md="4" v-if="form.sexo?.value == 'F'">
                <label>¿Es embarazada?</label>
                <v-select
                  name="embarazo"
                  v-model="form.embarazo"
                  label="label"
                  :options="itemsEmbarazo"
                >
                </v-select>
              </b-col>
              <b-col md="12">
                <b-button
                  class="mt-3"
                  size="sm"
                  @click.prevent="buscar()"
                >
                  <span v-if="loadingSearch">
                    <b-spinner small label="Loading..."></b-spinner>
                  </span>
                  <span v-else>Buscar</span>
                </b-button>
                <b-button
                  @click="reset"
                  variant="danger"
                  class="mt-3 ml-1"
                  size="sm"
                >
                  Resetear
                </b-button>
                <download-excel
                  v-if="dataExportExcel.length > 0 ? true : false"
                  class="mt-3 ml-1 btn btn-sm btn-success"
                  :data="dataExportExcel"
                  :fields="json_fields"
                  :worksheet="'Lista de personas'"
                  :name="'Listado de personas.xls'"
                >
                  <b-icon icon="file-earmark-excel"></b-icon>
                  Exportar
                </download-excel>
                <download-excel
                  v-if="itemsPersonasPorBarrios.length > 0 ? true : false"
                  class="mt-3 ml-1 btn btn-sm btn-success"
                  :data="itemsPersonasPorBarrios"
                  :fields="json_fields_2"
                  :worksheet="'Filtro cantidad de personas por barrios'"
                  :name="'PersonasPorBarrios.xls'"
                >
                  <b-icon icon="file-earmark-excel"></b-icon>
                  Exportar personas por barrios
                </download-excel>
                <download-excel
                  v-if="itemsPersonasPorVeredas.length > 0 ? true : false"
                  class="mt-3 ml-1 btn btn-sm btn-success"
                  :data="itemsPersonasPorVeredas"
                  :fields="json_fields_2"
                  :worksheet="'Filtro cantidad de personas por veredas'"
                  :name="'PersonasPorVeredas.xls'"
                >
                  <b-icon icon="file-earmark-excel"></b-icon>
                  Exportar personas por veredas
                </download-excel>
                <download-excel
                  v-if="itemsPersonasPorRegimen.length > 0 ? true : false"
                  class="mt-3 ml-1 btn btn-sm btn-success"
                  :data="itemsPersonasPorRegimen"
                  :fields="json_fields_3"
                  :worksheet="'Filtro cantidad de personas por regimen'"
                  :name="'PersonasPorRegimen.xls'"
                >
                  <b-icon icon="file-earmark-excel"></b-icon>
                  Exportar cantidad por régimen
                </download-excel>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-card>
      <b-row>
        <b-col md="12" class="mt-3">
          <b-table
            :items="items"
            :current-page="currentPage"
            :fields="fields"
            :per-page="perPage"
          >
            <template #cell(nombre_primero)="data">
              {{ data.item.nombre_primero }} {{ data.item.nombre_segundo }}
            </template>
            <template #cell(apellido_primero)="data">
              {{ data.item.apellido_primero }} {{ data.item.apellido_segundo }}
            </template>
            <template #cell(edad)="data">
              {{ _calculateAge(new Date(data.item.fecha_nacimiento)) }}
            </template>
            <template #cell(tipo_ocupacion)="data">
              {{ data.item.tipo_ocupacion != "" ? data.item.tipo_ocupacion : "Sin ocupación" }}
            </template>
            <!-- <template #cell(id)="data">
              <router-link
                class="mr-1"
                variant="link"
                :to="{
                  name: 'tarjetasFamiliaresDetalle',
                  params: {
                    id: data.item.codigo,
                  },
                }"
              >
                Ver detalle
              </router-link>
            </template> -->
          </b-table>
        </b-col>
      </b-row>
      <b-row class="justify-content-lg-end" style="text-align: end">
        <b-col lg="12" md="12">
          <label>
            <small>
              <strong>Filas por página:</strong>
            </small>
          </label>
          <b-form-select
            class="ml-3 mr-3 col-md-1 justify-content-lg-end"
            col-sm-1
            col-xs-2
            v-model="perPage"
            :options="[5, 10, 20, 50, 100, 200]"
          >
          </b-form-select>
          <small>
            <strong>
              {{ currentPage }}
              -
              {{ perPage }} de {{ totalRows }} registros
            </strong>
          </small>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="12" lg="12" sm="12" class="text-right">
          <b-pagination
            v-model="currentPage"
            :total-rows="totalRows"
            :per-page="perPage"
            class="mt-3 text-center"
            align="center"
          ></b-pagination>
        </b-col>
      </b-row>
    </b-card-text>
  </b-card>
</template>
<script>
export default {
  filters: {
    formatDate(value) {
      return value.split("T")[0];
    },
  },
  data() {
    return {
      fields: [
        { key: "nombre_primero", label: "Nombre" },
        { key: "apellido_primero", label: "Apellido" },
        { key: "documento_tipo", label: "Tipo de Documento" },
        { key: "genero", label: "Sexo" },
        { key: "edad", label: "Edad" },
        { key: "tipo_ocupacion", label: "Ocupación" },
      ],
      barrios: [],
      veredas: [],
      items: [],
      itemsPersonasPorBarrios: [],
      itemsPersonasPorVeredas: [],
      itemsPersonasPorRegimen: [],
      currentPage: 1,
      perPage: 20,
      loading: false,
      loadingSearch: false,
      totalRows: 0,
      error: false,
      disabled: true,
      spinner: true,
      dataExportExcel: [],
      json_fields: {
        'Nombre1': 'nombre_primero', 
        'Nombre2': 'nombre_segundo', 
        'Apellido1':'apellido_primero', 
        'Apellido2':'apellido_segundo',
        'Tipo de documento':'documento_tipo',
        'Documento':'documento',
        'Régimen': 'regimen',
        'EPS': 'nombre',
        'Edad': {
          field: 'fecha_nacimiento',
          callback: (value) => {
            let ageDifMs = Date.now() - new Date(value).getTime();
            let ageDate = new Date(ageDifMs); // miliseconds from epoch
            return Math.abs(ageDate.getUTCFullYear() - 1970);
          }
        }, 
        'SEXO(F/M)':'genero', 
        'VEREDA': {
          field: 'vereda_id',
          callback: (value) => {
            if(value) {
              const val = this.veredas.find(item => item.id == value);
              return val.nombre;
            } else {
              return ''
            }
          }
        },
        'BARRIO':{
          field: 'barrio_id',
          callback: (value) => {
            if(value) {
              const val = this.barrios.find(item => item.id == value);
              return val.nombre;
            } else {
              return ''
            }
          }
        },
      },
      // json_fields: {},
      json_fields_2: {
        'Nombre': 'nombre', 
        'Cantidad':'count', 
      },
      json_fields_3: {
        'Nombre': 'nombre', 
        'Cantidad':'cantidad',
        'Porcentaje': {
          field: 'porcentaje',
          callback: (value) => {
            return value + '%';
          }
        }, 
      },
      form: {
        rango_edad: null,
        discapacidad: null,
        sexo: null,
        documento: null,
        embarazo: null
      },
      itemsAges: [
        { value: null, label: 'Selecciona una opción' },
        {
          value: '0-5', label: '0-5',
        },
        {
          value: '6-12', label: '6-12',
        },
        {
          value: '13-17', label: '13-17',
        },
        {
          value: '18-29', label: '18-29',
        },
        {
          value: '30-59', label: '30-59',
        },
        {
          value: '60-100', label: '60-100',
        },
      ],
      itemsGenero: [
        { value: null, label: 'Selecciona una opción' },
        { value: 'M', label: 'Masculino' },
        { value: 'F', label: 'Femenino' },
      ],
      itemsDiscapacidad: [
        {
          value: 'grupos_riesgo_accidente_y_enfermedad_laboral', label: 'Accidente y enfermedad laboral',
        },
        {
          value: 'grupos_riesgo_alteraciones_nutricionales', label: 'Alteraciones nutricionales',
        },
        {
          value: 'grupos_riesgo_alteraciones_y_transtornos_de_la_audicion_y_comun', label: 'Alteraciones y transtornos de la audición y comunicación',
        },
        {
          value: 'grupos_riesgo_alteraciones_y_transtornos_de_la_salud_bucal', label: 'Alteraciones y transtornos de la salud bucal',
        },
        {
          value: 'grupos_riesgo_cancer', label: 'Cáncer',
        },
        {
          value: 'grupos_riesgo_enferemdad_zoonotica', label: 'Enfermedad zoonotica',
        },
        {
          value: 'grupos_riesgo_enfermedad_cardiovascular_aterogenica', label: 'Enfermedad cardiovascular atergonica',
        },
        {
          value: 'grupos_riesgo_enfermedad_respiratoria_cronica', label: 'Enfermedad respiratoria cronica',
        },
        {
          value: 'grupos_riesgo_enfermedades_huerfanas', label: 'Enfermedades huerfanas',
        },
        {
          value: 'grupos_riesgo_enfermedades_infecciosas', label: 'Enfermedades infecciosas',
        },
        {
          value: 'grupos_riesgo_problemas_de_salud_mental', label: 'Problemas de salud mental',
        },
        {
          value: 'grupos_riesgo_transtornos_degenerativos_neuropatias_y_enfermeda', label: 'Transtornos degenerativos neuropatías y enfermedades autoinmunes',
        },
        {
          value: 'grupos_riesgo_trastornos_asociados_al_uso_de_sustancias_psicoac', label: 'Transtornos asociados al uso de sustancias psicoactivas',
        },

        {
          value: 'enfermedades_no_transmisibles_hta', label: 'HTA',
        },
        {
          value: 'enfermedades_no_transmisibles_diabetes', label: 'Diabetes',
        },
        {
          value: 'enfermedades_no_transmisibles_tbc', label: 'TBC',
        },
        {
          value: 'enfermedades_no_transmisibles_enfermedades_de_la_piel', label: 'Enfermedades de la piel',
        },
        {
          value: 'enfermedades_no_transmisibles_sintomas_respiratorios', label: 'Sintomas respiratorias',
        },
        {
          value: 'enfermedades_no_transmisibles_discapacidad_psicomotora', label: 'Discapacidad psicomotora',
        }
      ],
      itemsEmbarazo: [
        { value: null, label: 'Selecciona una opción' },
        { value: 'Si', label: 'Si' },
        { value: 'No', label: 'No' }
      ]
    };
  },
  computed: {},
  methods: {
    index() {
      // this.loading = true;
      // this.error = false;

      // this.fieldsExcel();

      this.$http.getPersonas()
        .then(({ data: { data } }) => {
          this.assignValue(data);
          this.dataExportExcel = data;
        })
        .catch(err => console.log(err));

      // this.$http
      //   .buscarTarjeta(data)
      //   .then((res) => {
      //     this.assignValue(res.data.data.cards);
      //     this.dataExportExcel = res.data.data.export;
      //     this.loadingSearch = false;
      //   })
      //   .catch((err) => {
      //     this.error = true;
      //     this.loadingSearch = true;
      //     console.log(err);
      //   });
    },
    async personasBarrios() {
			this.loading = true
			this.error = false
			this.row = null

			this.$http.getPersonasbarrios()
			.then(res => {
        this.itemsPersonasPorBarrios = res.data.data
				this.loading = false
			})
			.catch(err => {
				this.loading = false
				this.error = true
				console.log(err.response)
			})
		},
    async personasVeredas() {
			this.loading = true
			this.error = false
			this.row = null

			this.$http.getPersonasVeredas()
			.then(res => {
        this.itemsPersonasPorVeredas = res.data.data;
				this.loading = false
			})
			.catch(err => {
				this.loading = false
				this.error = true
				console.log(err.response)
			})
		},
    async personasRegimen() {
			this.loading = true
			this.error = false
			this.row = null

			this.$http.getPersonasRegimen()
			.then(res => {
        this.itemsPersonasPorRegimen = res.data.data;
				this.loading = false
			})
			.catch(err => {
				this.loading = false
				this.error = true
				console.log(err.response)
			})
		},
    assignValue(data) {
      this.items = [];
      const total = data.length;
      this.items = data;
      console.log(data)
      this.totalRows = Number(total);
      this.currentPage = 1;
      this.perPage = 20;
      this.loading = false;
    },
    // async fieldsExcel() {
    //   if (this.$store.getters.configurations.length == 0) {
    //     await this.$store.dispatch("listConfigurations");
    //   }

    //   const configurations = this.$store.getters.configurations;

    //   const config_export_excel = configurations.find(
    //     (item) => item.key === "export_excel_tarjeta_familiar"
    //   );

    //   this.json_fields = this.transformInvertJson(config_export_excel.value);
    // },
    _calculateAge(birthday) { // birthday is a date
      let ageDifMs = Date.now() - birthday.getTime();
      let ageDate = new Date(ageDifMs); // miliseconds from epoch
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    },
    reset() {
      const fields = [
        "desde",
        "hasta",
        "municipio",
        "vereda",
        "corregimiento",
        "departamento",
      ];

      this.resetVariable(fields);

      this.dataExportExcel = [];

      this.index();
    },
    buscar() {
      const data = {
        discapacidad: this.form.discapacidad?.value,
        rango_edad: this.form.rango_edad?.value,
        sexo: this.form.sexo?.value,
        documento: this.form.documento,
        embarazo: this.form.embarazo?.value == 'Si' ? true : false,
      }

      this.$http.getPersonasFiltered(data)
        .then(({ data: { persons } }) => {
          this.items = persons;
          this.dataExportExcel = persons;
        })
        .catch(err => console.log(err));

    },
    async getBarrios() {
			this.loading = true
			this.error = false

			this.$http.barrios()
			.then(res => {
				this.barrios = res.data.data
				this.loading = false
			})
			.catch(err => {
				this.loading = false
				console.log(err.response)
			})
		},
    getVeredas() {
      this.$http.veredas().then((res) => {
        this.veredas = res.data.data;
      });
    },
  },
  watch: {
    'form.sexo': function() {
      if(!this.form.sexo?.value || this.form.sexo?.value == 'M') {
        this.form.embarazo.value = null;
      } else {
        this.form.embarazo.value = 'Si';
      }
    }
  },
  mounted() {
    this.index();
    this.personasBarrios();
    this.personasVeredas();
    this.getVeredas();
    this.getBarrios();
    this.personasRegimen();
    // this.getDepartamentos();
    // this.getVeredas();
    // this.getCorregimientos();
    // this.departamento = 19;
    // this.getMunicipios(this.departamento);
  },
};
</script>