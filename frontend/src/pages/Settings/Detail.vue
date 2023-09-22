<template>
	<b-card title="Detalle de configuracion">
		<b-card-text>
			<b-row>
				<b-col lg="12" class="text-right">
					<b-button class="mr-1" variant="link" @click="back">
						Volver
					</b-button>
					<b-button class="mr-1" variant="success" v-if="!loading" @click="save">
						Guardar
					</b-button>
				</b-col>
			</b-row>
			<b-row v-if="loading">
				<loading />
			</b-row>
			<b-row v-else>
				<b-col md="12">
					<b-row class="mx-auto">
						<b-col md="2">
							<label for="input-small">Key configuracion</label>
						</b-col>
						<b-col md="6">
							<b-form-input
								class="collection-input"
								type="text"
								v-model="form.key"
								:disabled="true"
							>
							</b-form-input>
						</b-col>
					</b-row>
					<b-row class="mx-auto mt-2">
						<b-col md="2">
							<label for="input-small">Nombre</label>
						</b-col>
						<b-col md="6">
							<b-form-input
								class="collection-input"
								type="text"
								v-model="form.name"
							>
							</b-form-input>
						</b-col>
					</b-row>
					
				</b-col>
				<b-col md="12" class="mt-3">
					<b-table-simple 
						hover 
						small 
						responsive="sm"
						>
						<b-thead>
							<tr>
								<th>Key</th>
								<th>Value</th>
								<th>Opcion</th>
							</tr>
						</b-thead>
						<b-tbody>
							<b-tr v-for="(item, index) in form.value" :key="index">
								<b-td>{{index}}</b-td>
								<b-td>{{item}}</b-td>
								<b-td>
									<b-button @click="editItem(index, item)" size="sm" variant="warning" title="Editar">
										<b-icon icon="pencil-square"></b-icon>
									</b-button>
								</b-td>
							</b-tr>
						</b-tbody>
					</b-table-simple>	
				</b-col>
			</b-row>
			<edit :form.sync=form :index="indexSelected" :value="valueSelected" />
		</b-card-text>
	</b-card>
</template>
<script>
export default {
	components: {
		loading: ()=>import('../../components/Loading/Index'),
		edit: () => import('./Edit')
	},
	data() {
		return {
			id: null,
			form: {},
			loading: true,
			indexSelected: null,
			valueSelected: null
		}
	},
	methods: {
		index() {
			this.id = this.$route.params.id
			this.$http.detalleConfiguraciones(this.$route.params.id)
			.then(res => {
				this.form = res.data.data
				this.loading = false
			})
			.catch(err => {
				console.log(err)
				this.loading = false
			})
		},
		editItem(index, value) {
			this.indexSelected = index
			this.valueSelected = value
			this.$root.$emit('bv::show::modal', 'edit-setting-modal');
		},
		save() {
			this.$http.actualizaConfiguraciones(this.id, this.form)
			.then(async (res) => {
				this.notifySuccess(res.data.message, 'Configuraciones')
				await this.$store.dispatch('listConfigurations')
			})
			.catch(err => {
				this.notifyError(err.response)
			})

			this.indexSelected = null
			this.valueSelected = null
		},
	},
	mounted() {
		this.index()
	}
}
</script>