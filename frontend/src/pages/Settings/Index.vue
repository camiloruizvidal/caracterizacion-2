<template>
	<b-card title="Listado de configuraciones">
		<b-card-text>
			<b-row>
				<b-col md="12" class="mt-3">
					<b-table-simple
						bordered
						hover
						small
						caption-top
						responsive>
						<b-thead head-variant="dark">
							<b-tr>
								<b-th>ID</b-th>
								<b-th>Nombre</b-th>
								<b-th>Opcion</b-th>
							</b-tr>
						</b-thead>
						<b-tbody>
							<b-tr v-for="(item, index) in items" :key="index">
								<b-td>{{ item.id }}</b-td>
								<b-td>{{ item.name }}</b-td>
								<b-td class="text-center">
									<b-button-group size="sm">
										<b-button class="mr-1" variant="link" @click="edit(item.id)">Editar</b-button>
									</b-button-group>
								</b-td>
							</b-tr>
							<b-tr v-if="items.length == 0 && !loading && !error">
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
							<b-tr v-if="error && items.length == 0">
								<b-td colspan="13" class="text-center">
									<h5>No se puede mostrar los datos</h5>
								</b-td>
							</b-tr>
						</b-tbody>
					</b-table-simple>
				</b-col>
			</b-row>
		</b-card-text>
	</b-card>
</template>
<script>
export default {
	data() {
		return {
			items: [],
			error: false,
			loading: false
		}
	},
	methods: {
		index() {
			this.$http.configuraciones()
			.then(res => {
				this.items = res.data.data
			})
		},
		edit(id) {
			this.$router.push(`/configuraciones/${id}`)
		}
	},
	mounted() {
		this.index()
	}
}
</script>