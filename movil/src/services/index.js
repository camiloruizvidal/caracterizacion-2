'use strict'
module.exports = {
	//#region data
	departamentosSet(data) {
		localStorage.setItem('departamentos', JSON.stringify(data));
	},
	departamentosGet() {
		return JSON.parse(localStorage.getItem('departamentos'));
	},
	corregimientosSet(data) {
		localStorage.setItem('corregimientos', JSON.stringify(data));
	},
	corregimientosGet() {
		return JSON.parse(localStorage.getItem('corregimientos'));
	},
	epsSet(data) {
		localStorage.setItem('eps', JSON.stringify(data));
	},
	epsGet() {
		return JSON.parse(localStorage.getItem('eps'));
	},
	veredasSet(data) {
		localStorage.setItem('veredas', JSON.stringify(data));
	},
	veredasGet() {
		return JSON.parse(localStorage.getItem('veredas'));
	},
	//#endregion

	usuarioIniciar(data) {
		let usuariosArray = JSON.parse(localStorage.getItem('usuariosArray'));
		usuariosArray = (usuariosArray == null) ? [] : usuariosArray;
		localStorage.setItem('usuario', JSON.stringify(data));
		let user = this.usuarioLoad();
		if (usuariosArray.length === 0) {
			usuariosArray.push(user);
		} else {
			const idx = usuariosArray.findIndex(users => users.login === data.login);
			if (idx < 0) {
				usuariosArray.push(user);
			}
		}
		localStorage.setItem('usuariosArray', JSON.stringify(usuariosArray));
	},
	usuarioLoad() {
		let data = JSON.parse(localStorage.getItem('usuario'));
		return data;
	},
	usuarioSesionCerrar() {
		localStorage.removeItem('usuario');
	},
	async usuarioLogin(login, pass) {
		let validate = false;
		let con = await this.serverTestCon();
		if (con) {
			let me = this;
			let url = this.serverGet() + 'loginmovil';
			validate = await new Promise(async(resolve, reject) => {
				await axios.post(url, {
						login: login,
						pass: pass,
					})
					.then(response => {
						let data = response.data;
						if (data.validate) {
							me.usuarioIniciar(data.data.user)
							me.epsSet(data.data.eps);
							me.departamentosSet(data.data.departamentos);
							me.corregimientosSet(data.data.corregimientos);
							me.veredasSet(data.data.veredas);
						}
						resolve(data.validate)
					})
					.catch(r => {
						resolve(false);
					})
			})
		} else {
			let md5 = require('md5');
			let usuariosArray = JSON.parse(localStorage.getItem('usuariosArray'));
			usuariosArray = (usuariosArray == null) ? [] : usuariosArray;
			const datauser = usuariosArray.find(users => users.login === login);
			if (typeof datauser === 'undefined') {
				validate = false;
			} else {
				validate = datauser.hash === (md5(pass))
				if (validate) {
					this.usuarioIniciar({
						login: login,
						pass: pass
					});
				}
			}
		}
		return true;
	},
	serverAll() {
		let data = JSON.parse(localStorage.getItem('server'));
		return (data === null ? [] : data);
	},
	serverGet() {
		let server = this.serverAll();
		let response = false;
		if (server !== null) {
			response = server.server + ':' + server.port + '/api/v1/';
		}
		return response;
	},
	serverSet(server, port, pass) {
		localStorage.setItem('server', JSON.stringify({
			server: server,
			port: port,
			pass: pass
		}));
		console.log({
			data: this.serverAll()
		});
	},
	encuestaLoad() {
		let resultado = localStorage.getItem('encuestas');
		let dataArray = (resultado === null) ? [] : JSON.parse(resultado)
		if (resultado === null) {
			let usuario = JSON.parse(localStorage.getItem('usuario'));
			usuario['encuestas'] = [];
			localStorage.setItem('encuestas', JSON.stringify([usuario]));
		}
		return dataArray;
	},
	async serverTestCon() {
		let validate = await new Promise(async(resolve, reject) => {
			let server = this.serverAll()
			if (server === false) {
				resolve(false);
			} else {
				await axios
					.get(server.server + ':' + server.port)
					.then(response => {
						resolve(true)
					})
					.catch(r => {
						resolve(false)
					})
			}
		})
		return validate;
	}
}