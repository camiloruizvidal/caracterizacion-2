'use strict'

import localdata from './localdata';

export default new class functions {

	departamentosSet(data) {
		localdata.setItem('departamentos', JSON.stringify(data));
	}

	departamentosGet() {
		return JSON.parse(localdata.getItem('departamentos'));
	}

	corregimientosSet(data) {
		localdata.setItem('corregimientos', JSON.stringify(data));
	}

	corregimientosGet() {
		return JSON.parse(localdata.getItem('corregimientos'));
	}

	epsSet(data) {
		localdata.setItem('eps', JSON.stringify(data));
	}

	epsGet() {
		return JSON.parse(localdata.getItem('eps'));
	}

	veredasSet(data) {
		localdata.setItem('veredas', JSON.stringify(data));
	}

	veredasGet() {
		return JSON.parse(localdata.getItem('veredas'));
	}

	//#endregion

	usuarioIniciar(data) {
		let usuariosArray = JSON.parse(localdata.getItem('usuariosArray'));
		usuariosArray = (usuariosArray == null) ? [] : usuariosArray;
		localdata.setItem('usuario', JSON.stringify(data));
		let user = this.usuarioLoad();
		if (usuariosArray.length === 0) {
			usuariosArray.push(user);
		} else {
			const idx = usuariosArray.findIndex(users => users.login === data.login);
			if (idx < 0) {
				usuariosArray.push(user);
			}
		}
		localdata.setItem('usuariosArray', JSON.stringify(usuariosArray));
	}

	usuarioLoad() {
		let data = JSON.parse(localdata.getItem('usuario'));
		return data;
	}

	usuarioSesionCerrar() {
		localdata.remove('usuario');
	}

	async usuarioLogin(login, pass) {
		let validate = false;
		let con = await this.serverTestCon();
		if (con) {
			let me = this;
			let url = this.serverGet() + 'loginmovil';
			validate = await new Promise(async (resolve, reject) => {
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
			let usuariosArray = JSON.parse(localdata.getItem('usuariosArray'));
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
	}

	serverAll() {
		let data = JSON.parse(localdata.getItem('server'));
		return (data === null ? [] : data);
	}

	serverDelete() {
		let data = localdata.remove('server');
		return (data === null ? [] : data);
	}

	serverGet() {
		let server = this.serverAll();
		let response = false;
		if (server !== null) {
			response = server.server + ':' + server.port + '/api/v1/';
		}
		return response;
	}

	serverSet(server, port, pass) {
		localdata.setItem('server', JSON.stringify({
			server: server,
			port: port,
			pass: pass
		}));
	}

	encuestaLoad() {
		let resultado = localdata.getItem('encuestas');
		let dataArray = (resultado === null) ? [] : JSON.parse(resultado)
		if (resultado === null) {
			let usuario = JSON.parse(localdata.getItem('usuario'));
			usuario['encuestas'] = [];
			localdata.setItem('encuestas', JSON.stringify([usuario]));
		}
		return dataArray;
	}

	async serverTestCon() {
		let validate = await new Promise(async (resolve, reject) => {
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