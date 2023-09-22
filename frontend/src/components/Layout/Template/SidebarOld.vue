<template>
	<b-col col lg="2"  md="3" class="d-md-block bg-light sidebar collapse">
		<b-nav vertical v-for="(menu, index) in menues" :key="index">
			<b-nav-item active-class="active" :to="menu.to">
				<b-icon :icon="menu.icon"></b-icon>
				{{menu.text}}
			</b-nav-item>
		</b-nav>
	</b-col>
</template>
<script>
export default {
	data: () => ({
		menues: [
			{ text: 'Dashboard', icon: 'dice4', to: '/dashboard'},
			{ text: 'Tarjetas Familiares', icon: 'dice4', to: '/tarjetas-familiares'},
			{ text: 'Usuarios', icon: 'dice4', to: '/usuarios'}

		]
	})
}
</script>
<style>
	.sidebar {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		z-index: 100;
		padding: 50px 0 0;
		box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
	}

	@media (max-width: 767.98px) {
		.sidebar {
			top: 5rem;
		}
	}

	.sidebar .nav-link {
		font-weight: 500;
		color: #333;
	}

	.sidebar .nav-link {
		margin-right: 4px;
		color: #727272;
	}

	.sidebar .active {
		color: #007bff;
	}
</style>