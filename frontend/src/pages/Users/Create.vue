<template>
	<b-modal ref="my-modal" id="my-modal" hide-footer title="Nuevo usuario">
		<div class="d-block text-center">
			<formuser @save="store" />
		</div>
	</b-modal>
</template>

<script>
import axios from 'axios';
import * as config from '../../config'
import EventBus from '../../modules/EventBus'
import formuser from '../Users/FormUser'

export default {
	components: {
		formuser
	},
	data() {
		return { }
	},
	methods: {
		store(form) {
			axios.post(config.apipath + 'users', form).then(() => {
				this.$root.$emit('bv::hide::modal', 'my-modal')
				EventBus.$emit('reloadIndexUsers');
			}).catch(err => {
				if(err.response.status == '403') {
					alert(err.response.data.data);
				}
			});
		},
	},
}
</script>