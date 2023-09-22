'use strict'

class ParentValidators {
	async fails(errorMessages) {
        return this.ctx.response.sendError(errorMessages, 422)
	}
}

module.exports = ParentValidators