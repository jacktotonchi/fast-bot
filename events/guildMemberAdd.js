const Event = require('./../structs/Event')

module.exports = class extends (
	Event
) {
	async run(member) {
		const channel = member.guild.channels.cache.find(
			(channel) => channel.name === '🚪｜joins'
		)

		if (!channel) return

		channel.send(`${member} has joined.`)
	}
}
