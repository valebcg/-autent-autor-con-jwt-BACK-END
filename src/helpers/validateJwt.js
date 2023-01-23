const jwt = require('jsonwebtoken')
const { errorServer } = require('./errorServer')

const validateToken = async (tokenLocal, res) => {
	try {
		const validate = await jwt.verify(
			tokenLocal,
			process.env.JWT_SECRET,
			(err, payload) => {
				if (err) {
					throw new Error('Token no valido', err)
				}
				return payload
			},
		)
		return validate
	} catch (e) {
		return errorServer(res, e)
	}
};

module.exports = { validateToken }