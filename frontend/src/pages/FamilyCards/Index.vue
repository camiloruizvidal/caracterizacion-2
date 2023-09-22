<template>
  <b-card title="Tarjertas Familiares">
    <b-card-text>
      <b-card>
        <b-row>
          <b-col md="12" class="my-2 text-right"> </b-col>
          <b-col md="12" class="mx-auto">
            <b-row>
              <b-col md="6">
                <label>Fecha inicio:</label>
                <b-form-input
                  id="filter-input"
                  v-model="desde"
                  type="date"
                  class="mr-1"
                ></b-form-input>
              </b-col>
              <b-col md="6">
                <label>Fecha fin:</label>
                <b-form-input
                  id="filter-input"
                  v-model="hasta"
                  type="date"
                ></b-form-input>
              </b-col>
              <b-col md="3">
                <label for="input-small">Departamento</label>
                <v-select
                  :loading="loading"
                  name="departamento"
                  label="nombre"
                  :options="departamentos"
                  v-model="selectedDepartamento"
                >
                  <template #spinner="{ loading }">
                    <div
                      v-if="loading"
                      style="border-left-color: rgba(88, 151, 251, 0.71)"
                      class="vs__spinner"
                    ></div>
                  </template>
                </v-select>
              </b-col>
              <b-col md="3">
                <label for="input-small">Municipio</label>
                <v-select
                  :loading="loading"
                  :options="municipios"
                  label="nombre"
                  :reduce="(municipio) => municipio.id"
                  v-model="municipio"
                >
                  <template #spinner="{ loading }">
                    <div
                      v-if="loading"
                      style="border-left-color: rgba(88, 151, 251, 0.71)"
                      class="vs__spinner"
                    ></div>
                  </template>
                </v-select>
              </b-col>
              <b-col md="3">
                <label>Vereda</label>
                <v-select
                  :loading="loading"
                  name="vereda"
                  label="nombre"
                  :options="veredas"
                  v-model="selectedVereda"
                >
                  <template #spinner="{ loading }">
                    <div
                      v-if="loading"
                      style="border-left-color: rgba(88, 151, 251, 0.71)"
                      class="vs__spinner"
                    ></div>
                  </template>
                </v-select>
              </b-col>
              <b-col md="3">
                <label for="input-small">Corregimiento</label>
                <v-select
                  :loading="loading"
                  name="corregimiento"
                  label="nombre"
                  :options="corregimientos"
                  v-model="selectedCorregimiento"
                >
                  <template #spinner="{ loading }">
                    <div
                      v-if="loading"
                      style="border-left-color: rgba(88, 151, 251, 0.71)"
                      class="vs__spinner"
                    ></div>
                  </template>
                </v-select>
              </b-col>
              <b-col md="12">
                <b-button
                  :disabled="validButton || loadingSearch"
                  @click="search"
                  class="mt-3"
                  size="sm"
                >
                  <span v-if="loadingSearch">
                    <b-spinner small label="Loading..."></b-spinner>
                  </span>
                  <span v-else>Buscar</span>
                </b-button>
                <b-button
                  :disabled="validButton || loadingSearch"
                  @click="reset"
                  variant="danger"
                  class="mt-3 ml-1"
                  size="sm"
                >
                  Resetear
                </b-button>
                <download-excel
                  class="mt-3 ml-1 btn btn-sm btn-success"
                  :data="dataExportExcel"
                  :fields="json_fields"
                  :worksheet="'Tarjetas familiares'"
                  :name="'Tarjetas familiares.xls'"
                >
                  <b-icon icon="file-earmark-excel"></b-icon>
                  Exportar
                </download-excel>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-card>
      <b-row>
        <b-col md="12" class="mt-3">
          <b-row>
            <b-col>
              <router-link
                class="mb-1 btn btn-primary"
                variant="secondary"
                :to="{ name: 'ubicaciones' }"
              >
                Visualizar ubicaciones
              </router-link>
            </b-col>
          </b-row>
          <b-table
            :items="items"
            :current-page="currentPage"
            :fields="fields"
            :per-page="perPage"
          >
            <template #cell(fecha_creacion)="data">
              {{ data.item.fecha_creacion | formatDate }}
            </template>
            <template #cell(id)="data">
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
            </template>
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
        { key: "fecha_creacion", label: "Fecha de creacion" },
        { key: "codigo", label: "Codigo tarjeta" },
        { key: "departamento_nombre", label: "Departamento" },
        { key: "municipio_nombre", label: "Municipio" },
        { key: "zona", label: "Zona" },
        { key: "personas_registrada", label: "Personas registrada" },
        { key: "id", label: "Opcion" },
      ],
      items: [],
      currentPage: 1,
      perPage: 20,
      loading: false,
      loadingSearch: false,
      totalRows: 0,
      error: false,
      disabled: true,
      desde: null,
      hasta: null,
      selectedMunicipality: [],
      selectedDepartamento: null,
      municipio: null,
      departamento: null,
      selectedVereda: null,
      vereda: null,
      selectedCorregimiento: null,
      corregimiento: null,
      municipios: [],
      departamentos: [],
      veredas: [],
      corregimientos: [],
      spinner: true,
      dataExportExcel: [],
      json_fields: {},
    };
  },
  computed: {
    validButton() {
      if (
        this.desde ||
        this.hasta ||
        this.municipio ||
        this.vereda ||
        this.corregimiento ||
        this.departamento
      ) {
        return false;
      }

      return true;
    },
  },
  methods: {
    index(data) {
      this.loading = true;
      this.error = false;

      this.fieldsExcel();

      this.$http
        .buscarTarjeta(data)
        .then((res) => {
          this.assignValue(res.data.data.cards);
          this.dataExportExcel = res.data.data.export;
          this.loadingSearch = false;
        })
        .catch((err) => {
          this.error = true;
          this.loadingSearch = true;
          console.log(err);
        });
    },
    async fieldsExcel() {
      if (this.$store.getters.configurations.length == 0) {
        await this.$store.dispatch("listConfigurations");
      }

      const configurations = this.$store.getters.configurations;

      const config_export_excel = configurations.find(
        (item) => item.key === "export_excel_tarjeta_familiar"
      );

      this.json_fields = this.transformInvertJson(config_export_excel.value);
    },
    search() {
      if (this.desde > this.hasta) {
        this.notifyError("Fecha Desde no debe ser mayor que Fecha Hasta");

        return;
      }

      this.loadingSearch = true;

      const data = {};

      const fields = [
        "desde",
        "hasta",
        "municipio",
        "vereda",
        "corregimiento",
        "departamento",
      ];

      for (let i in fields) {
        if (fields[i]) data[fields[i]] = this[fields[i]];
      }

      this.index(data);
    },
    assignValue(data) {
      this.items = [];
      const total = data.length;
      this.items = data;
      this.totalRows = Number(total);
      this.currentPage = 1;
      this.perPage = 20;
      this.loading = false;
    },
    getMunicipios(id) {
      this.$http.municipiosfiltrados(id).then((res) => {
        this.municipios = res.data.data;
      });
    },
    getDepartamentos() {
      this.$http.departamentos().then((res) => {
        this.departamentos = res.data.data;
      });
    },
    getVeredas() {
      this.$http.veredas().then((res) => {
        this.veredas = res.data.data;
      });
    },
    getCorregimientos() {
      this.$http.corregimientos().then((res) => {
        this.corregimientos = res.data.data;
      });
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
    resetVariable(array) {
      this.disabled = true;

      for (let i in array) {
        this[array[i]] = null;
      }
    },
  },
  watch: {
    //currentPage(value) {
    //	this.items = []
    //	this.index(value)
    //},
    //perPage() {
    //	this.items = []
    //	this.index()
    //},
    selectedVereda(val) {
      this.vereda = val.id;
    },
    selectedDepartamento(val) {
      this.departamento = val.id;
      this.getMunicipios(val.id);
    },
    selectedCorregimiento(val) {
      this.corregimiento = val.id;
    },
  },
  mounted() {
    this.index();
    this.getDepartamentos();
    this.getVeredas();
    this.getCorregimientos();
    this.departamento = 19;
    this.getMunicipios(this.departamento);
  },
};
</script>