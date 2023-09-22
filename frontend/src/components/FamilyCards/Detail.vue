<template>
  <div>
    <b-row>
      <b-col lg="12" class="text-right">
        <b-button
          v-if="pdf"
          class="ml-2"
          variant="danger"
          :disabled="loading"
          size="sm"
          title="Exportar en PDF"
          @click.prevent="generatePdf()"
        >
          Descargar PDF
        </b-button>
        <b-button class="mr-1" variant="link" @click="back" v-if="backButton">
          Volver
        </b-button>
      </b-col>
    </b-row>
    <b-row v-if="loading">
      <loading />
    </b-row>
    <b-row v-if="!loading && data">
      <b-col lg="12">
        <h2>Tarjeta Familiar {{ id }}</h2>
      </b-col>
      <b-col lg="6">
        <div v-if="data">
          <ul>
            <div v-for="(item, index) in items" :key="index">
              <span v-if="data[item]">
                <b-icon icon="check" scale="2" variant="success"></b-icon>
                {{ formatFirstUpper(formatReplace(item)) }}
              </span>
            </div>
          </ul>
        </div>
      </b-col>
      <b-col lg="6">
        <div v-if="data">
          <ul>
            <div v-for="(item, index) in items" :key="index">
              <span v-if="!data[item]">
                <b-icon icon="x" scale="2" variant="danger"></b-icon>
                {{ formatFirstUpper(formatReplace(item)) }}
              </span>
            </div>
          </ul>
        </div>
      </b-col>
      <b-col lg="12">
        <h3>Condiciones de la vivienda</h3>
        <div class="row">
          <b-col md="3">
            <strong>Ficha:</strong>
            {{ data.ficha }}
          </b-col>
          <b-col md="3">
            <strong>Nivel:</strong>
            {{ data.nivel }}
          </b-col>
          <b-col md="3">
            <strong>Puntaje:</strong>
            {{ data.puntaje }}
          </b-col>
          <b-col md="3">
            <strong>Estrato Socioeconomico:</strong>
            {{ data.estrato_socioeconomico }}
          </b-col>
        </div>
        <div class="row">
          <b-col md="3">
            <strong>Tipo Vivienda:</strong>
            {{ data.tipo_vivienda }}
          </b-col>
          <b-col md="3">
            <strong>Dimensiones Vivienda:</strong>
            {{ data.dimensiones_vivienda }}
          </b-col>
          <b-col md="3">
            <strong>Tenencia Vivienda:</strong>
            {{ data.tenencia_vivienda }}
          </b-col>
          <b-col md="3">
            <strong>Condiciones Vivienda:</strong>
            {{ data.condiciones_vivienda }}
          </b-col>
        </div>
        <div class="row">
          <b-col md="3">
            <strong>Ubicacion Vivienda:</strong>
            {{ data.ubicacion_vivienda }}
          </b-col>
          <b-col md="3">
            <strong>Direccion de la Vivienda:</strong>
            {{ data.direccion }}
          </b-col>
          <b-col md="3">
            <strong>Material del Techo:</strong>
            {{ data.material_techo }}
          </b-col>
          <b-col md="3">
            <strong>Material de las Paredes:</strong>
            {{ data.material_paredes }}
          </b-col>
        </div>
        <div class="row">
          <b-col md="3">
            <strong>Alumbrado de la Vivienda:</strong>
            {{ data.alumbrado }}
          </b-col>
          <b-col md="3">
            <strong>Numero de Habitaciones:</strong>
            {{ data.habitaciones }}
          </b-col>
          <b-col md="3">
            <strong>Numero de Dormitorios:</strong>
            {{ data.dormitorios }}
          </b-col>
          <b-col md="3">
            <strong>Personas en Dormitorios:</strong>
            {{ data.personas_domitorio }}
          </b-col>
        </div>
        <div class="row">
          <b-col md="3">
            <strong>Sanitario Vivienda:</strong>
            {{ data.tipo_sanitario }}
          </b-col>
          <b-col md="3">
            <strong>Medios para Cocinar:</strong>
            {{ data.cocinar }}
          </b-col>
        </div>
      </b-col>
      <b-col lg="12" class="mt-3" v-if="data">
        <h3>Mortalidad</h3>
        <b-table-simple bordered hover small caption-top responsive>
          <b-thead head-variant="dark">
            <b-tr>
              <b-th>Nombre completo</b-th>
              <b-th>Fecha Nacimiento</b-th>
              <b-th>Fecha Fallecimiento</b-th>
              <b-th>Edad Fallecimiento</b-th>
              <b-th>Causa</b-th>
            </b-tr>
          </b-thead>
          <b-tbody>
            <b-tr
              v-for="(mortalidad, index_mortalidad) in mortalidades"
              :key="index_mortalidad"
            >
              <b-td>{{ mortalidad.fullnombre }}</b-td>
              <b-td>{{ formatDate(mortalidad.nacimiento) }}</b-td>
              <b-td>{{ formatDate(mortalidad.fallecimiento) }}</b-td>
              <b-td>{{ mortalidad.edad }}</b-td>
              <b-td>{{ mortalidad.causa }}</b-td>
            </b-tr>
          </b-tbody>
        </b-table-simple>
      </b-col>
      <b-col lg="12">
        <b-list-group>
          <b-list-group-item
            v-for="(registro, index_registro) in registrosPersonales"
            :key="index_registro"
          >
            <h3>{{ registro.tbl_persona.fullnombre }}</h3>
            <ul>
              <li>
                Frecuencia Cardia astolica:
                {{ registro.signos_vitales_tension_arterial_sistolica }}
              </li>
              <li>
                Frecuencia Cardia distolica:
                {{ registro.signos_vitales_tension_arterial_diastolica }}
              </li>
            </ul>
            <h5>Enfermedades</h5>
            <ul
              v-for="enfermedad in registro.tbl_enfermedades"
              :key="enfermedad.id + enfermedad.codigo"
            >
              <li>{{ enfermedad.nombre }}</li>
            </ul>
            <div v-if="!registro.tbl_enfermedades.length" class="mb-3">
              No tiene
            </div>
            <h5>Medicamentos</h5>
            <ul
              v-for="medicamento in registro.tbl_medicamentos"
              :key="medicamento.id + medicamento.codigo"
            >
              <li>{{ medicamento.nombre }}</li>
            </ul>
            <div v-if="!registro.tbl_medicamentos.length" class="mb-3">
              No tiene
            </div>
          </b-list-group-item>
        </b-list-group>
      </b-col>
      <family-card-pdf
        :data="data"
        :items="items"
      ></family-card-pdf>
    </b-row>
    <b-row v-if="data">
      <b-col lg="12" class="py-3">
        <h4>Ubicación en mapa</h4>
      </b-col>
      <b-col lg="12" sm="12" style="height: 400px; overflow: auto">
        <l-map
          :zoom="zoom"
          :center="center"
          :options="mapOptions"
          @update:center="centerUpdate"
          @update:zoom="zoomUpdate"
        >
          <l-tile-layer :url="url" :attribution="attribution" />

          <l-marker
            :lat-lng="convertLatLng(data.latitud, data.longitud)"
            :visible="true"
            :draggable="false"
          >
            <l-icon :icon-url="customMarker"></l-icon>
            <l-popup>
              <div>
                <p>
                  <strong>Tarjeta Familiar {{ data.codigo }}</strong
                  ><br />
                  <strong>Latitud: {{ data.latitud }}</strong><br />
                  <strong>Longitud: {{ data.longitud }}</strong>
                </p>
              </div>
            </l-popup>
          </l-marker>
        </l-map>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import jsPDF from "jspdf";
