const Command = require('../../structs/Command')
const request = require('superagent')

module.exports = class extends (
	Command
) {
	constructor(...args) {
		super(...args, {
			name: 'dogfact',
			aliases: ['puppyfact', 'dogfc', 'pupfact'],
			description: 'An interesting fact about dogs.',
			category: ['Fun'],
		})
	}

	run(message) {
		request.get('https://dog-api.kinduff.com/api/facts').end((err, res) => {
			if (!err && res.status === 200) {
				message.channel.send(res.body.facts[0])
			} else {
				console.log(`REST call failed: ${err}`)
			}
		})
	}
}
