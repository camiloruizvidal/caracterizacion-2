'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.group(() => {
	Route.post('/login', 'AuthenticateController.login')
	Route.post('/rowsData', 'HelperController.rowsData')

	Route.resource('registros', 'TblPersonaController').apiOnly()
	// .except(['index'])

	// Route.get('/registros/:page?', 'TblPersonaController.index')
	Route.resource('tarjetas', 'TblTarjetaController')
	Route.resource('roles', 'RoleController')
	Route.resource('users', 'UserController')

	Route.post('loginmovil', 'AuthenticateController.movilLogin')
}).prefix('api/v1')

Route.group(() => {
	Route.resource('tarjetas', 'TblTarjetaController')

	Route.get('/municipios/:id', 'TblMunicipioController.show')
	Route.get('/municipios', 'TblMunicipioController.index')
	Route.get('/veredas', 'TblVeredaController.index')
	Route.get('/corregimientos', 'TblCorregimientoController.index')
	Route.get('/departamentos', 'TblDepartamentoController.index')
	Route.get('/enfermedades', 'TblEnfermedadesController.index')
	Route.get('/medicamentos', 'TblMedicamentoController.index')
	Route.get('/personas', 'TblPersonaController.index')
	Route.resource('/barrios', 'TblBarriosController')
	Route.resource('/parametrizacion', 'TblParametrizacionController')

	Route.post('/tarjetas/buscar', 'TblTarjetaController.search')
	Route.resource('configuraciones', 'TblConfiguracionController').apiOnly()
	Route.get('/tarjetas/gps/ubicacion', 'TblTarjetaController.getUbications')
	Route.get('/personasPorMunicipios', 'TblPersonaController.getPeoplesByMunicipality')
	Route.post('/fichasPorMunicipiosFiltrados', 'TblTarjetaController.getFichasByMunicipioFiltrados')
	Route.get('/fichasPorMunicipios', 'TblTarjetaController.getFichasByMunicipio')
	Route.get('/fichasPorMes', 'TblTarjetaController.getFilesMonth')
	Route.get('/graficosinformativos', 'TblTarjetaController.getFileInformation')
	Route.post('/graficosinformativosporfiltro', 'TblTarjetaController.getFileInformationByFilter')

	Route.post('/filter-persons', 'TblPersonaController.getPersonasByFilter');

	Route.post('/logout', 'AuthenticateController.logout')
	Route.post('/reset-password/:id', 'UserController.resetPass');
	Route.get('/log/cargarRegistrosRecibidos', 'TblLogController.cargarRegistrosRecibidos')
	Route.post('/log/guardarRegistrosRecibidos', 'TblLogController.guardarRegistrosRecibidos')

	Route.get('/cantidad-personas-barrios', 'TblBarriosController.getPersonasPorBarrio');
	Route.get('/cantidad-personas-veredas', 'TblVeredaController.getPersonasPorVereda');
	Route.get('/cantidad-personas-regimen', 'TblPersonaController.getPersonasPorRegimen');
})
.prefix('api/v1')
.middleware(['auth:jwt'])

