<template>
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<label for="chartType">Gráfico</label>
				<select
					name="chartType"
					id="chartType"
					v-model="chartType"
					@change="graficData()">
					<option
						:value="option"
						v-for="(option, key) in options"
						:key="key">
							{{option}}
					</option>
				</select>
			</div>
			<b-col class="md-6">
				<b-col md="10" class=" mt-3">
					<b-row class="mx-auto">
						<b-col md="4">
							<label for="input-small">Departamento</label>
						</b-col>
						<b-col md="6">
							<b-form-select
								v-model="selectedDepartamento"
								:options="departamentos"
							>

							</b-form-select>
							<b-form-datepicker v-model="dateFilter" class="mb-2 mt-2"></b-form-datepicker>
							<b-form-group class="mt-3" v-if="municipios.length">
								<b-form-checkbox-group
									id="checkbox-group-1"
									v-model="selectedMunicipality"
									class="checkboxs"
									multiple
									:options="municipios"
									name="flavour-1"
								></b-form-checkbox-group>
							</b-form-group>
						</b-col>
					</b-row>
					<b-row>
						<b-col md="12" class="ml-3 mt-3">
							<b-button variant="outline-primary" @click.prevent="reloadChatrs">
								Filtrar
							</b-button>
						</b-col>
					</b-row>
				</b-col>
			</b-col>
			<div class="col-md-12" v-if="series.length">
				<highcharts
					v-if="showChart"
					:key="keyChart"
					:options="chartOptions">
				</highcharts>
			</div>
			<div class="title__empty mt-3" v-else>
				<h3>No existe data para los municipios seleccionados.</h3>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data() {
        return {
            title: '',
            options: ['bar', 'column'],
            chartType: 'column',
            chartOptions: [],
			series: [],
			selectedMunicipality: [],
			municipios: [],
			selectedDepartamento: null,
			departamentos: [],
			departamento: null,
			showChart: false,
			keyChart: 0,
			dateFilter: null,
        }
    },
	watch: {
		selectedDepartamento(val) {
			this.departamento = val
			this.getMunicipios(val)
		},
	},
	methods: {
		graficData() {
			this.chartOptions = {
					chart: {
						type: this.chartType
					},
					title: {
						text: 'Riesgos del ambiente'
					},
					yAxis: {
						title: {
							text: 'Número de registros'
						}
					},
					series: this.series
				};
				this.keyChart++;
				this.$forceUpdate()
				this.showChart = true;
		},
		getDepartamentos() {
			this.$http.departamentos()
			.then(res => {
				const dep = res.data.data;
				const departments = [];
				dep.forEach(data => {
					departments.push({
						value: data.id,
						text: data.nombre
					});
				});

				this.departamentos = departments
			})
		},

		getMunicipios(id) {
			this.$http.municipiosfiltrados(id)
			.then(res => {
				const mun = res.data.data;
				const municipios = [];
				mun.forEach(data => {
					municipios.push({
						value: data.id,
						text: data.nombre,
					});
					this.selectedMunicipality.push(data.id);
				});
				this.municipios = municipios;
			})
		},
		loadChatrs() {
			this.$http.graficosinformativos()
			.then(res => {
				this.series = res.data.data.datasets
				this.graficData();
			})
			.catch(err => {
				console.log(err)
			})
		},

		reloadChatrs() {
			/*if(this.dateFilter == null) {
				alert("Debe seleccionar una fecha");
				return;
			}*/

			this.$http.graficosinformativosporfiltro({ fecha: this.dateFilter, municipio: this.selectedMunicipality })
			.then(res => {
				this.series = res.data.data.datasets
				this.graficData();
			})
			.catch(err => {
				console.log(err)
			})
		}
    },
	mounted() {
		this.loadChatrs();
		this.getDepartamentos();
	}
}
</script>


<style>
	.checkboxs {
		height: 180px;
		overflow-y: scroll;
		width: 80%;
		overflow-x: hidden;
	}
	.title__empty {
		width: 100%;
		text-align: center;
	}
</style>