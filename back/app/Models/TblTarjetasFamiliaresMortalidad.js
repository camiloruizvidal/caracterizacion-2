'use strict'

const moment = require('moment')

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class TblTarjetasFamiliaresMortalidad extends Model {
    static get table () {
        return 'tbl_tarjetas_familiares_mortalidads'
    }

    static get computed ()
    {
		return ['fullnombre','edad']
	}

	getFullnombre ({ nombre_primero, nombre_segundo, apellido_primero, apellido_segundo })
	{       
		return `${nombre_primero} ${nombre_segundo !== null ? nombre_segundo: ''} ${apellido_primero} ${apellido_segundo !== null ? apellido_segundo: ''}`
	}

    getEdad({ nacimiento, fallecimiento }) 
    {
        const fecha_nacimiento = moment(nacimiento)
        const fecha_fallecimiento = moment(fallecimiento)
        
        const years = fecha_fallecimiento.diff(fecha_nacimiento, 'year')
        const months = fecha_fallecimiento.diff(fecha_nacimiento.add(years, 'years'), 'months')
        const days = fecha_fallecimiento.diff(fecha_nacimiento.add(months, 'months'), 'days')
        
        return `${years} años ${months} mes(es) ${days} dia(s)`
    }
}

module.exports = TblTarjetasFamiliaresMortalidad
