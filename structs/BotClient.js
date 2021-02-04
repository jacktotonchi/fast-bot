const { Client, Collection, Permissions } = require('discord.js')
const Util = require('./Util.js')

module.exports = class BotClient extends (
	Client
) {
	constructor(options = {}) {
		super({
			disableMentions: 'everyone',
		})

		this.commands = new Collection()
		this.aliases = new Collection()
		this.events = new Collection()
		this.utils = new Util(this)
		this.owners = options.owners
		this.token = options.token
		this.defaultPerms = new Permissions(options.defaultPerms).freeze()
		this.prefix = options.prefix
	}

	async start(token = this.token) {
		this.utils.loadCommands()
		this.utils.loadEvents()

		await super.login(token)
	}
}
