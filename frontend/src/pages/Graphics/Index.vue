<template>
	<b-card title="Graficos">
		<b-card-text>
			<b-row>
				<b-col lg="6" class="mt-5 text-center">
					<b-button
						@click="FileByMunicipality"
						class="ml-1"
						size="sm">
							Fichas caracterizadas por municipio
					</b-button>
				</b-col>
				<b-col lg="6" class="mt-5 text-center">
					<b-button
						@click="PeoplesByMunicipality"
						class="ml-1"
						size="sm">
							Personas caracterizadas por municipio
					</b-button>
				</b-col>
			</b-row>
			<b-row>
				<b-col lg="6" class="mt-5 text-center">
					<b-button
						@click="FilesMonth"
						class="ml-1"
						size="sm">
							Fichas caracterizadas mensuales
					</b-button>
				</b-col>
				<b-col lg="6" class="mt-5 text-center">
					<b-button
						@click="FileInformation"
						class="ml-1"
						size="sm">
							Informativa
					</b-button>
				</b-col>
				<b-col lg="6">
				</b-col>
			</b-row>
		</b-card-text>
	</b-card>
</template>
<script>
export default {
	methods: {
		PeoplesByMunicipality() {
			this.$router.push('graficos-personas-municipios')
		},
		FileByMunicipality() {
			this.$router.push('graficos-fichas-municipios')
		},
		FilesMonth() {
			this.$router.push('graficos-fichas-mensuales')
		},
		FileInformation() {
			this.$router.push('grafico-informativos')
		}
	}
}
</script>