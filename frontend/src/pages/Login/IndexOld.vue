<template>
	<form @submit="onSubmit">
		<img class="mb-4" src="../../assets/logo.png" alt="" width="72" height="57">
		<h1 class="h3 mb-3 fw-normal">Iniciar Sesion</h1>
		<input type="email" id="inputEmail" class="form-control" placeholder="Correo Electronico" required autofocus v-model="form.email">
		<input type="password" id="inputPassword" class="form-control mb-3" placeholder="Contraseña" required v-model="form.password">
		<div class="checkbox mb-3">
			<label>
			<input type="checkbox" value="remember-me" v-model="form.rememberme"> Recordarme
			</label>
		</div>
		<button class="w-100 btn btn-lg btn-primary" type="submit" :disabled="loading">
			<b-spinner label="Loading..." v-if="loading"></b-spinner>
			Ingresar
		</button>
		<p class="mt-5 mb-3 text-muted">&copy; {{ year }}</p>
	</form>
</template>
<script>
export default {
	data: () => ({
		year: null,
		loading: false,
		form: {
			email: "camiloruizvidal@gmal.com",
			password: "1061716139"
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
	},
	mounted() {
		this.year = this.nowYear()
	}
}
</script>
