<template>
	<b-modal ref="edit_user" id="edit_user" hide-footer title="Modificar usuario">
		<div class="d-block text-center">
			<b-form>
				<b-col lg="12">
					<b-row>

						<b-col lg="6">
							<b-form-group>
								<b-row>
									<b-col lg="4">
										<label class="mr-sm-2" for="firstname">Nombre primero</label>
									</b-col>
									<b-col lg="8">
										<b-form-input
											class="collection-input"
											id="firstname"
											type="text"
											v-model="form.firstname"
											required>
										</b-form-input>
									</b-col>
								</b-row>
							</b-form-group>
						</b-col>

						<b-col lg="6">
							<b-form-group>
								<b-row>
									<b-col lg="4">
										<label class="mr-sm-2" for="secondname">Nombre segundo</label>
									</b-col>
									<b-col lg="8">
										<b-form-input
											class="collection-input"
											id="secondname"
											type="text"
											v-model="form.secondname"
											required>
										</b-form-input>
									</b-col>
								</b-row>
							</b-form-group>
						</b-col>

						<b-col lg="6">
							<b-form-group>
								<b-row>
									<b-col lg="4">
										<label class="mr-sm-2" for="lastname1">Apellido primero</label>
									</b-col>
									<b-col lg="8">
										<b-form-input
											class="collection-input"
											id="lastname1"
											type="text"
											v-model="form.lastname1"
											required>
										</b-form-input>
									</b-col>
								</b-row>
							</b-form-group>
						</b-col>

						<b-col lg="6">
							<b-form-group>
								<b-row>
									<b-col lg="4">
										<label class="mr-sm-2" for="lastname2">Apellido segundo</label>
									</b-col>
									<b-col lg="8">
										<b-form-input
											class="collection-input"
											id="lastname2"
											type="text"
											v-model="form.lastname2"
											required>
										</b-form-input>
									</b-col>
								</b-row>
							</b-form-group>
						</b-col>

						<b-col lg="6">
							<b-form-group>
								<b-row>
									<b-col lg="4">
										<label class="mr-sm-2" for="document">Documento</label>
									</b-col>
									<b-col lg="8">
										<b-form-input
											class="collection-input"
											id="document"
											type="text"
											v-model="form.document"
											required>
										</b-form-input>
									</b-col>
								</b-row>
							</b-form-group>
						</b-col>

						<b-col lg="6">
							<b-form-group>
								<b-row>
									<b-col lg="4">
										<label class="mr-sm-2" for="email">Email</label>
									</b-col>
									<b-col lg="8">
										<b-form-input
											class="collection-input"
											id="email"
											type="email"
											v-model="form.email"
											required>
										</b-form-input>
									</b-col>
								</b-row>
							</b-form-group>
						</b-col>

						<b-col lg="6">
							<b-form-group>
								<b-row>
									<b-col lg="4">
										<label class="mr-sm-2" for="init">Inicio</label>
									</b-col>
									<b-col lg="8">
										<b-form-input
											class="collection-input"
											id="init"
											type="text"
											v-model="form.init"
											required>
										</b-form-input>
									</b-col>
								</b-row>
							</b-form-group>
						</b-col>

						<b-col lg="6">
							<b-form-group>
								<b-row>
									<b-col lg="4">
										<label class="mr-sm-2" for="end">Fin</label>
									</b-col>
									<b-col lg="8">
										<b-form-input
											class="collection-input"
											id="end"
											type="text"
											v-model="form.end"
											required>
										</b-form-input>
									</b-col>
								</b-row>
							</b-form-group>
						</b-col>

						<b-col lg="12">
							<b-form-group>
								<b-row>
									<b-col lg="2">
										<label class="mr-sm-2" for="role">Rol</label>
									</b-col>
									<b-col lg="10">
										<b-form-select :options="roles" v-model="form.role"></b-form-select>
									</b-col>
								</b-row>
							</b-form-group>
						</b-col>

						<b-col lg="12">
							<b-form-group>
								<b-row>
									<b-col lg="2">
										<label class="mr-sm-2" for="username">Username</label>
									</b-col>
									<b-col lg="10">
										<b-form-input
											class="collection-input"
											id="username"
											type="text"
											v-model="form.username"
											required>
										</b-form-input>
									</b-col>
								</b-row>
							</b-form-group>
						</b-col>

						<b-col lg="12">
							<b-form-group>
								<b-row>
									<b-col lg="2">
										<label class="mr-sm-2" for="password">Contraseña</label>
									</b-col>
									<b-col lg="10">
										<b-form-input
											class="collection-input"
											id="password"
											type="password"
											v-model="form.password"
											required>
										</b-form-input>
									</b-col>
								</b-row>
							</b-form-group>
						</b-col>

					</b-row>
					<b-row>
						<b-button variant="success" @click.prevent="update()">
							<span >Guardar</span>
						</b-button>
					</b-row>
				</b-col>
			</b-form>
		</div>
		<!--<b-button class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-button>
		<b-button class="mt-2" variant="outline-warning" block @click="toggleModal">Toggle Me</b-button> -->
	</b-modal>
</template>

<script>
import axios from 'axios';
import * as config from '../../config'
import EventBus from '../../modules/EventBus'

export default {
	data() {
		return {
			form: {
				firstname: '',
				secondname: '',
				lastname1: '',
				lastname2: '',
				document: '',
				email: '',
				init: '',
				end: '',
				role: null,
				username: '',
				password: ''
			},

			id: null,
			roles: []
		}
	},
	mounted() {
		this.getRoles();

		EventBus.$on('editUser', (item) => {
			this.editItem(item);
		});
	},
	methods: {
		editItem(item) {
			this.form.firstname = item.nombre_primero;
			this.form.secondname = item.nombre_segundo;
			this.form.lastname1 = item.apellido_primero;
			this.form.lastname2 = item.apellido_segundo;
			this.form.document = item.documento;
			this.form.email = item.email;
			this.form.init = "";
			this.form.end = "";
			this.form.role = item.rol_id;
			this.form.username = item.username;
			this.form.password = "";
			this.id = item.id;
		},

		update() {
			axios.put(config.apipath + 'users/' + this.id, this.form).then(response => {
				console.log(response.data.data);
				this.$root.$emit('bv::hide::modal', 'edit_user')
				EventBus.$emit('reloadIndexUsers');
				this.clear();
			}).catch(err => console.log(err));
		},
		getRoles() {
			axios.get(config.apipath + 'roles').then(response => {
				this.roles.push({
					value: null,
					text: "Por favor selecciona una opción"
				});

				response.data.role.forEach(val => {
					this.roles.push({
						value: val.id,
						text: val.name
					});
				});
			}).catch(err => console.log(err));
		},
	},
}
</script>