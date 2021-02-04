const Command = require('../../structs/Command')

module.exports = class extends (
	Command
) {
	constructor(...args) {
		super(...args, {
			name: 'ping',
			aliases: ['lat', 'latency', 'connection', 'speed'],
			description: 'Check the connection speed of the bot.',
			category: ['Utility'],
			usage: 'ping',
		})
	}

	async run(message, args) {
		const msg = await message.channel.send('Pinging...')

		const latency = msg.createdTimestamp - message.createdTimestamp

		msg.edit(
			`🤖 Bot Latency: \`${latency}ms\`, API Latency: \`${Math.round(
				this.client.ws.ping
			)}ms\``
		)
	}
}
