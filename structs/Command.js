const { Permissions } = require('discord.js')

module.exports = class Command {
	constructor(client, name, options = {}) {
		this.client = client
		this.name = options.name || name
		this.aliases = options.aliases || []
		this.description = options.description || 'No description provided.'
		this.category = options.category || 'General'
		this.usage = options.usage || '<command>'
		this.userPerms = new Permissions(options.userPerms).freeze()
	}
}
