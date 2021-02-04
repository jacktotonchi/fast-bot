const Event = require('../structs/Event')

module.exports = class extends (
	Event
) {
	constructor(...args) {
		super(...args, {
			once: true,
		})
	}

	run() {
		console.log(
			[
				`🤖 Signed in as ${this.client.user.tag}`,
				`🎉 ${this.client.commands.size} commands!`,
				`🎉 ${this.client.events.size} events!`,
			].join('\n')
		)

		const activities = [
			`${this.client.guilds.cache.size} servers!`,
			`${this.client.channels.cache.size} channels!`,
			`${this.client.guilds.cache.reduce(
				(a, b) => a + b.memberCount,
				0
			)} users!`,
		]

		let i = 0
		setInterval(
			() =>
				this.client.user.setActivity(
					`${this.client.prefix}help | ${activities[i++ % activities.length]}`,
					{ type: 'WATCHING' }
				),
			15000
		)
	}
}
