<template>
	<b-card title="Usuarios">
		<b-card-text>
			<b-row>
				<b-col md="6" class="my-2">
					<b-button
						variant="success"
						id="show-btn"
						v-b-modal.my-modal
					>
						Crear nuevo usuario
					</b-button>
					<create />
				</b-col>
				<b-col md="12">
					<b-table-simple
						bordered
						hover
						small
						caption-top
						responsive>
						<b-thead head-variant="dark">
							<b-tr>
								<b-th>Nombre primero</b-th>
								<b-th>Nombre segundo</b-th>
								<b-th>Apellido primero</b-th>
								<b-th>Apellido segundo</b-th>
								<b-th>Documento</b-th>
								<b-th>Rol</b-th>
								<b-th>Códigos</b-th>
								<b-th>Acciones</b-th>
							</b-tr>
						</b-thead>
						<b-tbody>
							<b-tr v-for="(item, index) in items" :key="index">
								<b-td>{{ item.nombre_primero }}</b-td>
								<b-td>{{ item.nombre_segundo }}</b-td>
								<b-td>{{ item.apellido_primero }}</b-td>
								<b-td>{{ item.apellido_segundo }}</b-td>
								<b-td>{{ item.documento }}</b-td>
								<b-td>{{ item.roles.name }}</b-td>
								<b-td class="text-center">
									<ul v-if="item.codigo_users.length">
										<li v-for="code in item.codigo_users" :key="code.id">
											{{ code.inicio }} - {{ code.fin }}
										</li>
									</ul>
								</b-td>
								<b-td>
									<b-dropdown
										:id="'dropdown-' + item.id"
										text="Opciones"
										variant="primary"
										class="m-md-2">
										<b-dropdown-item @click.stop="editItem(item)">
											Editar
										</b-dropdown-item>
										<b-dropdown-item
											@click.prevent="destroy(item.id)"
										>
											Eliminar
										</b-dropdown-item>
										<b-dropdown-item
											@click.prevent="resetPassword(item.id)"
										>
											Resetear contraseña
										</b-dropdown-item>
									</b-dropdown>
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

					<edit />

				</b-col>
			</b-row>

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
import axios from 'axios';
import * as config from '../../config'
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
	}),
	methods: {
		index() {
			this.loading = true
			this.error = false

			this.$http.usuarios(this.currentPage, this.perPage)
			.then(res => {
				this.items = res.data.data
				this.loading = false
			})
			.catch(err => {
				this.loading = false
				this.error = true
				console.log(err.response)
			})
		},
		editItem(item) {
			EventBus.$emit('editUser', item);
			this.$root.$emit('bv::show::modal', 'edit_user');
		},
		destroy(id) {
			axios
				.delete(config.apipath + 'users/' + id)
				.then(() => {
					this.index();
				})
				.catch(err => console.log(err));
		},
		resetPassword(id) {
			axios.get(config.apipath + 'reset-password/' + id).then(response => {
				this.$bvToast.toast('Contraseña reiniciada satisfactoriamente.', {
				title: 'Éxito!',
				variant: 'success',
				solid: true,
				'auto-hide-delay': 4000
			})
				alert(response.data.data);
				this.index();
			}).catch(err => console.log(err));
		}
	},
	watch: {
		currentPage() {
			this.items = []
			this.index()
		},
		perPage() {
			this.items = []
			this.index()
		}
	},
	mounted() {
		this.index();

		EventBus.$on('reloadIndexUsers', () => {
			this.index();
		});
	}
}
</script>