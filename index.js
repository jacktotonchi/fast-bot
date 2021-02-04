const BotClient = require('./structs/BotClient')
const config = require('./config.json')

if (config.mode !== 'production') {
	require('dotenv').config({ path: __dirname + '/.env' })
}

const Options = {
	prefix: config.prefix,
	token: process.env.DISCORD_CONNECTION,
	owners: config.owners,
	defaultPerms: config.defaultPerms,
}

const client = new BotClient(Options)
client.start()
