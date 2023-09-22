import { get, post, put, del } from './methodRequest'

export default function(Vue) {
	Vue.http = {
		configuraciones() {
			return get('configuraciones')
		},
		detalleConfiguraciones(id) {
			return get(`configuraciones/${id}`)
		},
		actualizaConfiguraciones(id, data) {
			return put(`configuraciones/${id}`, data)
		},
		login(data) {
			return post('login', data)
		},
		logout() {
			return post('logout')
		},
		tarjetas(page = null, perPage = null, search = null) {
			if( page && perPage && search ) {
				return get(`tarjetas?page=${page}&&perpage=${perPage}&&search=${search}`)
			}

			if( page && perPage ) {
				return get(`tarjetas?page=${page}&&perpage=${perPage}`)
			}

			if( page ) {
				return get(`tarjetas?page=${page}`)
			}

			return get('tarjetas')
		},

		usuarios(page = null, perPage = null, search = null) {
			if( page && perPage && search ) {
				return get(`users?page=${page}&&perpage=${perPage}&&search=${search}`)
			}

			if( page && perPage ) {
				return get(`users?page=${page}&&perpage=${perPage}`)
			}

			if( page ) {
				return get(`users?page=${page}`)
			}

			return get('users')
		},
		detalleTarjeta(id) {
			return get(`tarjetas/${id}`)
		},
		buscarTarjeta(data) {
			return post(`tarjetas/buscar`, data)
		},
		municipiosfiltrados(id) {
			return get(`municipios/${id}`)
		},
		municipios() {
			return get(`municipios`)
		},
		veredas() {
			return get(`veredas`)
		},
		corregimientos() {
			return get(`corregimientos`)
		},
		departamentos() {
			return get(`departamentos`)
		},
		ubicacionesTarjetas() {
			return get(`tarjetas/gps/ubicacion`)
		},
		personasPorMunicipios() {
			return get(`personasPorMunicipios`)
		},
		fichasPorMes() {
			return get(`fichasPorMes`)
		},
		fichasPorMunicipios() {
			return get(`fichasPorMunicipios`)
		},
		fichasPorMunicipiosFiltrados(municipiosIds) {
			return post(`fichasPorMunicipiosFiltrados`, municipiosIds)
		},
		graficosinformativos() {
			return get('graficosinformativos')
		},
		graficosinformativosporfiltro(data) {
			return post('graficosinformativosporfiltro', data)
		},
		barrios() {
			return get(`barrios`)
		},
		crearBarrio(data) {
			return post(`barrios`, data)
		},
		detalleBarrio(id) {
			return get(`barrios/${id}`)
		},
		actualizaBarrio(id, data) {
			return put(`barrios/${id}`, data)
		},
		borraBarrio(id) {
			return del(`barrios/${id}`)
		},
		cargarRegistrosRecibidos() {
			return get(`log/cargarRegistrosRecibidos`)
		},
		guardarRegistrosRecibidos(data) {
			return post(`registros`, data)
		},
		getPersonas() {
			return get(`personas`);
		},
		getPersonasFiltered(data) {
			return post(`filter-persons`, data);
		}

	}

	Object.defineProperties(Vue.prototype,{
		$http: {
			get() {
				return Vue.http
			}
		}

	})
}
