<template>
	<b-card :title="`Grafico de ${title}`">
		<b-card-text>
			<b-row>
				<b-col class="mt-5">
					<graphic :value="value" v-if="!loading" />
					<loading class="ml-5" v-else />
				</b-col>
			</b-row>
		</b-card-text>
	</b-card>
</template>
<script>

export default {
	components: {
		loading: ()=>import('../../components/Loading/Index'),
		graphic: () => import('../../components/Graphic/Index')
	},
	data() {
		return {
			title: 'Personas por municipios',
			loading: true,
			value: {}
		}
	},
	methods: {
		index() {
			this.$http.personasPorMunicipios()
			.then(res => {
				const result = res.data.data
				let labels = []	
				let values = []

				result.forEach(element => {
					labels.push(element.nombre)
					values.push(element.count)
				});

				const data = {
					labels,
					datasets: [
						{
							name: "Personas", type: "line",
							values
						}
					]
				}

				this.value.id = 'chartPeoplesMunicipalities'
				this.value.title = this.title
				this.value.data = data
				this.loading = false
			})
			.catch(err => {
				console.log(err)
				this.loading = false
			})
		}
	},
	mounted() {
		this.index()
	}
}
</script>
