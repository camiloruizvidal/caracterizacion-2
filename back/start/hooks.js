'use strict'

const { hooks } = require('@adonisjs/ignitor')

hooks.after.providersBooted(() => {
  const Response = use('Adonis/Src/Response')

	Response.macro('sendSuccess', function (success, message = null, code = 200) {
    	const result = {
    		validate: true,
        	message,
    		data: success
    	}
    	this.status(code).json(result)
  	})

  	Response.macro('sendError', function (error, message = null, code = 404) {
    	const result = {
    		validate: false,
        	message,
    		data: error
    	}

    	this.status(code).json(result)
  	})
})