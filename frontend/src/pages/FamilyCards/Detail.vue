<template>
		<b-card title="Detalle de tarjeta familiar">
			<b-card-text>
				<detail-card :id="id" :pdf="true" :backButton="true" v-if="id > 0"/>
			</b-card-text>
		</b-card>
</template>
<script>

export default {
	components: {
		'detail-card': () => import('../../components/FamilyCards/Detail')
	},
	data: () =>({
		id: null,
	}),
	methods: {
		index() {
			this.id = this.$route.params.id
		}
	},
	mounted() {
		this.index()
	}
}
</script>