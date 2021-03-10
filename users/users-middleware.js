function restrict() {
	return async (req, res, next) => {
		try {
			if (!req.session || !req.session.user) {
				return res.status(403).json({
					message: "You shall not pass",
				})
			}

			next()
		} catch (err) {
			next(err)
		}
	}
}

module.exports = {
	restrict,
}