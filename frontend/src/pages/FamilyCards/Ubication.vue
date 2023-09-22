<template>
	<b-card title="Ubicaciones">
		<b-card-text>
			<b-row class="mb-4">
				<b-col md="1">
					<label for="input-small">Departamento</label>
				</b-col>
				<b-col md="2">
					<v-select
							:loading="loading"
							name="departamento"
							label="nombre"
							:options="departamentos"
							v-model="selectedDepartamento">
							<template #spinner="{ loading }">
								<div v-if="loading" style="border-left-color: rgba(88,151,251,0.71)" class="vs__spinner">
								</div>
							</template>
								</v-select>
				</b-col>
				<b-col md="1">
					<label for="input-small">Municipio</label>
				</b-col>
				<b-col md="4">
					<v-select
						:loading="loading"
						name="municipio"
						label="nombre"
						:reduce="municipio => municipio.id"
						:options="municipios"
						v-model="selectedMunicipility">
						<template #spinner="{ loading }">
							<div v-if="loading" style="border-left-color: rgba(88,151,251,0.71)" class="vs__spinner">
							</div>
						</template>
					</v-select>
				</b-col>
			</b-row>
			<b-row>
				<b-col lg="12" sm="12" style="height: 600px; overflow: auto;">
					<l-map
					:zoom="zoom"
					:center="center"
					:options="mapOptions"
					@update:center="centerUpdate"
					@update:zoom="zoomUpdate"
					>
						<l-tile-layer
							:url="url"
							:attribution="attribution"
						/>

						<l-marker
							v-for="marker in markers"
							:lat-lng="convertLatLng(marker)"
							:visible="true"
							:draggable="false"
							:key="marker.id">
							<l-icon :icon-url="customMarker"></l-icon>
							<l-popup>
							<div @click="goToDetail(marker.codigo)">
								<p>
									<strong>Tarjeta Familiar {{marker.codigo}}</strong><br />
									Ver detalle <br />
								</p>
							</div>
							</l-popup>
						</l-marker>
					</l-map>
				</b-col>
			</b-row>
			<b-row class="mt-4">
				<b-col lg="12" sm="12">
					<detail-card
						:id="id"
						:pdf="false"
						:backButton="false"
						v-if="id > 0" />
				</b-col>
			</b-row>
		</b-card-text>
	</b-card>

</template>
<script>
import { latLng, icon } from "leaflet";
import customMarker from '../../assets/img/icon.png'

export default {
	components: {
		'detail-card': () => import('../../components/FamilyCards/Detail')
	},
	data() {
		return {
			customMarker,
			zoom: 6,
			center: latLng(4.570868, -74.297333),
			url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
			attribution:
				'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
			currentZoom: 1.5,
			currentCenter: latLng(4.570868, -74.297333),
			showParagraph: false,
			mapOptions: {
				zoomSnap: 0.5
			},
			showMap: true,
			icon: icon({
				iconUrl: "../../assets/icon.png",
				iconSize: [32, 37],
				iconAnchor: [16, 37]
			}),
			markers: [],
			municipilities: [],
			municipios: [],
			selectedMunicipility: null,
			selectedDepartamento: null,
			departamentos: [],
			loading: false,
			id: null,
			clearData: false,
		}
	},
	methods: {
		convertLatLng(marker) {
			return latLng(marker.latitud, marker.longitud)
		},
		async index() {
			if(this.$store.getters.municipilities.length == 0) {
				await this.$store.dispatch('listMunicipilities')
			}

			this.municipilities = this.$store.getters.municipilities

			this.$http.ubicacionesTarjetas()
			.then(res => {
				this.markers = res.data.data
			})
			.catch(err => {
				console.log(err)

			})
		},
		zoomUpdate(zoom) {
			this.currentZoom = zoom;
		},
		centerUpdate(center) {
			this.currentCenter = center;
		},
		showLongText() {
			this.showParagraph = !this.showParagraph;
		},
		innerClick(id) {
			this.id = id
		},
		goToDetail(id) {
			this.$router.push({ name: 'tarjetasFamiliaresDetalle', params: { id: id } });
		},
		getDepartamentos() {
			this.$http.departamentos()
			.then(res => {
				this.departamentos = res.data.data
			})
		},
		getMunicipios(id) {
			this.$http.municipiosfiltrados(id)
			.then(res => {
				this.municipios = res.data.data;
			})
		},
	},
	watch: {
		selectedMunicipility(val) {
			if(!val) {
				this.center = latLng(4.570868, -74.297333)
				this.zoom = 6
				return
			}

			this.center = latLng(val.latitud, val.longitud)
			this.zoom = 14

		},
		selectedDepartamento(val) {
			this.departamento = val.id
			this.getMunicipios(val.id)
		},
	},
	mounted() {
		this.index()
		this.getDepartamentos()
		this.departamento = 19
		this.getMunicipios(this.departamento)
	}
}
</script>