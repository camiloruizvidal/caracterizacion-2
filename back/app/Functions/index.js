methods=
{
	validateCon()
	{
		axios.get(this.server())
	},

	server()
	{
		let server = JSON.parse(localStorage.getItem('server'))
		return  server.server+':'+server.port
	},

	serverApi()
	{
		let server = JSON.parse(localStorage.getItem('server'))
		let url = server.server+':'+server.port+'/api/v1/'
		return url;
	},

	calcularEdad(fecha)
	{
		var hoy = new Date();
		var cumpleanos =fecha;
		let edad = hoy.getFullYear() - cumpleanos.getFullYear();
		var meses = hoy.getMonth() - cumpleanos.getMonth();
		const validateYeardOld = meses < 0
								|| (
									meses === 0
									&&
									hoy.getDate() < cumpleanos.getDate()
								)
		if (validateYeardOld) {
			edad--;
		}
		meses = (edad*12)+(fecha.getMonth()+1);
		let res = {edad:edad,meses:meses,fecha:fecha};
		return res;
	},

	async asyncForEach(array, callback)
	{
		for (let index = 0; index < array.length; index++) {
			await callback(array[index], index, array);
		}
	}

};
module.exports=methods;
