const Command = require('../../structs/Command')
const { MessageEmbed } = require('discord.js')
const Pagination = require('discord-paginationembed')

module.exports = class extends (
	Command
) {
	constructor(...args) {
		super(...args, {
			aliases: ['commands', 'h'],
			description: 'Displays all the commands in the bot',
			category: 'Utilities',
			usage: 'help [command]',
		})
	}

	run(message, [command]) {
		if (command) {
			const cmd =
				this.client.commands.get(command) ||
				this.client.commands.get(this.client.aliases.get(command))

			if (!cmd)
				return message.channel.send(`Invalid Command named. \`${command}\``)

			const commandHelpEmbed = new MessageEmbed()
				.setAuthor(
					`${this.client.utils.capitalise(cmd.name)} Command Help`,
					this.client.user.displayAvatarURL()
				)
				.setDescription([
					`**❯ Aliases:** ${
						cmd.aliases.length
							? cmd.aliases.map((alias) => `\`${alias}\``).join(' ')
							: 'No Aliases'
					}`,
					`**❯ Description:** ${cmd.description}`,
					`**❯ Category:** ${cmd.category}`,
					`**❯ Usage:** ${cmd.usage}`,
				])

			return message.channel.send(commandHelpEmbed)
		}

		let categories
		let commands = []

		if (!this.client.owners.includes(message.author.id)) {
			categories = this.client.utils.removeDuplicates(
				this.client.commands
					.filter((cmd) => cmd.category !== 'Owner')
					.map((cmd) => cmd.category)
			)
		} else {
			categories = this.client.utils.removeDuplicates(
				this.client.commands.map((cmd) => cmd.category)
			)
		}

		for (const category of categories) {
			commands.push(
				this.client.commands
					.filter((cmd) => cmd.category === category)
					.map((cmd) => `\`${cmd.name}\``)
					.join(' ')
			)
		}

		const mappedCommands = commands.map((name) => ({ name }))

		const Help = new Pagination.FieldsEmbed()
			.setArray(mappedCommands)
			.setChannel(message.channel)
			.setPageIndicator(true)
			.formatField(
				`​​
         ​`,
				(cmd) => cmd.name
			)

		Help.embed
			.setColor('RANDOM')
			.setTitle('Hi there 👋.')
			.setDescription(
				`Here are my commands. React on the message to change the slide. My prefix is ${this.client.prefix}`
			)

		Help.build()
	}
}
