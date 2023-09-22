<template>
	<div>
		<b-form-group id="input-group-1" label="Departamento:" label-for="input-1">
			<v-select
				name="departamento"
				label="nombre"
				:options="departaments"
				v-model="selectedDepartament">
				<template #spinner="{ loading }">
					<div v-if="loading" style="border-left-color: rgba(88,151,251,0.71)" class="vs__spinner">
					</div>
				</template>
				<template #search="{attributes, events}">
					<input
					class="vs__search"
					:required="!selectedDepartament"
					v-bind="attributes"
					v-on="events"
					/>
				</template>
			</v-select>
		</b-form-group>

		<b-form-group id="input-group-2" label="Municipio:" label-for="input-2">
			<v-select
				name="municipio"
				label="nombre"
				:options="municipilities"
				v-model="selectedMunicipility">
				<template #spinner="{ loading }">
					<div v-if="loading" style="border-left-color: rgba(88,151,251,0.71)" class="vs__spinner">
					</div>
				</template>
				<template #search="{attributes, events}">
					<input
					class="vs__search"
					:required="!selectedMunicipility"
					v-bind="attributes"
					v-on="events"
					/>
				</template>
			</v-select>
		</b-form-group>
		<b-form-group id="input-group-3" label="Nombre" label-for="input-3">
			<b-form-input
			id="input-1"
			v-model="nombre"
			type="text"
			required
			></b-form-input>
		</b-form-group>
	</div>
</template>
<script>
export default {
	props: {
		form: { required: true }
	},
	data() {
		return {
			departaments: [],
			selectedDepartament: null,
			departament: null,
			municipilities: [],
			selectedMunicipility: null,
			municipility: null,
			nombre: null
		}
	},
	methods: {
		searchMunicipility(id) {
			this.$http.municipiosfiltrados(id)
			.then(res => {
				this.municipilities = res.data.data
			})
		}
	},
	watch: {
		selectedDepartament(val) {
			if(val == null) {
				this.municipilities = []
				this.form.municipio_id = null
				return
			}

			this.form.departamento_id = val.id
			this.searchMunicipility(this.form.departamento_id)

		},
		selectedMunicipility(val) {
			if(val == null) {
				this.form.municipio_id = null
				return
			}

			this.form.municipio_id = val.id
		},
		nombre(val) {
			this.form.nombre = val
		}
	},
	async mounted() {
		this.departaments = this.$store.getters.departaments
		this.nombre = this.form.nombre

		if(this.form.departamento_id)
			this.selectedDepartament = await this.departaments.find(item => item.id == this.form.departamento_id)

		if(this.form.municipio_id) {
			setTimeout(() => {
				this.selectedMunicipility = this.municipilities.find(item => item.id == this.form.municipio_id)
			}, 500)
		}
	}

}
</script>