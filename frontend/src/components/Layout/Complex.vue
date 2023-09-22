<template>
	<div id="page-top">
		<div id="wrapper">
			<Sidebar />
			<Main />
		</div>

		<a class="scroll-to-top rounded" href="#page-top">
			<i class="fas fa-angle-up"></i>
		</a>

		<div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
			aria-hidden="true">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="exampleModalLabel">Cerrar Sesion</h5>
						<button class="close" type="button" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">×</span>
						</button>
					</div>
					<div class="modal-body">Seguro de cerrar sesion?</div>
					<div class="modal-footer">
						<button class="btn btn-secondary" type="button" data-dismiss="modal" :disabled="loading">Cancelar</button>
						<button class="btn btn-primary" @click="onLogout" :disabled="loading">
							<b-spinner label="Loading..." small v-if="loading"></b-spinner>
							Salir
						</button>
					</div>
				</div>
			</div>
		</div>

		<div class="modal fade" id="resetPassword" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
			aria-hidden="true">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="exampleModalLabel">Resetear contraseña</h5>
						<button class="close" type="button" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">×</span>
						</button>
					</div>
					<template v-if="verAvisoResetear">
						<div class="modal-body">¿Seguro de resetear tu contraseña?</div>
						<div class="modal-footer">
							<button class="btn btn-secondary" type="button" data-dismiss="modal" :disabled="loading">Cancelar</button>
							<button class="btn btn-primary" @click="verAvisoResetear=false" :disabled="loading">
								<b-spinner label="Loading..." small v-if="loading"></b-spinner>
								Confirmar
							</button>
						</div>
					</template>
					<template v-else>
						<form @submit.prevent="ChangePassword">
							<div class="modal-body">
								<div class="container-fluid">
									<div class="col-md-12">
										<label>Contraseña anterior</label>
										<input
											v-model="oldPassword"
											type="password"
											class="form form-control"
											required
										>
									</div>
									<div class="col-md-12">
										<label>Nueva contraseña</label>
										<input
											v-model="newPassword"
											type="password"
											class="form form-control"
											required
										>
									</div>
									<div class="col-md-12">
										<label>Repita nueva contraseña</label>
										<input
											v-model="newPasswordConfirm"
											type="password"
											class="form form-control"
											required
										>
									</div>
								</div>
							</div>
							<div class="modal-footer">
								<button
									class="btn btn-secondary"
									type="button"
									data-dismiss="modal"
									:disabled="loading"
								>
									Cancelar
								</button>
								<button
									class="btn btn-primary"
									:disabled="loading"
								>
									<b-spinner
										label="Loading..."
										small v-if="loading"
									>
									</b-spinner>
									Confirmar
								</button>
							</div>
						</form>
					</template>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import axios from 'axios';
import config from '../../config'
export default {
	data() {
		return {
			loading: false,
			verAvisoResetear: true,
			newPassword: '',
			oldPassword: '',
			newPasswordConfirm: '',
		}
	},
	components: {
		Sidebar: ()=>import('./Template/Sidebar'),
		Main: ()=>import('./Template/Main')
	},
	methods: {
		onLogout() {
			this.loading = true
			this.$http.logout()
			.then(res => {
				this.logout()
				this.notifySuccess(res.data.message, 'Cierre de Sesion')

				setTimeout(() => {
					window.location.replace('/')
					this.loading = false
				},500);
			})
			.catch(err => {
				this.loading = false
				console.log(err.response)
			})
		},
		ChangePassword() {
			if(this.newPassword != this.newPasswordConfirm) {
				this.$bvToast.toast('Las contraseñas no coinciden.', {
					title: 'ERROR!',
					variant: 'error',
					solid: true,
					'auto-hide-delay': 4000
				});
				return;
			}

			const token = this.getToken();
			const me =  this.getUserID(token);
			axios.post( config.apipath + 'reset-password/' + me.uid, {
					newPassword: this.newPassword,
					oldPassword: this.oldPassword,
				}
			)
			.then((response) => {
				if(response.data.validated) {
					location.reload();
					this.$bvToast
					.toast('Contraseña reiniciada satisfactoriamente.', {
						title: 'Éxito!',
						variant: 'success',
						solid: true,
						'auto-hide-delay': 4000
					})
				} else {
					this.$bvToast
					.toast(response.data.msj, {
						title: 'Error!',
						variant: 'error',
						solid: true,
						'auto-hide-delay': 4000
					});
				}
			})
		}
	}
}
</script>