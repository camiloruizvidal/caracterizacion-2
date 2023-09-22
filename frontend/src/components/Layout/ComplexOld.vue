<template>
	<div>
		<header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
			<b-navbar-brand class="col-md-3 col-lg-2" href="#">
				<b-icon-x-diamond-fill></b-icon-x-diamond-fill>
				SICP-20
			</b-navbar-brand>
			<input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search">

			<ul class="navbar-nav px-3">
				<li class="nav-item text-nowrap">
					<a class="nav-link" href="#" @click.prevent="onLogout">Salir</a>
				</li>
			</ul>
		</header>

		<div class="container-fluid">
			<div class="row">
				<Sidebar />

				<Main />
			</div>
		</div>
	</div>
</template>
<script>

export default {
	components: {
		Sidebar: ()=>import('./Template/Sidebar'),
		Main: ()=>import('./Template/Main')
	},
	methods: {
		onLogout() {
			this.$http.logout()
			.then(res => {
				this.logout()
				this.notifySuccess(res.data.message, 'Cierre de Sesion')

				setTimeout(() => {
					this.$router.replace('/login')
				},500);
			})
			.catch(err => {
				console.log(err.response)
			})

		}
	}
}
</script>
<style scope>
	body {
		font-size: .875rem;
	}
	.navbar-brand {
		padding-top: .75rem;
		padding-bottom: .75rem;
		font-size: 1rem;
		background-color: rgba(0, 0, 0, .25);
		box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25);
	}

	.navbar .navbar-toggler {
		top: .25rem;
		right: 1rem;
	}

	.navbar .form-control {
		padding: .75rem 1rem;
		border-width: 0;
		border-radius: 0;
	}

	.form-control-dark {
		color: #fff;
		background-color: rgba(255, 255, 255, .1);
		border-color: rgba(255, 255, 255, .1);
	}

	.form-control-dark:focus {
		border-color: transparent;
		box-shadow: 0 0 0 3px rgba(255, 255, 255, .25);
	}
</style>