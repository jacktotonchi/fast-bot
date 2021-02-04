const Command = require('../../structs/Command')
const customise = require('./../../customise.json')

module.exports = class extends (
	Command
) {
	constructor(...args) {
		super(...args, {
			name: 'role',
			aliases: ['togroll'],
			description: 'Add and remove roles',
			category: ['Utility'],
			usage: 'role <role name>',
		})
	}

	run(message, args) {
		if (customise.rolesCmd === false) return
		let person = message.member

		let roleArg = args[0]
		if (!roleArg) {
			message.react('👎')
			return message.channel.send('Please specify a role!')
		}

		let role = message.guild.roles.cache.find((role) => role.name === roleArg)
		if (!role) return message.channel.send('Could not find that role!')
		if (person.roles.cache.has(role.id)) {
			person.roles.remove(role.id)
			message.channel.send(`I have removed the ${roleArg} role!`)
		} else {
			person.roles.add(role.id).then(() => {
				message.channel.send(`You have been given the ${roleArg} role!`)
			})
		}
	}
}
