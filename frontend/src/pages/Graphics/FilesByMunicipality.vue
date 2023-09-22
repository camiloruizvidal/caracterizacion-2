<template>
	<b-card title="fichas caracterizadas por municipios">
		<b-card-text>
			<b-row>
				<b-col class="md-6">
					<b-col md="12" class=" mt-3">
						<b-row class="mx-auto">
							<b-col md="4">
								<label for="input-small">Departamento</label>
							</b-col>
							<b-col md="8">
								<!--<v-select
									:loading="loading"
									name="departamento"
									label="nombre"
									:options="departamentos"
									v-model="selectedDepartamento">
									<template #spinner="{ loading }">
										<div v-if="loading" style="border-left-color: rgba(88,151,251,0.71)" class="vs__spinner">
										</div>
									</template>
								</v-select> -->
								<b-form-select
									v-model="selectedDepartamento"
									:options="departamentos"
								>

								</b-form-select>
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
								<b-button block variant="outline-primary" @click.prevent="filtrado">
									Filtrar
								</b-button>
							</b-col>
						</b-row>
					</b-col>
				</b-col>
				<b-col class="md-6 mt-5">
					<graphic :value="value" v-if="!loading" :counter="counter" />
					<loading class="ml-5" v-else />
				</b-col>
			</b-row>
		</b-card-text>
	</b-card>
</template>
<script>

export default {
	components: {
		loading: ()=>import('../../components/Loading/Index'),
		graphic: () => import('../../components/Graphic/Index')
	},
	data() {
		return {
			loading: true,
			departamentos: [],
			selectedDepartamento: null,
			departamento: null,
			selectedMunicipality: [],
			municipios: [],
			value: {},
			counter: 0
		}
	},
	watch: {
		selectedDepartamento(val) {
			this.departamento = val
			this.getMunicipios(val)
		},
	},
	methods: {
		index() {
			this.$http.fichasPorMunicipios()
			.then(res => {
				const result = res.data.data
				let labels = []
				let values = []

				result.forEach(element => {
					labels.push(element.nombre)
					values.push(element.count)
				});

				const data = {
					labels,
					datasets: [
						{
							name: "fichas", type: "line",
							values
						}
					]
				}

				this.value.id = 'chartfilesMunicipalities'
				this.value.title = 'fichas por municipios'
				this.value.data = data
				this.loading = false
			})
			.catch(err => {
				console.log(err)
				this.loading = false
			})
		},
		filtrado() {
			this.$http.fichasPorMunicipiosFiltrados(this.selectedMunicipality)
			.then(res => {
				const result = res.data.data
				let labels = []
				let values = []

				result.forEach(element => {
					labels.push(element.nombre)
					values.push(element.count)
				});

				const data = {
					labels,
					datasets: [
						{
							name: "fichas", type: "line",
							values
						}
					]
				}

				this.value.id = 'chartfilesMunicipalities'
				this.value.title = 'fichas por municipios'
				this.value.data = data
				this.counter++;
				this.loading = false
			})
			.catch(err => {
				console.log(err)
				this.loading = false
			})
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
	},
	mounted() {
		this.index()
		this.getDepartamentos()

	}
}
</script>

<style>
	.checkboxs {
		height: 180px;
		overflow-y: scroll;
		width: 40%;
		overflow-x: hidden;
	}
</style>