<template>
	<b-modal ref="modal-edit-neighborhood" id="modal-edit-neighborhood" hide-footer title="Editar Barrio">
		<b-row>
			<b-col>
				<b-form @submit.prevent="onSubmit" @reset="onReset">
					<form-data :form.sync="form" />
					<b-form-group class="text-right">
						<b-button type="reset" class="mr-2" variant="danger">Cerrar</b-button>
						<b-button type="submit" variant="primary">Guardar</b-button>
					</b-form-group>
				</b-form>
			</b-col>
		</b-row>
	</b-modal>
</template>
<script>
import EventBus from '../../modules/EventBus'

export default {
	props: {
		row: { required: true }
	},
	components: {
		'form-data': () => import('../Neighborhoods/Form')
	},
	data() {
		return {
			form: {}
		}
	},
	methods: {
		index() {
			
		},
		onSubmit() {
			this.$http.actualizaBarrio(this.form.id, this.form)
			.then(res => {
				this.notifySuccess(res.data.message, 'Barrios')
				this.form = {}
				this.$root.$emit('bv::hide::modal', 'modal-edit-neighborhood');
				EventBus.$emit('getNeigborhoods')
			})
			.catch(err => {
				console.log(err)
			})
		},
		onReset() {
			this.$root.$emit('bv::hide::modal', 'modal-edit-neighborhood');
		}
	},
	watch: {
		row(val) {
			this.form = val
		}
	}
}
</script>