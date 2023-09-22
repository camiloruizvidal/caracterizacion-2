<template>
	<b-card title="Barrios">
		<b-card-text>
			<b-row class="mb-3">
				<b-col md="2">
					<b-button
						variant="success"
						class="mt-4"
						@click="create"
					>
						<b-icon icon="plus"></b-icon>
						Nuevo Barrio
					</b-button>
						<create :departaments="departaments" />
				</b-col>
				<b-col md="5">
					<label for="input-small">Departamento</label>
					<v-select
						:loading="loading"
						name="departamento"
						label="nombre"
						:options="departaments"
						v-model="selectedDepartament"
					>
						<template #spinner="{ loading }">
							<div v-if="loading" class="vs__spinner vssp-border">
							</div>
						</template>
					</v-select>
				</b-col>
				<b-col md="5">
					<label for="input-small">Municipio</label>
					<v-select
						:loading="loading"
						:options="municipilities"
						label="nombre"
						v-model="selectedMunicipility">
						<template #spinner="{ loading }">
							<div v-if="loading" class="vs__spinner vssp-border">
							</div>
						</template>
					</v-select>
				</b-col>
			</b-row>
			<b-table-simple
				bordered
				hover
				small
				caption-top
				responsive
				>
				<b-thead head-variant="dark">
					<b-tr>
						<b-th>Departamento</b-th>
						<b-th>Municipio</b-th>
						<b-th>Nombre</b-th>
						<b-th>Opciones</b-th>
					</b-tr>
				</b-thead>
				<b-tbody>
					<b-tr v-for="(item, index) in items" :key="index">
						<b-td>{{ item.tbl_departamento?.nombre }}</b-td>
						<b-td>{{ item.tbl_municipio?.nombre }}</b-td>
						<b-td>{{ item.nombre }}</b-td>
						<b-td>
							<b-button variant="warning"
								size="sm"
								@click.prevent="edit(item)"
							>
								<b-icon icon="pencil-square"></b-icon>
								Editar
							</b-button>
							<b-button
								class="ml-2"
								variant="danger"
								size="sm"
								@click.prevent="destroy(item.id)"
							>
								<b-icon icon="trash"></b-icon>
								Eliminar
							</b-button>
						</b-td>
					</b-tr>
					<b-tr v-if="items.length == 0 && !loading">
						<b-td colspan="13" class="text-center">
							<strong>No hay datos</strong>
						</b-td>
					</b-tr>
					<b-tr v-if="items.length == 0 && loading">
						<b-td colspan="13" class="text-center">
							<b-spinner label="Loading..."></b-spinner>
							<h5>Cargando...</h5>
						</b-td>
					</b-tr>
					<b-tr v-if="error">
						<b-td colspan="13" class="text-center">
							<h5>No se puede mostrar los datos</h5>
						</b-td>
					</b-tr>
				</b-tbody>
			</b-table-simple>
			<edit :row="row" />
			<b-row>
				<b-col md="12" lg="12" sm="12" class="text-right">
					<pagination
						:totalRows="totalRows"
						:currentPage.sync="currentPage"
						:perPage.sync="perPage"
					/>
				</b-col>
			</b-row>
		</b-card-text>
	</b-card>
</template>
<script>
import EventBus from '../../modules/EventBus'

export default {
	components: {
		pagination: ()=>import('../../components/Pagination/Index'),
		create: () => import('./Create'),
		edit: () => import('./Edit')
	},
	data: () => ({
		items: [],
		currentPage: 1,
		perPage: 20,
		loading: false,
		totalRows: 0,
		error: false,
		departaments: [],
		departament: null,
		selectedDepartament: null,
		selectedMunicipility: null,
		municipilities: [],
		municipility: null,
		row: null
	}),
	methods: {
		async index(filter = false) {
			this.loading = true
			this.error = false
			this.row = null

			if(this.$store.getters.departaments.length == 0) {
				await this.$store.dispatch('listDepartaments')
			}

			this.departaments = this.$store.getters.departaments

			this.$http.barrios()
			.then(res => {
				this.items = res.data.data
				this.loading = false

				if(filter) {
					this.filterDepartament()
				}
			})
			.catch(err => {
				this.loading = false
				this.error = true
				console.log(err.response)
			})
		},
		create() {
			this.$root.$emit('bv::show::modal', 'modal-new-neighborhood');
		},
		edit(row) {
			this.row = row
			this.$root.$emit('bv::show::modal', 'modal-edit-neighborhood');
		},
		destroy(id) {
			this.$http.borraBarrio(id)
			.then(res => {
				this.notifySuccess(res.data.message, 'Barrios')
				this.index()
			})
			.catch(err => {
				this.notifyError(err.response)
			})
		},
		filterDepartament() {
			this.items = this.items.filter(item => item.departamento_id == this.departament)
		},
		filterMuncipility() {
			this.items = this.items.filter(item => item.municipio_id == this.municipility)
		}
	},
	watch: {
		selectedDepartament(val) {
			if(val == null) {
				this.municipilities = []
				this.municipility = null
				this.index()
				return
			}

			this.departament = val.id
			this.filterDepartament()

			this.$http.municipiosfiltrados(this.departament)
			.then(res => {
				this.municipilities = res.data.data
			})
		},
		selectedMunicipility(val) {
			if(val === null) {
				this.municipility = null
				this.index(true)
				return
			}

			this.municipility = val.id
			this.filterMuncipility()
		},
	},
	mounted() {
		this.index();

		EventBus.$on('getNeigborhoods', () => {
			this.index();
		});
	}
}
</script>
<style>
.vssp-border {
	border-left-color: rgba(88,151,251,0.71)
}
</style>