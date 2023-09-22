<template>
	<div class="row">
		<div class="col-lg-6 d-none d-lg-block">
			<div class="card border-0 rounded-0">
				<div class="card-img-overlay row justify-content-center">
					<div class="align-self-center">
						<img class="card-img mt-5 pl-5 pr-5" src="../../assets/logo.png">
					</div>
				</div>
			</div>
		</div>
		<div class="col-lg-6">
			<div class="p-5">
				<div class="text-center">
					<h1 class="h4 text-gray-900 mb-4">Inicio de Sesion</h1>
				</div>
				<form class="user" @submit="onSubmit">
					<div class="form-group mt-4">
						<input type="email" class="form-control form-control-user"
							aria-describedby="emailHelp" required autofocus v-model="form.email"
							placeholder="Correo Electronico">
					</div>
					<div class="form-group">
						<input type="password" class="form-control form-control-user"
							required v-model="form.password" placeholder="Contraseña">
					</div>
					<div class="form-group">
						<div class="custom-control custom-checkbox small">
							<input type="checkbox" value="remember-me" v-model="form.rememberme"> Recordarme
						</div>
					</div>
					<button type="submit" class="btn btn-primary btn-user btn-block mt-3">
						Iniciar sesion
					</button>
				</form>
				<hr>
				<div class="text-center mt-5">
					<a class="small" href="forgot-password.html">Olvidó contraseña?</a>
				</div>
				<div class="mt-5"></div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data: () => ({
		year: null,
		loading: false,
		form: {
		}
	}),
	methods: {
		onSubmit(e) {
			e.preventDefault()
			this.loading = true
			this.$http.login(this.form)
			.then(res => {
				const token = res.data.data.token
				this.notifySuccess(res.data.message, 'Iniciar Sesion')
				this.saveToken(token)
				this.loading = true
				setTimeout(() => {
					this.$router.push('/dashboard')
				},500);


			})
			.catch(err => {
				this.notifyError(err.response)
				this.loading = false
			})
		}
	}
}
</script>