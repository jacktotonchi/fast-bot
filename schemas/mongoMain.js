const mongoose = require('mongoose')

const config = require('./../config.json')

if (config.mode !== 'production') {
	require('dotenv').config({ path: __dirname + '/.env' })
}

module.exports = async () => {
	await mongoose
		.connect(process.env.MONGO_CONNECTION, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false,
		})
		.then(() => console.log('🔌 Connected to Database'))

	return mongoose
}