import "jspdf-autotable";
import html2canvas from 'html2canvas';
import { latLng, icon } from "leaflet";
import customMarker from "../../assets/img/icon.png";

export default {
  props: {
    id: { required: true },
    pdf: { required: true },
    backButton: { required: true },
    clearData: { required: false },
  },
  components: {
    loading: () => import("../Loading/Index"),
    "family-card-pdf": () => import("../../pages/FamilyCards/FamilyCardPdf"),
  },
  data: () => ({
    loading: false,
    data: null,
    mortalidades: [],
    registrosPersonales: [],
    items: [
      "iluminacion_adecuada",
      "ventilacion_adecuada",
      "roedores",
      "reservorios_de_agua",
      "anjeos_puertas_y_ventanas",
      "uso_de_toldillos",
      "material_predominante_en_piso_techo_paredes",
      "con_letrina_pero_alguien_no_la_usa",
      "plagas",
      "convivencia_inadecuada_con_animales",
      "mala_disposicion_de_plaguicidas",
      "contaminacion_del_agua",
      "accidentes_ofidico",
      "usan_plaguicidas",
      "no_siempre_hierve_el_agua",
      "areas_endemicas_de_enfermedades_de_salud_publica",
      "mala_higiene_en_preparacion_de_alimentos",
      "piojos",
      "parasitos",
      "acaros",
      "zancudos",
    ],

    //Mapa
    customMarker,
    zoom: 6,
    center: latLng(4.570868, -74.297333),
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    attribution:
      '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    currentZoom: 1.5,
    currentCenter: latLng(4.570868, -74.297333),
    showParagraph: false,
    mapOptions: {
      zoomSnap: 0.5,
    },
    showMap: true,
    icon: icon({
      iconUrl: "../../assets/icon.png",
      iconSize: [32, 37],
      iconAnchor: [16, 37],
    }),
    markers: [],
  }),
  methods: {
    index() {
      this.loading = true;
      this.data = null;

      this.$http
        .detalleTarjeta(this.id)
        .then((res) => {
          this.data = res.data.data;
          this.mortalidades = this.data.tbl_mortalidades;
          this.registrosPersonales = this.data.tbl_registros_personales;
          this.loading = false;
        })
        .catch((err) => {
          console.log(err);
          this.loading = false;
        });
    },
    generatePdf() {
      const doc = new jsPDF();

      let family = document.getElementById('family-card');
      family.style.display = 'block';

      // doc.autoTable({
      //   html: "#family-card",
      //   useCss: true,
      //   tableWidth: "auto",
      //   styles: { cellPadding: 0.5, fontSize: 8 },
      //   columnStyles: {},
      //   margin: { top: 15, right: 10, bottom: 10, left: 10 },
      //   theme: "plain",
      // });

      // doc.save("Tarjeta-Familiar.pdf");

      html2canvas(family).then( (canvas) => {
        let imgData = canvas.toDataURL('image/png');

				let imgWidth = 210;
				let pageHeight = 295;

				let imgHeight = canvas.height * imgWidth / canvas.width;
				let heightLeft = imgHeight;

				let position = 0;

          doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;

          while (heightLeft >= 0) {
              position = heightLeft - imgHeight;
              doc.addPage();
              doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
              heightLeft -= pageHeight;
          }

          doc.save('Tarjeta-Familiar.pdf');
          family.style.display = 'none';

			});
    },
    convertLatLng(lat, lng) {
      return latLng(lat, lng);
    },
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    },
  },
  watch: {
    id() {
      this.index();
    },
  },
  mounted() {
    this.index();
  },
};
</script>