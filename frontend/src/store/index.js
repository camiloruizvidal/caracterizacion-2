import Vue from 'vue'
import Vuex from 'vuex'

import general from './modules/General'

Vue.use(Vuex)

export default function () {
	const Store = new Vuex.Store({
		modules: {
			general
		}
	})

	return Store
}