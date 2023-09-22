'use strict'

let User = use('App/Models/User')
const { validate } = use('Validator')
let CodigoUser = use('App/Models/CodigoUser')
const Hash = use('Hash')

class UserController {
	async index({request, response}) {
		const user = await User.query().with('roles').with('codigo_users').fetch();
		return response.status(200).json({ validated: true, data: user });
	}

	async store({request, response}) {
		const {
			firstname,
			secondname,
			lastname1,
			lastname2,
			document,
			email,
			init,
			end,
			role,
			username,
			password } = request.all();

		let data = {
			username: username,
			nombre_primero: firstname,
			nombre_segundo: secondname,
			apellido_primero: lastname1,
			apellido_segundo: lastname2,
			documento: document,
			email: email,
			password: password,
			rol_id: role,
		};

		const validated = await this.validate(data);

		if(validated.fails()) {
			return response.status(422).json({validated: false, data: validated.messages()})
		}

		let info = await User.create(data);

		if(role > 1){
			const validated = await this.validate2({ init, end });

			if(validated.fails()) {
				const destroy = await User.find(info.id)
				destroy.delete();
				return response.status(422).json({validated: false, data: validated.messages()})
			}


			const user = await User.pickInverse();
			const userJSON = user.toJSON()
			if(userJSON.length) {
				const codUser = await CodigoUser.query()
				.where('user_id', userJSON[0].id).pickInverse();
				const codUserJSON = codUser.toJSON();

				if(codUserJSON.length) {
					const lastFin = codUserJSON[0].fin;

					if(init <= lastFin) {
						return response.status(403)
						.json({ validated: false, data: "El valor inicial debe ser mayor a: " + lastFin });
					}
					if(end < init) {
						return response.status(403)
						.json({ validated: false, data: "El valor final no puede ser mayor al inicial" });
					}
				}
			}
			await CodigoUser.create({
				user_id: info.id,
				inicio: init,
				fin: end
			});
		}
		return response.status(200).json({ validated: true, data: true });
	}

	async update({params, request, response}) {
		const {
			firstname,
			secondname,
			lastname1,
			lastname2,
			document,
			email,
			init,
			end,
			role,
			username,
			password } = request.all();

		const { id } = params;

		const user = await User.find(id);
		user.nombre_primero = firstname;
		user.nombre_segundo = secondname;
		user.apellido_primero = lastname1;
		user.apellido_segundo = lastname2;
		user.documento = document;
		user.email = email;
		user.rol_id = role;
		if(password != null) {
			user.password = password
		}
		await user.save();

		if(init !== null && end !== null) {
			await CodigoUser.create({
				user_id: id,
				inicio: init,
				fin: end
			});
		}

		return response.status(200).json({ validated: true, data: true });
	}

	async destroy({params, response}) {
		const { id } = params;

		const user = await User.find(id);
		user.delete();

		return response.status(200).json({ validated: true, data: true });
	}

	async resetPass({ params, request, response }) {
		const { id } = params;
		const { oldPassword, newPassword } = request.all();

		const user = await User.find(id);
		const isSame = await Hash.verify(oldPassword, user.password)

		if(isSame) {
			user.password = newPassword;
			await user.save();
			return response.status(200).json({ validated: true });
		} else {
			return response.json({ validated: false, msj: 'La contraseña anterior no coincide' });
		}

	}

	async validate(data) {
		const rules = {
			nombre_primero: 'required',
			apellido_primero: 'required',
			documento: 'required',
			email: 'required',
			rol_id: 'required',
			username: 'required',
			password: 'required',
		}

		const validation = await validate(data, rules)
		return validation;

	}

	async validate2(data) {
		const rules = {
			init: 'required',
			end: 'required',
		}

		const validation = await validate(data, rules)
		return validation;

	}
}

module.exports = UserController
