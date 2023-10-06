'use strict'

const Database = use('Database')
let User = use('App/Models/User')
let Departamentos = use('App/Models/TblDepartamento')
let TblEp = use('App/Models/TblEp')
let md5 = require('md5');

let veredas = use('App/Models/TblVereda');
let corregimientos = use('App/Models/TblCorregimiento');
let enfermedades = use('App/Models/TblEnfermedades');
let barrios = use('App/Models/TblBarrios');

const Hash = use('Hash')
const { validateAll } = use('Validator')

class AuthenticateController {
    async movilLogin ({ request, response }) {
        let responseData={
            user:{
                actual: null,
                codigos:[],
                hash:'',
                codigos:'',
                id:'',
                actual:'',
                nombre_primero:'',
                nombre_segundo:'',
                apellido_primero:'',
                apellido_segundo:'',
                documento:'',
                login:'',
                rol_id:'',
            },
            corregimientos:[],
            veredas:[],
            departamentos : [],
            eps:[],
            medicamentos: [],
            enfermedades: [],
            barrios: [],
        }
        let user = await
        Database.from('users')
        .where('username',request.input('login'))
        .first();

        let pass = (typeof user ==='undefined')?null:user.password;
        const siValido = await Hash.verify(request.input('pass'), pass)
        if(siValido)
        {
            let codigosTarjetasFamiliares = await Database
            .select('codigo')
            .from('tbl_tarjetas_familiares')
            .pluck('codigo');

            let codigosUsuarios = await Database
            .select('inicio', 'fin')
            .from('tbl_codigos_users')
            .where('user_id',user.id)

            codigosTarjetasFamiliares = codigosTarjetasFamiliares.map(codigo => parseInt(codigo));

            let codigos = [];
            let inicioRango = null;
            let finRango = null;

            codigosUsuarios.forEach(({ inicio, fin }) => {
                for (let i = inicio; i <= fin; i++) {
                    let codigo = parseInt(i);
                    if (!codigosTarjetasFamiliares.includes(codigo)) {
                        if (inicioRango === null) {
                            inicioRango = codigo;
                            finRango = codigo;
                        } else {
                            finRango = codigo;
                        }
                    } else {
                        if (inicioRango !== null) {
                            codigos.push({ inicio: inicioRango, fin: finRango });
                            inicioRango = null;
                            finRango = null;
                        }
                    }
                }
            });

            if (inicioRango !== null) {
                codigos.push({ inicio: inicioRango, fin: finRango });
            }

            if (user.actual === null) {
                if (codigos.length > 0) {
                    user.actual = codigos[0].inicio;
                }
            }

console.log({ codigos, codigosTarjetasFamiliares });

            responseData.user={
                actual:user.actual,
                id:user.id,
                codigos:codigos,
                hash:md5(request.input('pass')),
                nombre_primero:user.nombre_primero,
                nombre_segundo:user.nombre_segundo,
                apellido_primero:user.apellido_primero,
                apellido_segundo:user.apellido_segundo,
                documento:user.documento,
                login:user.username,
                rol_id:user.rol_id,
            }

            responseData.departamentos = await Departamentos.query().with('tbl_municipios').fetch();
            responseData.eps = await TblEp.all();
            responseData.veredas = await veredas.all();
            responseData.corregimientos = await corregimientos.all();
            responseData.medicamentos = [];
            responseData.enfermedades = await enfermedades.all();
            responseData.barrios = await barrios.all();
        }
        return {'validate':siValido,data:responseData};
    }

    async login({request, auth, response}) {
        let {email, password} = request.all()

        const validator = await this.validationLogin(request.all())

        if(validator.fails()) {
            return response.sendError(validator.messages(), 422)
        }

        const exist = await User.findBy('email', email)

        if(!exist) {
          return response.sendError('Usuario no encontrado')
        }

        if (await auth.attempt(email, password)) {
            let user_auth = exist
            let token = await auth.generate(user_auth)

            return response.sendSuccess(token, 'Inicio de sesion exitoso.')
        }

        return response.sendError('Los datos ingresado no son correcto', 422)
    }

    async logout({request, auth, response}) {
        const token = await auth.getAuthHeader();

        await auth.authenticator("jwt").revokeTokens([token]);

        return response.sendSuccess(null, 'Cierre de Sesión exitoso')
    }

    async validationLogin(data) {
        const rules = {
            email: 'required',
            password: 'required'
        }

        return await validateAll(data, rules)
    }
}

module.exports = AuthenticateController
