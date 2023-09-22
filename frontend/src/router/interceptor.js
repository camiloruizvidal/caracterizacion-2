import Vue from 'vue'
import axios from 'axios'


axios.interceptors.request.use((config) => {
	const vue = new Vue()

    const token = vue.getToken()

	if(token) {
		config.headers['Authorization'] = 'Bearer ' + token
	}

    config.headers['Accept'] = 'application/json'

    return config
	},
	(err) => {
		return Promise.reject(err)
	}
)

axios.interceptors.response.use((res) => {
		return res
    },
    (err) => {
		console.log(err.response)
		if (err.response.status === 401) {
			// vue.router.replace('/login')
			window.location.href = '/login';
		}

		return Promise.reject(err)
  }
)
