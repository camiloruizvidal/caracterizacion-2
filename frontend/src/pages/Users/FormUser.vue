<template>
	<b-form @submit.prevent="store()">
		<b-row>
			<b-col lg="6">
				<label for="firstname">Nombre primero</label>
				<b-form-input
					class="collection-input"
					id="firstname"
					type="text"
					v-model="form.firstname"
					required>
				</b-form-input>
			</b-col>

			<b-col lg="6">
				<label class="mr-sm-2" for="secondname">Nombre segundo</label>
				<b-form-input
					class="collection-input"
					id="secondname"
					type="text"
					v-model="form.secondname"
					>
				</b-form-input>
			</b-col>

			<b-col lg="6">
				<label for="lastname1">Apellido primero</label>
				<b-form-input
					class="collection-input"
					id="lastname1"
					type="text"
					v-model="form.lastname1"
					required>
				</b-form-input>
			</b-col>

			<b-col lg="6">
				<label for="lastname2">Apellido segundo</label>
				<b-form-input
					class="collection-input"
					id="lastname2"
					type="text"
					v-model="form.lastname2"
					>
				</b-form-input>
			</b-col>

			<b-col lg="6">
				<label class="mr-sm-2" for="document">Documento</label>
				<b-form-input
					class="collection-input"
					id="document"
					type="text"
					v-model="form.document"
					required>
				</b-form-input>
			</b-col>

			<b-col lg="6">
				<label class="mr-sm-2" for="email">Email</label>
				<b-form-input
					class="collection-input"
					id="email"
					type="email"
					v-model="form.email"
					required>
				</b-form-input>
			</b-col>

			<b-col lg="12">
				<label class="mr-sm-2" for="role">Rol</label>
				<b-form-select :options="roles" v-model="form.role" required>
				</b-form-select>
			</b-col>

			<b-col lg="6" v-if="form.role==2">
				<label class="mr-sm-2" for="init">Inicio</label>
				<b-form-input
					class="collection-input"
					id="init"
					type="text"
					v-model="form.init"
					required>
				</b-form-input>
			</b-col>

			<b-col lg="6" v-if="form.role==2">
				<label class="mr-sm-2" for="end">Fin</label>
				<b-form-input
					class="collection-input"
					id="end"
					type="text"
					v-model="form.end"
					required>
				</b-form-input>
			</b-col>

			<b-col lg="12">
				<label class="mr-sm-2" for="username">Username</label>
				<b-form-input
					class="collection-input"
					id="username"
					type="text"
					v-model="form.username"
					required>
				</b-form-input>
			</b-col>

			<b-col lg="6">
				<label class="mr-sm-2" for="password">Contraseña</label>
				<b-form-input
					class="collection-input"
					id="password"
					type="password"
					v-model="form.password"
					required>
				</b-form-input>
			</b-col>

			<b-col lg="6">
				<label class="mr-sm-2" for="password2">Repita contraseña</label>
				<b-form-input
					class="collection-input"
					id="password2"
					type="password"
					v-model="password2"
					required>
				</b-form-input>
				<span class="badge badge-danger" v-if="form.password != password2">
					La contraseña no coincide
				</span>
			</b-col>
		</b-row>
		<b-row>
			<button
				class="ml-3 mt-3 btn btn-success"
				:disabled="form.password != password2 || form.password ==''"
			>
				Guardar
			</button>
		</b-row>
	</b-form>
</template>

<script>
import axios from 'axios';
import * as config from '../../config'

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
			password2: '',
			roles: []
		}
	},
	mounted() {
		this.getRoles();
	},
	methods: {
		getRoles() {
			axios.get(config.apipath + 'roles')
			.then(response => {
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
			})
			.catch(err => console.log(err));
		},
		store() {
			this.$emit('save', this.form);
		}
	}
}
</script>

<style>

</style>