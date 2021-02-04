const Command = require('../../structs/Command')
const request = require('superagent')

module.exports = class extends (
	Command
) {
	constructor(...args) {
		super(...args, {
			name: 'momma',
			aliases: ['yomomma', 'momjoke'],
			description: 'A funny "yo momma" joke.',
			category: ['Fun'],
			usage: 'momma',
		})
	}

	run(message) {
		request.get('http://api.yomomma.info/').end((err, res) => {
			if (!err && res.status === 200) {
				try {
					JSON.parse(res.text)
				} catch (e) {
					return message.reply('the API returned an unconventional response.')
				}
				const joke = JSON.parse(res.text)
				message.channel.send(joke.joke)
			} else {
				console.error(`REST call failed: ${err}`)
			}
		})
	}
}
