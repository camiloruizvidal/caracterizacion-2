<template>
	<b-modal ref="edit-setting-modal" id="edit-setting-modal" hide-footer title="Editar">
		<div class="d-block text-center">
			<b-form>
				<b-col lg="12">
					<b-row>
						<b-col>
							<b-form-group>
								<b-row>
									<b-col>
										<label class="mr-sm-2"><strong>Key</strong></label>
									</b-col>
									<b-col>
										<b-form-input
											type="text"
											v-model="index"
											:disabled= true
										>
										</b-form-input>
									</b-col>
								</b-row>
							</b-form-group>
						</b-col>
					</b-row>
					<b-row>
						<b-col>
							<b-form-group>
								<b-row>
									<b-col>
										<label class="mr-sm-2"><strong>Value</strong></label>
									</b-col>
									<b-col>
										<b-form-input
											type="text"
											v-model="valueBase">
										</b-form-input>
									</b-col>
								</b-row>
							</b-form-group>
						</b-col>
					</b-row>
					<b-row>
						<b-col class="text-right">
							<b-button variant="success" @click.prevent="acept">
								<span>Aceptar</span>
							</b-button>
						</b-col>
					</b-row>
				</b-col>
			</b-form>
		</div>
	</b-modal>
</template>
<script>

export default {
	props: {
		index: { required: true },
		value: { required: true },
		form: { type: Object, required: true }
	},
	computed: {
		valueBase: {
            get: function(){
                return this.value;
            },
            set: function(newValue){
				let formMod = {}
				Object.assign(formMod, this.form)
				formMod.value[this.index] = newValue
                
				this.$emit(`update:form`, formMod)
            }
        }
    },
	methods: {
		acept() {
			this.$root.$emit('bv::hide::modal', 'edit-setting-modal');
		}
	}
}
</script>
