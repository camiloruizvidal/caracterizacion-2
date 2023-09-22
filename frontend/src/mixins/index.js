import Vue from 'vue'
import moment from 'moment'
import crypto from "crypto";
import * as config from '../config'
import jwtDecode from 'jwt-decode'

Vue.mixin({
    methods: {
		formatReplace(value, field = '_', field_replace = " ") {
			const field_search = new RegExp(field,'g');
			return value.replace(field_search, field_replace)
		},
		formatFirstUpper (value) {
			if(value) 
				return value.charAt(0).toUpperCase() + value.slice(1);
		},
		formatDate (date) {
			if(date != null) {
				return moment(date).format('DD/MM/YYYY');
			}

			return "-";
		},
		nowYear() {
			return moment().format('YYYY')
		},
		back() {
			this.$router.go(-1)
		},	
		encrypt(value) {
			const cipher = crypto.createCipheriv('aes-256-cbc', config.appKey, config.cryptoIv)

			return Buffer.concat([
				cipher.update(value),
				cipher.final()
			]).toString('base64')
		},
		descrypt(value) {
			const decipher = crypto.createDecipheriv('aes-256-cbc', config.appKey, config.cryptoIv)

			return Buffer.concat([
				decipher.update(value, 'base64'),
				decipher.final()
			]).toString()
		},
		saveToken(token) {
			localStorage.setItem("token", this.encrypt(token))
		},
		getToken() {
			const token = localStorage.getItem("token")

			if(!token) {
				this.deleteToken()

				return false
			}

			if(token && token === undefined) {
				this.deleteToken()

				return false
			}

			return this.descrypt(token)
		},
		getUserID(token) {
			return jwtDecode(token);
		},
		deleteToken() {
			localStorage.removeItem("token")
		},
		isAuth() {
			if(this.getToken()) {
				return true
			}

			return false
		},
		logout() {
			localStorage.removeItem("token")
		},
		notifySuccess(message, title = '') {
			this.toastNotify(message, title)
		},
		notifyError(error, title = 'Error') {
			const variant = 'danger'

			if ( typeof error === 'string' ) {
				this.toastNotify(error, title, variant)
				return
			}

			if(error.status == '404') {
				if(typeof error.data.data === 'string') {
					this.toastNotify(error.data.data, title, variant)
					return
				}
			}

			if(error.status == '422') {
				console.log(422)
			}

			if(error.status == '401') {
				if(typeof error.data === 'object') {
					const errors = error.data
					for(let i in errors) {
						this.toastNotify(errors[i].message, `Error - ${errors[i].field}`, variant)
					}

					return
				}
			}

		},
		toastNotify(message, title, variant = 'success') {
			this.$bvToast.toast(`${message}`, {
				title: `${title}`,
				variant: `${variant}`,
				solid: true,
				'auto-hide-delay': 4000
			})
		},
		transformInvertJson(json) {
			let newJson = {}
			for(let i in json)
				newJson[json[i]] = i 

			return newJson
		},
		transformMonth(number) {
			const months = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']

			return months[number]
		}
	}
})