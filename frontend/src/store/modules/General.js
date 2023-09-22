import Vue from 'vue'

const getDefaultState = () => {
	return {
		configurations: [],
		municipilities: [],
		departaments: []
	}
}

const state = getDefaultState()

const getters = {
	configurations(state) {
		return state.configurations
	},
	municipilities(state) {
		return state.municipilities
	},
	departaments(state) {
		return state.departaments
	}  
}

const actions = {
	listConfigurations({commit}) {
		return new Promise((resolve, reject) => {
			Vue.http.configuraciones()
			.then((res) => {
				commit('SET_CONFIGURATIONS', res.data.data)
				resolve()
			})
			.catch((err) => {
				commit('FAIL')
				reject(err.response.data)
			})
		})
	},
	listDepartaments({commit}) {
		return new Promise((resolve, reject) => {
			Vue.http.departamentos()
			.then((res) => {
				commit('SET_DEPARTAMENTS', res.data.data)
				resolve()
			})
			.catch((err) => {
				commit('FAIL')
				reject(err.response.data)
			})
		})
	},
	listMunicipilities({commit}) {
		return new Promise((resolve, reject) => {
			Vue.http.municipios()
			.then((res) => {
				commit('SET_MUNICIPILITIES', res.data.data)
				resolve()
			})
			.catch((err) => {
				commit('FAIL')
				reject(err.response.data)
			})
		})
	}
}

const mutations = {
	SET_CONFIGURATIONS (state, configurations) {
		state.configurations = configurations
	},
	SET_DEPARTAMENTS (state, departaments) {
		state.departaments = departaments
	},
	SET_MUNICIPILITIES (state, municipilities) {
		state.municipilities = municipilities
	}
}

export default { state, getters, actions, mutations }