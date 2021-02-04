const Command = require('../../structs/Command')
const request = require('superagent')

module.exports = class extends (
	Command
) {
	constructor(...args) {
		super(...args, {
			name: 'catfact',
			aliases: ['kittyfact', 'catfc', 'kittenfact'],
			description: 'An interesting fact about cats.',
			category: ['Fun'],
		})
	}

	run(message, args) {
		request.get('https://catfact.ninja/fact').end((err, res) => {
			if (!err && res.status === 200) {
				message.channel.send(res.body.fact)
			} else {
				console.log(`REST call failed: ${err}`)
			}
		})
	}
}
